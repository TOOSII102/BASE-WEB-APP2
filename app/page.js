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
      
      // Trigger download immediately
      triggerDirectDownload(data.downloadUrl, data.title, data.type);
      
    } catch (err) {
      console.error('Download error:', err);
      setError(err.message || 'Download failed. Please try a different video.')
    } finally {
      setLoading(false)
    }
  }

  const triggerDirectDownload = (downloadUrl, title, type) => {
    try {
      // Create safe filename
      const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `${safeTitle}.${type}`;
      
      console.log('Starting download to device...', { downloadUrl, filename });
      
      // Method 1: Direct download with anchor tag
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filename);
      link.setAttribute('target', '_blank');
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download triggered to device');
      
    } catch (err) {
      console.error('Direct download failed:', err);
      // Fallback: Open in new tab
      window.open(downloadUrl, '_blank');
    }
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

  // Test with popular music video
  const testDownload = () => {
    setUrl('https://www.youtube.com/watch?v=JGwWNGJdvx8'); // Popular music video
    setTimeout(() => handleDownload(), 100);
  }

  return (
    <>
      <Head>
        <title>TOOSII TECH - YouTube to MP3/MP4 Downloader</title>
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
          maxWidth: '800px', 
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
            Download videos as MP4 or audio as MP3 directly to your device
          </p>

          {/* Download Section */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Test Button */}
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
              <button 
                onClick={testDownload}
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
                🎵 Test Download (Music Video)
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
                placeholder="Paste YouTube link here and press Enter..."
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
                    padding: '0.75rem 1rem',
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
                    padding: '0.75rem 1rem',
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
              {loading ? '⬇️ Downloading...' : '⬇️ Download to Device'}
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
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white', margin: 0 }}>
                  ✅ Downloading to Device...
                </h3>
                <button 
                  onClick={resetForm}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid #334155',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Download Another
                </button>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '8px'
              }}>
                <div style={{ color: '#10b981', textAlign: 'center', marginBottom: '1rem' }}>
                  ✅ Your {result.type.toUpperCase()} file is downloading to your device
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
                  💡 Check your Downloads folder for the file
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white', textAlign: 'center' }}>
              How to Download
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { icon: '1️⃣', title: 'Paste URL', desc: 'Copy and paste any YouTube video URL' },
                { icon: '2️⃣', title: 'Choose Format', desc: 'Select MP4 for video or MP3 for audio' },
                { icon: '3️⃣', title: 'Click Download', desc: 'File downloads directly to your device' },
                { icon: '4️⃣', title: 'Enjoy', desc: 'Find the file in your Downloads folder' }
              ].map((step, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{step.title}</h4>
                  <p style={{ color: '#cbd5e0', fontSize: '0.875rem' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderTop: '1px solid #334155',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
              TOOSII TECH
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '2rem' }}>
              Download YouTube videos and audio directly to your device
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📧 toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📞 +254 748 340 864
              </a>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              © 2024 TOOSII TECH. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
