import Link from 'next/link'

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      padding: '2rem 0' 
    }}>
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        background: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
        padding: '3rem', 
        lineHeight: 1.6 
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          paddingBottom: '2rem', 
          borderBottom: '2px solid #e2e8f0' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem', 
            fontSize: '0.9rem', 
            color: '#64748b' 
          }}>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            color: '#1a202c', 
            marginBottom: '0.5rem' 
          }}>Privacy Policy</h1>
          <p style={{ 
            color: '#64748b', 
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
            fontWeight: 600, 
            color: '#2d3748', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #e2e8f0' 
          }}>1. Introduction</h2>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            TOOSII TECH COMPANY ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website <strong>toosiitech.com</strong> and use our services.
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            Please read this Privacy Policy carefully. By accessing or using our services, 
            you acknowledge that you have read, understood, and agree to be bound by all the terms 
            outlined in this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#2d3748', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #e2e8f0' 
          }}>2. Information We Collect</h2>
          
          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 600, 
            color: '#4a5568', 
            margin: '1.5rem 0 0.5rem 0' 
          }}>2.1 Personal Information</h3>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul style={{ color: '#4a5568', margin: '1rem 0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Name and contact information (email address, phone number)</li>
            <li style={{ marginBottom: '0.5rem' }}>Company information and job title</li>
            <li style={{ marginBottom: '0.5rem' }}>Payment information for service purchases</li>
            <li style={{ marginBottom: '0.5rem' }}>Communication preferences</li>
            <li style={{ marginBottom: '0.5rem' }}>Project requirements and business information</li>
            <li style={{ marginBottom: '0.5rem' }}>Any other information you choose to provide</li>
          </ul>

          <h3 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 600, 
            color: '#4a5568', 
            margin: '1.5rem 0 0.5rem 0' 
          }}>2.2 Automatically Collected Information</h3>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>When you visit our website, we automatically collect certain information, including:</p>
          <ul style={{ color: '#4a5568', margin: '1rem 0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>IP address and browser type</li>
            <li style={{ marginBottom: '0.5rem' }}>Device information and operating system</li>
            <li style={{ marginBottom: '0.5rem' }}>Pages visited and time spent on pages</li>
            <li style={{ marginBottom: '0.5rem' }}>Referring website and search terms</li>
            <li style={{ marginBottom: '0.5rem' }}>Cookies and similar tracking technologies</li>
            <li style={{ marginBottom: '0.5rem' }}>Clickstream data and browsing patterns</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#2d3748', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #e2e8f0' 
          }}>3. How We Use Your Information</h2>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>We use the information we collect for various purposes, including:</p>
          <ul style={{ color: '#4a5568', margin: '1rem 0', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Providing, operating, and maintaining our services</li>
            <li style={{ marginBottom: '0.5rem' }}>Improving, personalizing, and expanding our services</li>
            <li style={{ marginBottom: '0.5rem' }}>Understanding and analyzing how you use our website</li>
            <li style={{ marginBottom: '0.5rem' }}>Developing new products, services, features, and functionality</li>
            <li style={{ marginBottom: '0.5rem' }}>Communicating with you, either directly or through our partners</li>
            <li style={{ marginBottom: '0.5rem' }}>Processing your transactions and managing your orders</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            color: '#2d3748', 
            marginBottom: '1rem', 
            paddingBottom: '0.5rem', 
            borderBottom: '1px solid #e2e8f0' 
          }}>14. Contact Us</h2>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>If you have any questions about this Privacy Policy, please contact us:</p>
          <div style={{ 
            background: '#f8fafc', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            marginTop: '1rem' 
          }}>
            <p style={{ margin: '0.5rem 0' }}><strong>TOOSII TECH COMPANY</strong></p>
            <p style={{ margin: '0.5rem 0' }}>Email: <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#667eea', textDecoration: 'none' }}>toosiitechcompany@gmail.com</a></p>
            <p style={{ margin: '0.5rem 0' }}>Phone: <a href="tel:+254748340864" style={{ color: '#667eea', textDecoration: 'none' }}>+254 748 340 864</a></p>
            <p style={{ margin: '0.5rem 0' }}>Address: Nairobi, Kenya</p>
          </div>
        </section>

        {/* Footer */}
        <div style={{ 
          marginTop: '3rem', 
          paddingTop: '2rem', 
          borderTop: '2px solid #e2e8f0', 
          textAlign: 'center' 
        }}>
          <p style={{ color: '#64748b', marginBottom: '1rem' }}>© {currentYear} TOOSII TECH COMPANY. All rights reserved.</p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap' 
          }}>
            <Link href="/terms-of-service" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link>
            <Link href="/cookies" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>Cookie Policy</Link>
            <Link href="/" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 500 }}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
