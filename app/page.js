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
  const [downloading, setDownloading] = useState(false)

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
    setDownloading(false)
  }

  // Function to handle the actual download to device
  const handleActualDownload = async () => {
    if (!result || !result.downloadUrl) return;

    setDownloading(true);
    
    try {
      // Create a safe filename
      const safeTitle = result.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `${safeTitle}.${result.type}`;
      
      // Method 1: Direct download using anchor tag with download attribute
      const link = document.createElement('a');
      link.href = result.downloadUrl;
      link.setAttribute('download', filename);
      link.setAttribute('target', '_blank');
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fallback: If direct download doesn't work, open in new tab
      setTimeout(() => {
        window.open(result.downloadUrl, '_blank');
      }, 1000);
      
    } catch (err) {
      console.error('Download error:', err);
      // Fallback to opening in new tab
      window.open(result.downloadUrl, '_blank');
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  }

  // Alternative download method using fetch (for smaller files)
  const handleFetchDownload = async () => {
    if (!result || !result.downloadUrl) return;

    setDownloading(true);
    
    try {
      const response = await fetch(result.downloadUrl);
      const blob = await response.blob();
      
      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      link.href = blobUrl;
      
      const safeTitle = result.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const filename = `${safeTitle}.${result.type}`;
      link.download = filename;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up blob URL
      window.URL.revokeObjectURL(blobUrl);
      
    } catch (err) {
      console.error('Fetch download error:', err);
      // Fallback to direct method
      handleActualDownload();
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
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
            Leading Technology Solutions & YouTube Downloader
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
                for businesses and individuals. We specialize in web development, mobile applications, 
                and digital services that help you succeed in the digital world.
              </p>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6' }}>
                Our YouTube downloader tool is just one example of our commitment to creating 
                useful, free tools for the community.
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
                    ✅ Download Ready!
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
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Quality</div>
                      <div style={{ color: 'white', fontWeight: '500', fontSize: '0.875rem' }}>
                        {result.quality}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleActualDownload}
                    disabled={downloading}
                    style={{
                      width: '100%',
                      background: downloading 
                        ? 'linear-gradient(135deg, #475569, #64748b)' 
                        : 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      border: 'none',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      cursor: downloading ? 'not-allowed' : 'pointer',
                      opacity: downloading ? 0.7 : 1
                    }}
                  >
                    {downloading ? 'Downloading...' : `⬇️ Download ${result.type.toUpperCase()}`}
                  </button>
                </div>

                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                  💡 The file will download directly to your device
                </div>
              </div>
            )}

            {/* Quick Features */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '1.5rem'
            }}>
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Download Features
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '🎥 High Quality MP4 Videos',
                  '🎵 Clear MP3 Audio',
                  '⚡ Fast Processing',
                  '🔒 Secure & Private',
                  '📱 Mobile Friendly',
                  '💯 Free Service'
                ].map((feature, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: '#cbd5e0',
                    fontSize: '0.9rem'
                  }}>
                    {feature}
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
