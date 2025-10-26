'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const [url, setUrl] = useState('')
  const [downloadType, setDownloadType] = useState('mp4')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [autoDownload, setAutoDownload] = useState(false)
  const urlInputRef = useRef(null)

  // Auto-download when URL is pasted and format is selected
  useEffect(() => {
    if (url && autoDownload) {
      handleAutoDownload();
    }
  }, [url, downloadType, autoDownload]);

  const handleAutoDownload = async () => {
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
      
      // Automatically trigger download
      setTimeout(() => {
        triggerDownload(data.downloadUrl, data.title, data.type);
      }, 1000);
      
    } catch (err) {
      setError(err.message || 'An error occurred while processing your request')
    } finally {
      setLoading(false)
      setAutoDownload(false)
    }
  }

  const triggerDownload = (downloadUrl, title, type) => {
    try {
      // Create a safe filename
      const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `${safeTitle}.${type}`;
      
      // Method 1: Direct download using anchor tag
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', filename);
      link.setAttribute('target', '_blank');
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download triggered:', filename);
      
    } catch (err) {
      console.error('Download error:', err);
      // Fallback: Open in new tab
      window.open(downloadUrl, '_blank');
    }
  }

  const handleUrlPaste = (e) => {
    // Set auto-download flag when user pastes a URL
    setTimeout(() => {
      if (url.trim()) {
        setAutoDownload(true);
      }
    }, 500);
  }

  const handleFormatChange = (type) => {
    setDownloadType(type);
    if (url.trim()) {
      setAutoDownload(true);
    }
  }

  const resetForm = () => {
    setUrl('')
    setDownloadType('mp4')
    setResult(null)
    setError('')
    setAutoDownload(false)
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }

  const manualDownload = () => {
    setAutoDownload(true);
  }

  return (
    <>
      <Head>
        <title>TOOSII TECH - YouTube Downloader & Tech Solutions</title>
        <meta name="description" content="Download YouTube videos and audio in MP4 and MP3 formats. Leading technology solutions in Nairobi, Kenya." />
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

        {/* Hero Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '4rem 2rem 2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            TOOSII TECH
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#cbd5e0',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            YouTube Downloader - Auto Download to Device
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Left Column - Services */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>
                Our Services
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  { 
                    icon: '💻', 
                    title: 'Web Development', 
                    desc: 'Custom websites and web applications built with modern technologies' 
                  },
                  { 
                    icon: '📱', 
                    title: 'Mobile Apps', 
                    desc: 'iOS and Android applications for your business needs' 
                  },
                  { 
                    icon: '☁️', 
                    title: 'Cloud Solutions', 
                    desc: 'Cloud infrastructure and deployment services' 
                  },
                  { 
                    icon: '🔧', 
                    title: 'IT Support', 
                    desc: '24/7 technical support and maintenance services' 
                  },
                  { 
                    icon: '🎨', 
                    title: 'UI/UX Design', 
                    desc: 'Beautiful and user-friendly interface designs' 
                  },
                  { 
                    icon: '🚀', 
                    title: 'Digital Marketing', 
                    desc: 'Boost your online presence and reach more customers' 
                  }
                ].map((service, index) => (
                  <div key={index} style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #334155',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = '#60a5fa'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = '#334155'
                  }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
                    <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#cbd5e0', lineHeight: '1.5' }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
                About TOOSII TECH
              </h2>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6', marginBottom: '1rem' }}>
                Based in Nairobi, Kenya, TOOSII TECH provides cutting-edge technology solutions 
                for businesses and individuals.
              </p>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6' }}>
                Our YouTube downloader automatically downloads files to your device when you paste a link and select format.
              </p>
            </div>
          </div>

          {/* Right Column - YouTube Downloader */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1.5rem', 
                color: 'white',
                textAlign: 'center'
              }}>
                YouTube Downloader
              </h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0',
                  fontWeight: '500'
                }}>
                  Paste YouTube URL *
                </label>
                <input 
                  ref={urlInputRef}
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onPaste={handleUrlPaste}
                  placeholder="Paste YouTube link here..."
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
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Paste a link and select format to auto-download
                </div>
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
                  <button
                    type="button"
                    onClick={() => handleFormatChange('mp4')}
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
                    MP4 Video
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFormatChange('mp3')}
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
                    MP3 Audio
                  </button>
                </div>
              </div>

              {!loading && !autoDownload && url && (
                <button 
                  onClick={manualDownload}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                  }}
                >
                  Download Now
                </button>
              )}

              {(loading || autoDownload) && (
                <div style={{
                  width: '100%',
                  background: '#475569',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}>
                  ⏳ Downloading to your device...
                </div>
              )}
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
                {error}
              </div>
            )}

            {/* Results */}
            {result && (
              <div style={{
                background: 'rgba(30, 41, 59, 0.9)',
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
                  <h4 style={{ fontSize: '1.25rem', color: 'white', margin: 0 }}>
                    ✅ Download Complete!
                  </h4>
                  <button 
                    onClick={resetForm}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid #334155',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
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
                  <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>
                    {result.title}
                  </h5>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Format</div>
                      <div style={{ color: 'white', fontWeight: '500', fontSize: '0.875rem' }}>
                        {result.type.toUpperCase()}
                      </div>
                    </div>
                    <div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Status</div>
                      <div style={{ color: '#10b981', fontWeight: '500', fontSize: '0.875rem' }}>
                        Downloaded to Device
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    color: '#10b981', 
                    textAlign: 'center',
                    padding: '0.5rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '6px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    ✅ File saved to your Downloads folder
                  </div>
                </div>

                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                  💡 Check your Downloads folder to listen to the {result.type.toUpperCase()} file
                </div>
              </div>
            )}

            {/* Instructions */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                How to Use
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '1. Paste any YouTube URL',
                  '2. Select MP4 or MP3 format',
                  '3. File downloads automatically',
                  '4. Check your Downloads folder',
                  '5. Enjoy your music/video!'
                ].map((step, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: '#cbd5e0',
                    fontSize: '0.9rem'
                  }}>
                    {step}
                  </div>
                ))}
              </div>
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
