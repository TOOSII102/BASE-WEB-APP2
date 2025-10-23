import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{
        background: 'rgba(26, 32, 44, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #2d3748',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'white',
            textDecoration: 'none',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            TOOSII TECH
          </Link>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Home
            </Link>
            <Link href="/services" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Services
            </Link>
            <Link href="/about" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              About
            </Link>
            <Link href="/contact" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Contact
            </Link>
            
            {/* Get Started Button in Header */}
            <Link 
              href="/contact"
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                marginLeft: '1rem'
              }}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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
            to drive your business growth and innovation in Kenya and beyond.
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
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                AI & Machine Learning
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Intelligent solutions powered by advanced AI algorithms and machine learning models.
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
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                Cloud Solutions
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Scalable cloud infrastructure, migration, and management services for modern businesses.
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
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                Cyber Security
              </h3>
              <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Comprehensive security solutions to protect your digital assets and ensure business continuity.
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
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '3rem'
          }}>
            Why Choose TOOSII TECH?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'left'
          }}>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#667eea' }}>
                🎯 Expert Team
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
                Our team consists of experienced professionals with expertise in cutting-edge technologies.
              </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#667eea' }}>
                ⚡ Fast Delivery
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
                We deliver high-quality solutions quickly without compromising on quality or performance.
              </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#667eea' }}>
                💼 Custom Solutions
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
                Every solution is tailored to your specific business needs and requirements.
              </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#667eea' }}>
                🌍 Local Presence
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
                Based in Nairobi, Kenya, we understand the local market and business landscape.
              </p>
            </div>
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
            <div>
              <strong>Location:</strong> Nairobi, Kenya
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1a202c',
        color: 'white',
        padding: '3rem 2rem',
        borderTop: '1px solid #2d3748'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              TOOSII TECH
            </h3>
            <p style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
              Pioneering the future of digital transformation through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Home</Link>
              <Link href="/services" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Services</Link>
              <Link href="/about" style={{ color: '#cbd5e0', textDecoration: 'none' }}>About</Link>
              <Link href="/contact" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/privacy-policy" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="/terms-of-service" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Terms of Service</Link>
              <Link href="/cookies" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Cookie Policy</Link>
            </div>
          </div>

          {/* Contact Footer */}
          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
              Contact
            </h4>
            <div style={{ color: '#cbd5e0', lineHeight: 1.6 }}>
              <div>toosiitechcompany@gmail.com</div>
              <div>+254 748 340 864</div>
              <div>Nairobi, Kenya</div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #2d3748',
          textAlign: 'center',
          color: '#a0aec0'
        }}>
          <p>© {new Date().getFullYear()} TOOSII TECH COMPANY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
