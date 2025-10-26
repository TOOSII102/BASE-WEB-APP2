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

    // Use the actual video-download-api.com service
    const apiUrl = `https://loader.to/api/download?url=${encodeURIComponent(url)}&format=${type}`;
    
    // Fetch from the actual API
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();

    if (!data.success) {
      throw new Error(data.message || 'Download service failed');
    }

    // Format the response with actual data from the API
    const responseData = {
      success: true,
      downloadUrl: `https://p.savenow.to/api/download?id=${data.id}&type=${type}`,
      title: data.title || `YouTube Video - ${videoId}`,
      duration: 'Processing...',
      quality: type === 'mp4' ? 'HD' : '128kbps',
      size: 'Processing...',
      type: type,
      videoId: videoId,
      thumbnail: data.info?.image || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      progressUrl: data.progress_url,
      apiId: data.id
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ 
      error: 'Failed to process download request. Please try again.' 
    });
  }
}
