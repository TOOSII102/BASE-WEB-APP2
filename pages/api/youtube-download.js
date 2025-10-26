import ytdl from 'ytdl-core';
import { PassThrough } from 'stream';

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
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: 'Please enter a valid YouTube URL' });
    }

    // Get video info
    const info = await ytdl.getInfo(url);
    const videoDetails = info.videoDetails;

    if (!videoDetails) {
      return res.status(400).json({ error: 'Could not fetch video information' });
    }

    // Choose format based on type
    let format;
    if (type === 'mp3') {
      format = ytdl.chooseFormat(info.formats, {
        quality: 'highestaudio',
        filter: 'audioonly'
      });
    } else {
      format = ytdl.chooseFormat(info.formats, {
        quality: 'highest',
        filter: 'videoandaudio'
      });
    }

    if (!format) {
      return res.status(400).json({ error: 'No suitable format found for download' });
    }

    // Calculate approximate file size and duration
    const duration = parseInt(videoDetails.lengthSeconds);
    const durationFormatted = formatDuration(duration);
    
    // Estimate file size (rough calculation)
    const bitrate = format.bitrate || (type === 'mp3' ? 128000 : 1000000);
    const estimatedSize = Math.round((bitrate * duration) / (8 * 1024 * 1024));
    const sizeText = estimatedSize > 0 ? `${estimatedSize} MB` : 'Unknown';

    // Prepare response data
    const responseData = {
      success: true,
      downloadUrl: format.url,
      title: videoDetails.title,
      duration: durationFormatted,
      quality: format.qualityLabel || (type === 'mp3' ? '128kbps' : 'HD'),
      size: sizeText,
      type: type,
      videoId: videoDetails.videoId,
      thumbnail: videoDetails.thumbnails[0]?.url
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Download error:', error);
    
    if (error.message.includes('Video unavailable')) {
      return res.status(400).json({ error: 'Video is unavailable or private' });
    }
    
    if (error.message.includes('Sign in to confirm')) {
      return res.status(400).json({ error: 'This video is age-restricted and cannot be downloaded' });
    }

    res.status(500).json({ 
      error: 'Failed to process download request. Please try again with a different video.' 
    });
  }
}

// Helper function to format duration
function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export const config = {
  api: {
    responseLimit: false,
  },
};
