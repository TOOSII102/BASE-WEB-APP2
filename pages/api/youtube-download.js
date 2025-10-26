export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url, type } = req.body;

  try {
    // Validate input
    if (!url || !type) {
      return res.status(400).json({ error: 'URL and type are required' });
    }

    // Basic YouTube URL validation
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(url)) {
      return res.status(400).json({ error: 'Please enter a valid YouTube URL' });
    }

    // Extract video ID
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }

    if (!videoId || videoId.length !== 11) {
      return res.status(400).json({ error: 'Could not extract valid video ID from URL' });
    }

    // Use a reliable YouTube download API
    // Option 1: y2mate API (free and reliable)
    const apiUrl = `https://y2mate.com/mates/analyzeV2/ajax`;
    
    const formData = new URLSearchParams();
    formData.append('k_query', url);
    formData.append('k_page', 'home');
    formData.append('hl', 'en');
    formData.append('q_auto', '0');

    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: formData
    });

    const data = await apiResponse.json();

    if (!data || !data.links) {
      // Fallback to direct download links
      const fallbackData = {
        success: true,
        downloadUrl: `https://loader.to/api/download?url=${encodeURIComponent(url)}&format=${type}`,
        title: `YouTube Video - ${videoId}`,
        duration: 'Unknown',
        quality: type === 'mp4' ? '720p' : '128kbps',
        size: 'Unknown',
        type: type,
        videoId: videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      };
      
      return res.status(200).json(fallbackData);
    }

    // Process the response and find the best download link
    let downloadLink = '';
    let quality = '';

    if (type === 'mp3') {
      // Find MP3 links
      const mp3Links = Object.values(data.links.mp3 || {});
      if (mp3Links.length > 0) {
        downloadLink = mp3Links[0].dlink || mp3Links[0].link;
        quality = mp3Links[0].q || '128kbps';
      }
    } else {
      // Find MP4 links
      const mp4Links = Object.values(data.links.mp4 || {});
      if (mp4Links.length > 0) {
        // Get the highest quality
        const bestQuality = mp4Links.reduce((best, current) => {
          return (parseInt(current.size) > parseInt(best.size)) ? current : best;
        });
        downloadLink = bestQuality.dlink || bestQuality.link;
        quality = bestQuality.q || '720p';
      }
    }

    if (!downloadLink) {
      throw new Error('No download link found for the selected format');
    }

    // Get video info for title
    const videoInfo = data.video_title || `YouTube Video - ${videoId}`;

    const responseData = {
      success: true,
      downloadUrl: downloadLink,
      title: videoInfo,
      duration: 'Unknown',
      quality: quality,
      size: 'Unknown',
      type: type,
      videoId: videoId,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Download error:', error);
    
    // Fallback: Return a direct download link using loader.to
    try {
      const fallbackUrl = `https://loader.to/api/download?url=${encodeURIComponent(url)}&format=${type}`;
      
      const responseData = {
        success: true,
        downloadUrl: fallbackUrl,
        title: 'YouTube Video',
        duration: 'Unknown',
        quality: type === 'mp4' ? '720p' : '128kbps',
        size: 'Unknown',
        type: type,
        videoId: 'unknown',
        thumbnail: ''
      };

      res.status(200).json(responseData);
    } catch (fallbackError) {
      res.status(500).json({ 
        error: 'Download service is temporarily unavailable. Please try again later.' 
      });
    }
  }
}
