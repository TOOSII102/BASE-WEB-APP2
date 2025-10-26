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

    // Use the savenow.to API directly
    const apiUrl = 'https://p.savenow.to/api/start';
    
    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        format: type
      })
    });

    const data = await apiResponse.json();

    if (!data.success) {
      throw new Error(data.message || 'Download service failed');
    }

    // Wait a moment for processing, then get the download URL
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Format the response with actual data from the API
    const responseData = {
      success: true,
      downloadUrl: `https://p.savenow.to/api/download?id=${data.id}`,
      title: data.title || 'YouTube Video',
      duration: 'Processing...',
      quality: type === 'mp4' ? 'HD' : '128kbps',
      size: 'Processing...',
      type: type,
      thumbnail: data.info?.image,
      progressUrl: data.progress_url,
      apiId: data.id,
      filename: `${data.title || 'youtube_video'}.${type}`
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ 
      error: 'Failed to process download request. Please try again.' 
    });
  }
}
