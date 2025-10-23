import Link from 'next/link'

export default function Contact() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '2rem 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem' 
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem' 
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e0' 
          }}>
            Get in touch with our team to discuss your project
          </p>
        </div>

        {/* Get in Touch Across the Web Section */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Get in Touch Across the Web
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#cbd5e0',
            marginBottom: '2rem'
          }}>
            Prefer direct communication? Reach out to us anytime via email
          </p>
          <a 
            href="mailto:toosiitechcompany@gmail.com"
            style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}
          >
            📧 toosiitechcompany@gmail.com
          </a>
          <p style={{ 
            color: '#a0aec0', 
            marginTop: '1rem',
            fontStyle: 'italic'
          }}>
            We typically respond within 2 hours during business hours
          </p>
        </section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              color: 'white'
            }}>
              Get in Touch
            </h2>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '1rem',
                  color: '#667eea'
                }}>
                  Contact Information
                </h3>
                <div style={{ color: '#cbd5e0', lineHeight: '2' }}>
                  <p>📧 <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#667eea' }}>toosiitechcompany@gmail.com</a></p>
                  <p>📞 <a href="tel:+254748340864" style={{ color: '#667eea' }}>+254 748 340 864</a></p>
                  <p>📍 Nairobi, Kenya</p>
                  <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM EAT</p>
                </div>
              </div>

              <div>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  marginBottom: '1rem',
                  color: '#667eea'
                }}>
                  Social Media
                </h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://twitter.com/austin254ke" style={{ color: '#cbd5e0' }}>Twitter</a>
                  <a href="https://t.me/toosiitech" style={{ color: '#cbd5e0' }}>Telegram</a>
                  <a href="https://www.facebook.com/ToosiiGrainger.com9" style={{ color: '#cbd5e0' }}>Facebook</a>
                  <a href="https://instagram.com/toosii_ke" style={{ color: '#cbd5e0' }}>Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              color: 'white'
            }}>
              Send us a Message
            </h2>
            
            <form style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0'
                }}>
                  Name
                </label>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4a5568',
                    background: '#2d3748',
                    color: 'white'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0'
                }}>
                  Email
                </label>
                <input 
                  type="email" 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4a5568',
                    background: '#2d3748',
                    color: 'white'
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  color: '#cbd5e0'
                }}>
                  Message
                </label>
                <textarea 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #4a5568',
                    background: '#2d3748',
                    color: 'white',
                    minHeight: '120px'
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '4px',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
