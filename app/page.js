'use client'

import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
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
        throw new Error('Download failed - please try again')
      }

      setResult(data)
    } catch (err) {
      setError(err.message || 'An error occurred while processing your request')
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
        <title>TOOSII TECH - YouTube Downloader</title>
        <meta name="description" content="Download YouTube videos as MP4 or extract audio as MP3" />
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
            Download YouTube videos as MP4 or extract audio as MP3
          </p>

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
                  YouTube URL
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
                <h3 style={{ fontSize: '1.25rem', color: 'white', margin: 0 }}>
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
                  New Download
                </button>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}>
                  {result.title}
                </h4>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Duration</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.duration}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Quality</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.quality}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Size</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.size}</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Format</div>
                    <div style={{ color: 'white', fontWeight: '500' }}>{result.type.toUpperCase()}</div>
                  </div>
                </div>

                <a 
                  href={result.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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

              {result.note && (
                <div style={{ color: '#94a3b8', fontSize: '0.875rem', fontStyle: 'italic' }}>
                  {result.note}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
