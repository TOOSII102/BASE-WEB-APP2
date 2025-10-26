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
  const [downloading, setDownloading] = useState(false)
  const urlInputRef = useRef(null)

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)
    setDownloading(false)

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
      setDownloading(true)
      
      // Try all download URLs until one works
      triggerBrowserDownload(data.downloadUrls, `youtube_download.${data.type}`);
      
    } catch (err) {
      console.error('Download error:', err);
      setError(err.message || 'Download failed. Please try a different video.')
    } finally {
      setLoading(false)
    }
  }

  const triggerBrowserDownload = (downloadUrls, filename) => {
    console.log('Starting browser download...', { downloadUrls, filename });
    
    let success = false;
    
    // Try each download URL until one works
    downloadUrls.forEach((downloadUrl, index) => {
      if (success) return; // Skip if already succeeded
      
      setTimeout(() => {
        try {
          // Method 1: Direct download with anchor tag (works in Chrome, Firefox, Edge, Safari)
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = filename; // This triggers download in supported browsers
          link.target = '_blank'; // Fallback for browsers that don't support download attribute
          link.rel = 'noopener noreferrer';
          
          // Style it to be invisible
          link.style.display = 'none';
          
          // Append to body and trigger click
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          console.log(`Download attempt ${index + 1} triggered:`, downloadUrl);
          success = true;
          
        } catch (err) {
          console.log(`Download attempt ${index + 1} failed:`, err);
          
          // Last resort: open in new tab
          if (index === downloadUrls.length - 1 && !success) {
            window.open(downloadUrl, '_blank');
          }
        }
      }, index * 1000); // Stagger attempts by 1 second
    });
  }

  const resetForm = () => {
    setUrl('')
    setDownloadType('mp4')
    setResult(null)
    setError('')
    setDownloading(false)
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && url.trim()) {
      handleDownload();
    }
  }

  // Test with popular videos
  const testDownload = (videoType = 'mp4') => {
    const testVideos = {
      mp4: 'https://www.youtube.com/watch?v=JGwWNGJdvx8', // Shape of You - Ed Sheeran
      mp3: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' // Bohemian Rhapsody - Queen
    };
    
    setUrl(testVideos[videoType]);
    setDownloadType(videoType);
    setTimeout(() => handleDownload(), 100);
  }

  return (
    <>
      <Head>
        <title>TOOSII TECH - YouTube to MP3/MP4 Downloader</title>
        <meta name="description" content="Download YouTube videos as MP4 or audio as MP3 directly to your device - Works on Chrome, Firefox, Safari, Edge" />
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
            Download YouTube videos and audio directly to your device<br />
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              Works on Chrome, Firefox, Safari, Edge, and all modern browsers
            </span>
          </p>

          {/* Download Section */}
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
                🎥 Test MP4 Video
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
                🎵 Test MP3 Audio
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
                    fontWeight: '500',
                    fontSize: '1rem'
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
                    fontWeight: '500',
                    fontSize: '1rem'
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
                padding: '1.25rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !url.trim() ? 0.7 : 1
              }}
            >
              {loading ? '🔄 Processing...' : '⬇️ Download to Device'}
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
                  {downloading ? '✅ Download Complete!' : '⬇️ Downloading...'}
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
                <div style={{ 
                  color: downloading ? '#10b981' : '#60a5fa', 
                  textAlign: 'center', 
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  {downloading 
                    ? '✅ File downloaded to your device!' 
                    : '⬇️ Downloading to your device...'}
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

          {/* Browser Support */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white', textAlign: 'center' }}>
              Supported Browsers
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { icon: '🌐', name: 'Chrome', desc: 'Fully supported' },
                { icon: '🦊', name: 'Firefox', desc: 'Fully supported' },
                { icon: '🔵', name: 'Edge', desc: 'Fully supported' },
                { icon: '🍎', name: 'Safari', desc: 'Fully supported' },
                { icon: '⚡', name: 'Opera', desc: 'Fully supported' },
                { icon: '📱', name: 'Mobile', desc: 'Chrome & Safari' }
              ].map((browser, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{browser.icon}</div>
                  <h4 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1rem' }}>{browser.name}</h4>
                  <p style={{ color: '#cbd5e0', fontSize: '0.75rem' }}>{browser.desc}</p>
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
              Download YouTube videos and audio directly to your device - All browsers supported
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
