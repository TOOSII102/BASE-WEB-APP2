import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section with Get Started CTA */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Transform Your Business with Technology
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e0',
            marginBottom: '3rem',
            lineHeight: 1.6
          }}>
            TOOSII TECH delivers cutting-edge AI, cloud, cybersecurity, and digital solutions 
            to drive your business growth and innovation.
          </p>
          
          {/* Get Started CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link 
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                border: '2px solid #667eea',
                transition: 'all 0.3s ease'
              }}
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            color: '#a0aec0',
            fontSize: '0.9rem'
          }}>
            <div>✓ 24/7 Support</div>
            <div>✓ Expert Team</div>
            <div>✓ Custom Solutions</div>
            <div>✓ Fast Delivery</div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section style={{
        padding: '5rem 2rem',
        background: '#f7fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#1a202c'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.125rem',
            textAlign: 'center',
            color: '#4a5568',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Comprehensive technology solutions tailored to your business needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* AI & ML Service */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                AI & Machine Learning
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                Intelligent solutions powered by advanced AI algorithms
              </p>
              <Link href="/services/ai-ml" style={{
                color: '#667eea',
                fontWeight: 500,
                textDecoration: 'none'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Cloud Solutions */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                Cloud Solutions
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                Scalable cloud infrastructure and migration services
              </p>
              <Link href="/services/cloud" style={{
                color: '#667eea',
                fontWeight: 500,
                textDecoration: 'none'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                Cyber Security
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                Comprehensive security solutions for your business
              </p>
              <Link href="/services/cybersecurity" style={{
                color: '#667eea',
                fontWeight: 500,
                textDecoration: 'none'
              }}>
                Learn More →
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/services"
              style={{
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            color: '#e2e8f0'
          }}>
            Contact us today for a free consultation and discover how our technology 
            solutions can transform your business.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link 
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#667eea',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                transition: 'all 0.3s ease'
              }}
            >
              Get Free Consultation
            </Link>
            <Link 
              href="tel:+254748340864"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              Call Now
            </Link>
          </div>
          
          {/* Contact Info */}
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            color: '#e2e8f0'
          }}>
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:toosiitechcompany@gmail.com" style={{ color: 'white' }}>
                toosiitechcompany@gmail.com
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{' '}
              <a href="tel:+254748340864" style={{ color: 'white' }}>
                +254 748 340 864
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
