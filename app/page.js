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

  // Function to handle direct download with progress
  const handleDirectDownload = (downloadUrl, filename) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Head>
        <title>TOOSII TECH - YouTube Downloader & Tech Solutions</title>
        <meta name="description" content="Download YouTube videos and audio in MP4 and MP3 formats. Leading technology solutions in Nairobi, Kenya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Navigation */}
        <nav style={{
          background: 'rgba(15, 23, 42, 0.95)',
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
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                padding: '0.25rem 0.5rem',
                borderRadius: '6px',
                fontSize: '1.25rem'
              }}>⚡</span>
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
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: '1.2'
          }}>
            YouTube Downloader
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#cbd5e0',
            marginBottom: '0.5rem',
            lineHeight: '1.6'
          }}>
            Download YouTube videos as MP4 or extract audio as MP3
          </p>
          <p style={{ 
            fontSize: '0.9rem', 
            color: '#94a3b8',
            lineHeight: '1.5'
          }}>
            Fast, free, and easy to use - no registration required
          </p>
        </div>

        {/* Main Content */}
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '0 2rem 4rem'
        }}>
          {/* Download Form */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <form onSubmit={handleDownload}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.75rem',
                  color: '#cbd5e0',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  YouTube URL *
                </label>
                <input 
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste YouTube link here... (e.g., https://www.youtube.com/watch?v=...)"
                  style={{
                    width: '100%',
                    padding: '1rem 1.25rem',
                    borderRadius: '10px',
                    border: '2px solid #475569',
                    background: '#1e293b',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#60a5fa';
                    e.target.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#475569';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.75rem',
                  color: '#cbd5e0',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  Download Format
                </label>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1rem'
                }}>
                  <button
                    type="button"
                    onClick={() => setDownloadType('mp4')}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '10px',
                      border: downloadType === 'mp4' ? '2px solid #60a5fa' : '2px solid #475569',
                      background: downloadType === 'mp4' ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      if (downloadType !== 'mp4') {
                        e.target.style.borderColor = '#60a5fa';
                        e.target.style.background = 'rgba(96, 165, 250, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (downloadType !== 'mp4') {
                        e.target.style.borderColor = '#475569';
                        e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                      }
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>🎥</span>
                    <span>MP4 Video</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>High Quality</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setDownloadType('mp3')}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '10px',
                      border: downloadType === 'mp3' ? '2px solid #60a5fa' : '2px solid #475569',
                      background: downloadType === 'mp3' ? 'rgba(96, 165, 250, 0.15)' : 'rgba(30, 41, 59, 0.8)',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      if (downloadType !== 'mp3') {
                        e.target.style.borderColor = '#60a5fa';
                        e.target.style.background = 'rgba(96, 165, 250, 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (downloadType !== 'mp3') {
                        e.target.style.borderColor = '#475569';
                        e.target.style.background = 'rgba(30, 41, 59, 0.8)';
                      }
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>🎵</span>
                    <span>MP3 Audio</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Clear Sound</span>
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading 
                    ? 'linear-gradient(135deg, #475569, #64748b)' 
                    : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '1.25rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.8 : 1,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {loading ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Processing Your Download...
                  </div>
                ) : (
                  `Download ${downloadType.toUpperCase()} Now`
                )}
              </button>
            </form>

            {error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                padding: '1rem 1.25rem',
                borderRadius: '10px',
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.1rem' }}>⚠️</span>
                <div>
                  <strong>Error:</strong> {error}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {result && (
            <div style={{
              background: 'rgba(30, 41, 59, 0.9)',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              animation: 'fadeInUp 0.6s ease-out',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white', margin: '0 0 0.25rem 0' }}>
                    ✅ Download Ready!
                  </h3>
                  <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
                    Your {downloadType.toUpperCase()} file is prepared
                  </p>
                </div>
                <button 
                  onClick={resetForm}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid #334155',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = '#60a5fa';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = '#334155';
                  }}
                >
                  Download Another
                </button>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <h4 style={{ 
                  color: 'white', 
                  marginBottom: '1rem', 
                  fontSize: '1.1rem',
                  lineHeight: '1.4'
                }}>
                  {result.title}
                </h4>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Duration</div>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{result.duration}</div>
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Quality</div>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{result.quality}</div>
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Size</div>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{result.size}</div>
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Format</div>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{result.type.toUpperCase()}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a 
                    href={result.downloadUrl}
                    download={`${result.title.replace(/[^a-z0-9]/gi, '_')}.${result.type}`}
                    onClick={() => handleDirectDownload(result.downloadUrl, `${result.title}.${result.type}`)}
                    style={{
                      flex: '1',
                      minWidth: '200px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      padding: '1rem 1.5rem',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.1rem' }}>⬇️</span>
                    Download {result.type.toUpperCase()}
                  </a>
                  
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(result.downloadUrl);
                      alert('Download link copied to clipboard!');
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid #334155',
                      padding: '1rem 1.5rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.borderColor = '#60a5fa';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderColor = '#334155';
                    }}
                  >
                    <span>📋</span>
                    Copy Link
                  </button>
                </div>
              </div>

              <div style={{ 
                color: '#94a3b8', 
                fontSize: '0.8rem',
                textAlign: 'center',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                💡 <strong>Tip:</strong> If the download doesn't start automatically, right-click the download button and select "Save link as..."
              </div>
            </div>
          )}

          {/* Features */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1.5rem', 
              color: 'white', 
              textAlign: 'center' 
            }}>
              Why Choose Our Downloader?
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { 
                  icon: '⚡', 
                  title: 'Lightning Fast', 
                  desc: 'Quick processing with high-speed downloads' 
                },
                { 
                  icon: '🎯', 
                  title: 'High Quality', 
                  desc: 'Best available quality for MP4 videos and MP3 audio' 
                },
                { 
                  icon: '🔒', 
                  title: '100% Secure', 
                  desc: 'No data storage, completely private and safe' 
                },
                { 
                  icon: '💯', 
                  title: 'Completely Free', 
                  desc: 'No hidden costs, no registration required' 
                },
                { 
                  icon: '📱', 
                  title: 'Mobile Friendly', 
                  desc: 'Works perfectly on all devices and browsers' 
                },
                { 
                  icon: '🔄', 
                  title: 'Always Available', 
                  desc: '24/7 service with reliable uptime' 
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  textAlign: 'center',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#334155';
                }}
                >
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '1rem',
                    filter: 'drop-shadow(0 4px 8px rgba(96, 165, 250, 0.3))'
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ 
                    color: 'white', 
                    marginBottom: '0.75rem', 
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ 
                    color: '#cbd5e0', 
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    margin: 0
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.95)',
          borderTop: '1px solid #334155',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
                padding: '0.25rem 0.5rem',
                borderRadius: '6px',
                fontSize: '1.25rem'
              }}>⚡</span>
              TOOSII TECH
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Leading Technology Solutions in Nairobi, Kenya
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap', 
              marginBottom: '2rem' 
            }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                <span>📧</span>
                toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                <span>📞</span>
                +254 748 340 864
              </a>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  color: '#60a5fa', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '500'
                }}>
                <span>🌐</span>
                Company Portal
              </a>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              © 2024 TOOSII TECH. All rights reserved. | YouTube Downloader Service
            </p>
          </div>
        </footer>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  )
}
