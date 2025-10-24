import Link from 'next/link'

export default function ThankYou() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'rgba(30, 41, 59, 0.9)',
        padding: '3rem',
        borderRadius: '16px',
        border: '1px solid #334155',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '2rem'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Thank You!
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#cbd5e0',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Your message has been sent successfully. We'll get back to you within 2 hours during business hours.
        </p>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #334155',
          marginBottom: '2rem'
        }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            📧 What's Next?
          </h3>
          <ul style={{ 
            textAlign: 'left', 
            color: '#cbd5e0',
            lineHeight: 1.6,
            paddingLeft: '1.5rem'
          }}>
            <li>You'll receive a confirmation email shortly</li>
            <li>Our team will review your message</li>
            <li>We'll contact you within 2 hours (business hours)</li>
            <li>Check your spam folder if you don't see our email</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ← Back to Home
          </Link>
          <Link 
            href="/services"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              border: '1px solid #334155',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            View Services
          </Link>
          <Link 
            href="/contact"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              border: '1px solid #334155',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            Send Another Message
          </Link>
        </div>

        <p style={{ 
          color: '#94a3b8', 
          fontSize: '0.9rem',
          marginTop: '2rem',
          fontStyle: 'italic'
        }}>
          Need immediate assistance? Call us at <a href="tel:+254748340864" style={{color: '#60a5fa', textDecoration: 'none'}}>+254 748 340 864</a>
        </p>
      </div>
    </div>
  )
}
