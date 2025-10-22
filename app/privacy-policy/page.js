import Link from 'next/link'

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '2rem 0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        background: '#2d3748',
        borderRadius: '12px', 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)', 
        padding: '3rem', 
        lineHeight: 1.6 
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          paddingBottom: '2rem', 
          borderBottom: '2px solid #4a5568' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem', 
            fontSize: '0.9rem', 
            color: '#cbd5e0' 
          }}>
            <Link href="/" style={{ 
              color: '#667eea', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Home
            </Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem' 
          }}>
            Privacy Policy
          </h1>
          <p style={{ 
            color: '#cbd5e0', 
            fontSize: '0.9rem', 
            fontStyle: 'italic' 
          }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            1. Introduction
          </h2>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            TOOSII TECH COMPANY ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website and use our technology services.
          </p>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            Please read this Privacy Policy carefully. By accessing or using our services, 
            you acknowledge that you have read, understood, and agree to be bound by all the terms 
            outlined in this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            2. Information We Collect
          </h2>
          
          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            color: '#e2e8f0', 
            margin: '1.5rem 0 0.5rem 0' 
          }}>
            2.1 Personal Information
          </h3>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            We may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul style={{ color: '#cbd5e0', margin: '1rem 0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Name and contact information (email address, phone number)
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Company information and job title
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Payment information for service purchases
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Communication preferences
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Project requirements and business information
            </li>
          </ul>

          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: '600', 
            color: '#e2e8f0', 
            margin: '1.5rem 0 0.5rem 0' 
          }}>
            2.2 Automatically Collected Information
          </h3>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            When you visit our website, we automatically collect certain information, including:
          </p>
          <ul style={{ color: '#cbd5e0', margin: '1rem 0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              IP address and browser type
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Device information and operating system
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Pages visited and time spent on pages
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Referring website and search terms
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#667eea', marginRight: '0.5rem' }}>•</span>
              Cookies and similar tracking technologies
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            3. How We Use Your Information
          </h2>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            We use the information we collect for various purposes, including:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0'
          }}>
            <div style={{
              background: '#4a5568',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #667eea'
            }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Service Delivery
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem', margin: 0 }}>
                Providing and maintaining our technology services
              </p>
            </div>
            <div style={{
              background: '#4a5568',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #48bb78'
            }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Communication
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem', margin: 0 }}>
                Responding to inquiries and providing support
              </p>
            </div>
            <div style={{
              background: '#4a5568',
              padding: '1.5rem',
              borderRadius: '8px',
              borderLeft: '4px solid #ed8936'
            }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Improvement
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem', margin: 0 }}>
                Enhancing and personalizing user experience
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            4. Data Security
          </h2>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            We implement appropriate security measures to protect your personal information, 
            including encryption, secure servers, and access controls. However, no method of 
            transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* Your Rights */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            5. Your Data Protection Rights
          </h2>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            You have the right to:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            margin: '1.5rem 0'
          }}>
            <div style={{
              background: '#4a5568',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Access
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.8rem', margin: 0 }}>
                Request copies of your data
              </p>
            </div>
            <div style={{
              background: '#4a5568',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#48bb78', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Correction
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.8rem', margin: 0 }}>
                Update inaccurate information
              </p>
            </div>
            <div style={{
              background: '#4a5568',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#ed8936', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Deletion
              </h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.8rem', margin: 0 }}>
                Request data removal
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: 'white', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #4a5568' 
          }}>
            6. Contact Us
          </h2>
          <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div style={{ 
            background: '#4a5568', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            marginTop: '1rem' 
          }}>
            <p style={{ margin: '0.5rem 0', color: '#cbd5e0' }}>
              <strong>TOOSII TECH COMPANY</strong>
            </p>
            <p style={{ margin: '0.5rem 0', color: '#cbd5e0' }}>
              Email: <a href="mailto:toosiitechcompany@gmail.com" style={{ 
                color: '#667eea', 
                textDecoration: 'none' 
              }}>
                toosiitechcompany@gmail.com
              </a>
            </p>
            <p style={{ margin: '0.5rem 0', color: '#cbd5e0' }}>
              Phone: <a href="tel:+254748340864" style={{ 
                color: '#667eea', 
                textDecoration: 'none' 
              }}>
                +254 748 340 864
              </a>
            </p>
            <p style={{ margin: '0.5rem 0', color: '#cbd5e0' }}>
              Address: Nairobi, Kenya
            </p>
            <p style={{ margin: '0.5rem 0', color: '#cbd5e0' }}>
              Business Hours: Mon - Fri, 9:00 AM - 6:00 PM EAT
            </p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: '2px solid #4a5568', 
          textAlign: 'center' 
        }}>
          <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>
            © {currentYear} TOOSII TECH COMPANY. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap' 
          }}>
            <Link href="/terms-of-service" style={{ 
              color: '#667eea', 
              textDecoration: 'none', 
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Terms of Service
            </Link>
            <Link href="/cookies" style={{ 
              color: '#667eea', 
              textDecoration: 'none', 
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Cookie Policy
            </Link>
            <Link href="/" style={{ 
              color: '#667eea', 
              textDecoration: 'none', 
              fontWeight: '500',
              transition: 'color 0.3s ease'
            }}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
