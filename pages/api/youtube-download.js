export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url, type } = req.body;

  try {
    // Validate input
    if (!url || !type) {
      return res.status(400).json({ error: 'URL and type are required' });
    }

    // Validate YouTube URL
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

    if (!videoId) {
      return res.status(400).json({ error: 'Could not extract video ID from URL' });
    }

    // For demo purposes - in a real implementation, you would use ytdl-core or similar
    // This creates a mock download URL that simulates the download process
    const mockDownloadUrl = `https://youtube-download.example.com/download/${videoId}.${type}`;
    
    // Mock response data
    const responseData = {
      success: true,
      downloadUrl: mockDownloadUrl,
      title: `YouTube Video - ${videoId}`,
      duration: '10:30',
      quality: type === 'mp4' ? '1080p' : '128kbps',
      size: type === 'mp4' ? '45.2 MB' : '8.7 MB',
      type: type,
      videoId: videoId
    };

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ 
      error: 'Failed to process download request. Please try again.' 
    });
  }
}
