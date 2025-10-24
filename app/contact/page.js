import Link from 'next/link'

export default function Contact() {
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
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none'
          }}>
            TOOSII TECH
          </Link>
          <Link href="/services" style={{
            color: '#60a5fa',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            border: '1px solid #334155',
            borderRadius: '8px'
          }}>
            ← Back to Services
          </Link>
        </div>
      </nav>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem'
      }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          padding: '2rem 0'
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
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Ready to start your project? Get in touch with our team and let's create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Contact Information Column */}
          <div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #334155',
              marginBottom: '2rem'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '2rem',
                color: 'white'
              }}>
                📞 Contact Information
              </h2>
              
              <div style={{ color: '#cbd5e0', lineHeight: '2.5' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', minWidth: '30px' }}>📧</span>
                  <div>
                    <strong style={{ color: 'white' }}>Email Address</strong>
                    <div>
                      <a 
                        href="mailto:toosiitechcompany@gmail.com"
                        style={{
                          color: '#60a5fa',
                          textDecoration: 'none',
                          fontWeight: '500',
                          fontSize: '1.1rem'
                        }}
                      >
                        toosiitechcompany@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', minWidth: '30px' }}>📞</span>
                  <div>
                    <strong style={{ color: 'white' }}>Phone Number</strong>
                    <div>
                      <a 
                        href="tel:+254748340864"
                        style={{
                          color: '#60a5fa',
                          textDecoration: 'none',
                          fontWeight: '500',
                          fontSize: '1.1rem'
                        }}
                      >
                        +254 748 340 864
                      </a>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', minWidth: '30px' }}>📍</span>
                  <div>
                    <strong style={{ color: 'white' }}>Location</strong>
                    <div>Nairobi, Kenya</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem', minWidth: '30px' }}>🕒</span>
                  <div>
                    <strong style={{ color: 'white' }}>Business Hours</strong>
                    <div>Monday - Friday: 9:00 AM - 6:00 PM EAT</div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                      We respond within 2 hours during business hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                🚀 Quick Actions
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="mailto:toosiitechcompany@gmail.com?subject=Project Inquiry - TOOSII TECH&body=Hello TOOSII TECH Team,%0D%0A%0D%0AI'd like to discuss a project with you. Please find my details below:%0D%0A%0D%0AProject Type: %0D%0ABudget Range: %0D%0ATimeline: %0D%0A%0D%0ALooking forward to your response.%0D%0A%0D%0ABest regards,"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  📋 Send Project Inquiry
                </a>
                
                <a 
                  href="https://wa.me/254748340864?text=Hello%20TOOSII%20TECH%20Team,%20I'd%20like%20to%20chat%20about%20your%20services."
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  💬 Chat on WhatsApp
                </a>
                
                <Link 
                  href="/services"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  🔍 View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #334155'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                📝 Send us a Message
              </h2>
              <p style={{ 
                color: '#cbd5e0', 
                marginBottom: '2rem',
                fontSize: '1rem'
              }}>
                Fill out the form below and we'll get back to you within 2 hours
              </p>
              
              {/* Contact Form that sends to your email - CORRECTED VERSION */}
              <form 
                action="https://formsubmit.co/toosiitechcompany@gmail.com" 
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {/* FormSubmit Configuration - UPDATED WITH CORRECT DOMAIN */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - TOOSII TECH" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://base-web-app-2-one.vercel.app/thank-you" />
                <input type="text" name="_honey" style={{display: 'none'}} />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting TOOSII TECH! We have received your message and will get back to you within 2 hours during business hours. Best regards, TOOSII TECH Team" />
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Service Interest
                  </label>
                  <select 
                    name="service"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Web3 & Blockchain">Web3 & Blockchain</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Project Budget
                  </label>
                  <select 
                    name="budget"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select budget range...</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    color: '#cbd5e0',
                    fontWeight: '500'
                  }}>
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #475569',
                      background: '#1e293b',
                      color: 'white',
                      fontSize: '1rem',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                  />
                </div>

                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                </button>
                
                <p style={{ 
                  color: '#94a3b8', 
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  margin: 0
                }}>
                  📧 Your message will be sent directly to toosiitechcompany@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.8)',
          padding: '2rem',
          borderRadius: '16px',
          border: '1px solid #334155',
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            🌐 Connect With Us
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a 
              href="https://twitter.com/austin254ke" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}
            >
              🐦 Twitter
            </a>
            <a 
              href="https://t.me/toosiitech" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}
            >
              📱 Telegram
            </a>
            <a 
              href="https://www.facebook.com/ToosiiGrainger.com9" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}
            >
              📘 Facebook
            </a>
            <a 
              href="https://instagram.com/toosii_ke" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}
            >
              📷 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
