import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOOSII TECH - AI, Cloud & Cybersecurity Solutions</title>
        <meta name="description" content="Leading technology solutions provider in Nairobi, Kenya. Specializing in AI, Cloud Solutions, Cybersecurity, Web3, and Mobile Development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        {/* Navigation Header */}
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
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>
              TOOSII TECH
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/services" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Services
              </Link>
              
              {/* Added: YouTube Downloader Link */}
              <Link href="/youtube-downloader" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🎥 YouTube Downloader
              </Link>
              
              <a 
                href="https://toosii-tech-company-3npa.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                🌐 Our Portal
              </a>
              
              <Link href="/contact" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6rem 2rem 4rem',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.2
          }}>
            Transform Your Business With Cutting-Edge Technology
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e0',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.6
          }}>
            TOOSII TECH delivers innovative AI, Cloud, and Cybersecurity solutions tailored for Kenyan businesses. We help you stay ahead in the digital revolution.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/services"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Explore Services
            </Link>
            <Link 
              href="/youtube-downloader"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid #334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              🎥 YouTube Tools
            </Link>
            <Link 
              href="/contact"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid #334155'
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* YouTube Downloader Feature Section */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.8)',
          margin: '4rem auto',
          padding: '4rem 2rem',
          borderRadius: '16px',
          border: '1px solid #334155',
          maxWidth: '1200px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                🎥 Free YouTube Downloader
              </h2>
              <p style={{ 
                color: '#cbd5e0', 
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Download YouTube videos and audio in high quality MP4 and MP3 formats. Fast, free, and easy to use - no registration required.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: 'white' }}>Download MP4 videos in HD</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: 'white' }}>Extract MP3 audio from videos</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: 'white' }}>No ads or watermarks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: 'white' }}>100% free to use</span>
                </div>
              </div>
              <Link 
                href="/youtube-downloader"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  display: 'inline-block'
                }}
              >
                Start Downloading Now
              </Link>
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</div>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>How It Works</h3>
              <div style={{ textAlign: 'left', color: '#cbd5e0' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>1.</strong> Paste YouTube URL
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>2.</strong> Choose MP4 or MP3
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>3.</strong> Click Download
                </div>
                <div>
                  <strong>4.</strong> Save your file
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🤖', title: 'AI & Machine Learning', desc: 'Intelligent solutions for business automation' },
              { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration' },
              { icon: '🛡️', title: 'Cyber Security', desc: 'Protect your business from digital threats' },
              { icon: '⛓️', title: 'Web3 & Blockchain', desc: 'Decentralized applications and solutions' },
              { icon: '📱', title: 'Mobile Development', desc: 'Native and cross-platform mobile apps' },
              { icon: '💼', title: 'IT Consulting', desc: 'Strategic technology guidance and planning' },
              { icon: '🎥', title: 'YouTube Tools', desc: 'Free video and audio download utilities' },
              { icon: '🔧', title: 'Custom Solutions', desc: 'Tailored technology for your business needs' }
            ].map((service, index) => (
              <div key={index} style={{
                background: 'rgba(30, 41, 59, 0.8)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                transition: 'transform 0.2s ease',
                cursor: service.title === 'YouTube Tools' ? 'pointer' : 'default'
              }} onClick={service.title === 'YouTube Tools' ? () => window.location.href = '/youtube-downloader' : undefined}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
                <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.8)',
          margin: '4rem auto',
          padding: '4rem 2rem',
          borderRadius: '16px',
          border: '1px solid #334155',
          maxWidth: '1200px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ 
            color: '#cbd5e0', 
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Contact us today for a free consultation and discover how TOOSII TECH can drive your digital transformation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/contact"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Start Your Project
            </Link>
            <Link 
              href="/youtube-downloader"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid #334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              🎥 Try YouTube Downloader
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderTop: '1px solid #334155',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
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
              <Link href="/youtube-downloader" style={{ color: '#60a5fa', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                🎥 YouTube Tools
              </Link>
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
