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
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500'
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
              border: '1px solid #334155'
            }}
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}
