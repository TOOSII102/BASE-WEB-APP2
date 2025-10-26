'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const [url, setUrl] = useState('')
  const [downloadType, setDownloadType] = useState('mp4')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const urlInputRef = useRef(null)

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/youtube-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.trim(),
          type: downloadType
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process download')
      }

      if (!data.success) {
        throw new Error('Download service error')
      }

      setResult(data)
      
      // Open download page in new tab
      openDownloadPage(data.videoId, data.type);
      
    } catch (err) {
      console.error('Download error:', err);
      setError(err.message || 'Download failed. Please try a different video.')
    } finally {
      setLoading(false)
    }
  }

  const openDownloadPage = (videoId, type) => {
    // Use working YouTube download websites
    const downloadUrls = {
      mp3: [
        `https://ytmp3.cc/en13/convert?video=https://www.youtube.com/watch?v=${videoId}`,
        `https://yt1s.com/en27?q=https://www.youtube.com/watch?v=${videoId}`,
        `https://yt5s.com/en32?q=https://www.youtube.com/watch?v=${videoId}`
      ],
      mp4: [
        `https://yt5s.com/en32?q=https://www.youtube.com/watch?v=${videoId}`,
        `https://yt1s.com/en27?q=https://www.youtube.com/watch?v=${videoId}`,
        `https://en.y2mate.is/youtube-to-mp4/${videoId}`
      ]
    };

    // Open the first download URL in new tab
    const downloadUrl = downloadUrls[type][0];
    window.open(downloadUrl, '_blank');
    
    console.log('Opening download page:', downloadUrl);
  }

  const resetForm = () => {
    setUrl('')
    setDownloadType('mp4')
    setResult(null)
    setError('')
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && url.trim()) {
      handleDownload();
    }
  }

  // Test with working videos
  const testDownload = (videoType = 'mp4') => {
    const testVideos = {
      mp4: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
      mp3: 'https://www.youtube.com/watch?v=JGwWNGJdvx8'  // Ed Sheeran - Shape of You
    };
    
    setUrl(testVideos[videoType]);
    setDownloadType(videoType);
    setTimeout(() => handleDownload(), 100);
  }

  return (
    <>
      <Head>
        <title>TOOSII TECH - YouTube Downloader</title>
        <meta name="description" content="Download YouTube videos as MP4 or audio as MP3 directly to your device" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        {/* Navigation */}
        <nav style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderBottom: '1px solid #334155',
          padding: '1rem 0',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none'
            }}>
              TOOSII TECH
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none' }}>Home</Link>
              <a href="https://toosii-tech-company-3npa.vercel.app/" style={{ color: '#60a5fa', textDecoration: 'none' }}>Portal</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          padding: '2rem'
        }}>
          <h1 style={{ 
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            YouTube Downloader
          </h1>
          <p style={{ 
            textAlign: 'center',
            color: '#cbd5e0',
            marginBottom: '2rem'
          }}>
            Download YouTube videos and audio to your device
          </p>

          {/* Download Box */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Test Buttons */}
            <div style={{ marginBottom: '1rem', textAlign: 'center', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <button 
                onClick={() => testDownload('mp4')}
                style={{
                  background: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  border: '1px solid #60a5fa',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Test MP4 Video
              </button>
              <button 
                onClick={() => testDownload('mp3')}
                style={{
                  background: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  border: '1px solid #60a5fa',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}
              >
                Test MP3 Audio
              </button>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#cbd5e0',
                fontWeight: '500'
              }}>
                YouTube URL
              </label>
              <input 
                ref={urlInputRef}
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Paste any YouTube link here..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #475569',
                  background: '#1e293b',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#cbd5e0',
                fontWeight: '500'
              }}>
                Download As
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setDownloadType('mp4')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    borderRadius: '8px',
                    border: downloadType === 'mp4' ? '2px solid #60a5fa' : '1px solid #475569',
                    background: downloadType === 'mp4' ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  🎥 MP4 Video
                </button>
                <button
                  type="button"
                  onClick={() => setDownloadType('mp3')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    borderRadius: '8px',
                    border: downloadType === 'mp3' ? '2px solid #60a5fa' : '1px solid #475569',
                    background: downloadType === 'mp3' ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  🎵 MP3 Audio
                </button>
              </div>
            </div>

            <button 
              onClick={handleDownload}
              disabled={loading || !url.trim()}
              style={{
                width: '100%',
                background: loading || !url.trim() ? '#475569' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !url.trim() ? 0.7 : 1
              }}
            >
              {loading ? '🔄 Processing...' : '⬇️ Open Download Page'}
            </button>
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              ⚠️ {error}
            </div>
          )}

          {result && (
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
                ✅ Download Page Opened!
              </h3>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <div style={{ color: '#10b981', textAlign: 'center', marginBottom: '1rem', fontWeight: '500' }}>
                  Download page opened in new tab
                </div>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Format</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.type.toUpperCase()}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Quality</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.quality}</div>
                  </div>
                </div>

                <div style={{ color: '#94a3b8', fontSize: '0.875rem', textAlign: 'center' }}>
                  💡 Follow the instructions on the download page to get your file
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={resetForm}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid #334155',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  Download Another
                </button>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>How It Works</h3>
            <div style={{ color: '#cbd5e0', lineHeight: '1.6', background: 'rgba(30, 41, 59, 0.5)', padding: '1rem', borderRadius: '8px' }}>
              1. Paste YouTube URL and select format<br />
              2. Click "Open Download Page"<br />
              3. Download page opens in new tab<br />
              4. Follow instructions to download file<br />
              5. File saves to your device
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderTop: '1px solid #334155',
          padding: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
              TOOSII TECH
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Easy YouTube video and audio downloads
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
