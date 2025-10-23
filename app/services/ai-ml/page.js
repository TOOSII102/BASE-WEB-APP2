import Link from 'next/link'

export default function AIMachineLearning() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    }}>
      {/* Navigation Header */}
      <nav style={{
        borderBottom: '1px solid #334155',
        padding: '1rem 0'
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
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textDecoration: 'none'
          }}>
            TOOSII TECH
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.3s' }}>
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            AI & Machine Learning
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e0',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Transform your business with intelligent AI solutions that learn, adapt, and automate. 
            From predictive analytics to computer vision, we build AI systems that drive real results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Start Your AI Project
            </Link>
            <Link href="/" style={{
              background: 'transparent',
              color: '#60a5fa',
              border: '2px solid #60a5fa',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our AI & ML Capabilities
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Predictive Analytics */}
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(45deg, #10b981, #059669)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                📊
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                Predictive Analytics
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Forecast trends, predict customer behavior, and make data-driven decisions with our advanced predictive models.
              </p>
              <ul style={{ color: '#cbd5e0', paddingLeft: '1.5rem' }}>
                <li>Sales forecasting</li>
                <li>Customer churn prediction</li>
                <li>Demand planning</li>
                <li>Risk assessment</li>
              </ul>
            </div>

            {/* Natural Language Processing */}
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                💬
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                Natural Language Processing
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Extract insights from text data, build intelligent chatbots, and automate document processing.
              </p>
              <ul style={{ color: '#cbd5e0', paddingLeft: '1.5rem' }}>
                <li>AI Chatbots & Virtual Assistants</li>
                <li>Sentiment Analysis</li>
                <li>Text Classification</li>
                <li>Document Processing</li>
              </ul>
            </div>

            {/* Computer Vision */}
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                👁️
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                Computer Vision
              </h3>
              <p style={{ color: '#cbd5e0', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Enable machines to see, understand, and interpret visual information from the world.
              </p>
              <ul style={{ color: '#cbd5
