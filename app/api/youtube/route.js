import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { url, type = 'mp4' } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: 'YouTube URL is required' },
        { status: 400 }
      )
    }

    // Validate YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    if (!youtubeRegex.test(url)) {
      return NextResponse.json(
        { error: 'Please provide a valid YouTube URL' },
        { status: 400 }
      )
    }

    const apiUrl = `https://casper-tech-apis.vercel.app/api/yt-dl?url=${encodeURIComponent(url)}&type=${type}`

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    if (data.error) {
      return NextResponse.json(
        { error: data.error },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      data: data,
      downloadUrl: data.downloadUrl || data.url,
      title: data.title,
      duration: data.duration,
      quality: data.quality,
      size: data.size,
      type: type
    })

  } catch (error) {
    console.error('YouTube download error:', error)
    return NextResponse.json(
      { error: 'Failed to process YouTube video. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST instead.' },
    { status: 405 }
  )
}
