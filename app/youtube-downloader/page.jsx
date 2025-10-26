'use client'

import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function YoutubeDownloader() {
  const [url, setUrl] = useState('')
  const [downloadType, setDownloadType] = useState('mp4')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleDownload = async (e) => {
    e.preventDefault()
    
    if (!url.trim()) {
      setError('Please enter a YouTube URL')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/youtube', {
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
        throw new Error(data.error || 'Failed to download video')
      }

      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setUrl('')
    setDownloadType('mp4')
    setResult(null)
    setError('')
  }

  return (
    <>
      <Head>
        <title>YouTube Downloader - TOOSII TECH</title>
        <meta name="description" content="Download YouTube videos and audio in MP4 and MP3 formats for free." />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        {/* Navigation */}
        <nav style={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #334155',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100
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
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <Link href="/services" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Portal</a>
              <Link href="/contact" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              YouTube Downloader
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#cbd5e0',
              lineHeight: '1.6'
            }}>
              Download YouTube videos and audio in high quality MP4 and MP3 formats
            </p>
          </div>

          {/* Download Form */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <form onSubmit={handleDownload}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0',
                  fontWeight: '500'
                }}>
                  YouTube URL *
                </label>
                <input 
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #475569',
                    background: '#1e293b',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0',
                  fontWeight: '500'
                }}>
                  Download Format
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="radio"
                      value="mp4"
                      checked={downloadType === 'mp4'}
                      onChange={(e) => setDownloadType(e.target.value)}
                      style={{ accentColor: '#60a5fa' }}
                    />
                    <span>MP4 Video</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="radio"
                      value="mp3"
                      checked={downloadType === 'mp3'}
                      onChange={(e) => setDownloadType(e.target.value)}
                      style={{ accentColor: '#60a5fa' }}
                    />
                    <span>MP3 Audio</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? '#475569' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Processing...' : 'Download'}
              </button>
            </form>

            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                {error}
              </div>
            )}
          </div>

          {/* Results */}
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
                <h3 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>
                  Download Ready!
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
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}>
                  {result.data.title || 'YouTube Video'}
                </h4>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {result.duration && (
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Duration</div>
                      <div style={{ color: 'white', fontWeight: '500' }}>{result.duration}</div>
                    </div>
                  )}
                  {result.quality && (
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Quality</div>
                      <div style={{ color: 'white', fontWeight: '500' }}>{result.quality}</div>
                    </div>
                  )}
                  {result.size && (
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875ml' }}>Size</div>
                      <div style={{ color: 'white', fontWeight: '500' }}>{result.size}</div>
                    </div>
                  )}
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Format</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.type.toUpperCase()}</div>
                  </div>
                </div>

                <a 
                  href={result.downloadUrl}
                  download
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}
                >
                  Download {result.type.toUpperCase()}
                </a>
              </div>

              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                💡 Right-click the download button and select "Save link as..." to download the file.
              </div>
            </div>
          )}

          {/* Features */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white', textAlign: 'center' }}>
              Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { icon: '🎥', title: 'High Quality', desc: 'Download videos in HD quality' },
                { icon: '🎵', title: 'MP3 Audio', desc: 'Extract audio from videos' },
                { icon: '⚡', title: 'Fast Processing', desc: 'Quick download processing' },
                { icon: '🔒', title: 'Secure', desc: 'No data stored on our servers' }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                  <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p style={{ color: '#cbd5e0', fontSize: '0.875rem' }}>{feature.desc}</p>
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
              Leading technology solutions in Nairobi, Kenya
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📧 toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📞 +254 748 340 864
              </a>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#60a5fa', textDecoration: 'none' }}>
                🌐 Company Portal
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
