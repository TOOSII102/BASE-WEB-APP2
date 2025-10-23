import Link from 'next/link'

export default function Home() {
  return (
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
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            TOOSII TECH
          </Link>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}>
              Home
            </Link>
            <Link href="/services" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}>
              Services
            </Link>
            <Link href="/about" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}>
              About Us
            </Link>
            <Link href="/case-studies" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}>
              Case Studies
            </Link>
            <Link href="/blog" style={{
              color: '#cbd5e0',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              transition: 'all 0.3s ease'
            }}>
              Blog
            </Link>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            TOOSII TECH COMPANY
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#e2e8f0',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Pioneering the future of digital transformation through innovative 
            technology solutions and cutting-edge development services.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/services" style={{
              background: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Explore Our Services
            </Link>
            <Link href="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '2px solid white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Technology Services
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* AI & ML Service */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                AI & Machine Learning
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Intelligent solutions powered by artificial intelligence and machine learning algorithms.
              </p>
              <Link href="/services/ai-ml" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Cloud Solutions */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Cloud Solutions
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Scalable and secure cloud infrastructure and migration services.
              </p>
              <Link href="/services/cloud" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Cyber Security */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Cyber Security
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Comprehensive security solutions to protect your digital assets.
              </p>
              <Link href="/services/cybersecurity" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Web3 & Blockchain */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⛓️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Web3 & Blockchain
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Decentralized applications and blockchain solutions.
              </p>
              <Link href="/services/web3" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>

            {/* Mobile Development */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                Mobile Development
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Cross-platform mobile applications for iOS and Android.
              </p>
              <Link href="/services/mobile" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>

            {/* IT Consulting */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>
                IT Consulting
              </h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Strategic technology consulting and digital transformation.
              </p>
              <Link href="/services/consulting" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                About TOOSII TECH
              </h2>
              <p style={{
                color: '#cbd5e1',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                We are a forward-thinking technology company based in Nairobi, Kenya, 
                dedicated to driving digital transformation through innovative solutions. 
                Our team of experts specializes in cutting-edge technologies that help 
                businesses thrive in the digital age.
              </p>
              <p style={{
                color: '#cbd5e1',
                lineHeight: 1.8,
                marginBottom: '2rem',
                fontSize: '1.1rem'
              }}>
                From AI-powered applications to secure cloud infrastructure, we deliver 
                comprehensive technology services tailored to your unique business needs.
              </p>
              <Link href="/about" style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Learn More About Us
              </Link>
            </div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: '#60a5fa'
              }}>
                Why Choose Us?
              </h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 2 }}>
                <li>✅ Expert team with proven track record</li>
                <li>✅ Cutting-edge technology solutions</li>
                <li>✅ Customized approach for each client</li>
                <li>✅ 24/7 support and maintenance</li>
                <li>✅ Competitive pricing and flexible engagement</li>
                <li>✅ Fast project delivery and deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#60a5fa',
                marginBottom: '0.5rem'
              }}>50+</div>
              <div style={{ color: '#cbd5e1' }}>Projects Completed</div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#60a5fa',
                marginBottom: '0.5rem'
              }}>98%</div>
              <div style={{ color: '#cbd5e1' }}>Client Satisfaction</div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#60a5fa',
                marginBottom: '0.5rem'
              }}>24/7</div>
              <div style={{ color: '#cbd5e1' }}>Support Available</div>
            </div>
            <div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#60a5fa',
                marginBottom: '0.5rem'
              }}>2H</div>
              <div style={{ color: '#cbd5e1' }}>Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem'
          }}>
            Get in Touch Across the Web
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Ready to transform your business with cutting-edge technology? 
            Contact us directly and let's build something amazing together.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:toosiitechcompany@gmail.com"
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
            >
              📧 Email Us Directly
            </a>
            <Link 
              href="/contact"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: '2px solid white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease'
              }}
            >
              📞 More Contact Options
            </Link>
          </div>
          
          <p style={{
            marginTop: '1.5rem',
            opacity: 0.8,
            fontSize: '0.9rem'
          }}>
            We respond to all inquiries within 2 hours during business hours
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Get Free Consultation
            </Link>
            <a href="tel:+254748340864" style={{
              background: 'transparent',
              color: '#60a5fa',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '2px solid #60a5fa',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Call: +254 748 340 864
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
