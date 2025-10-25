import Link from 'next/link'
import Head from 'next/head'

export default function Services() {
  const services = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems that automate processes, predict trends, and enhance decision-making.',
      features: ['Custom AI Models', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with scalable, secure, and cost-effective infrastructure solutions.',
      features: ['Cloud Migration', 'AWS/Azure Setup', 'Serverless Architecture', 'Cloud Security']
    },
    {
      icon: '🛡️',
      title: 'Cyber Security',
      description: 'Protect your business from cyber threats with comprehensive security solutions and monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Incident Response']
    },
    {
      icon: '⛓️',
      title: 'Web3 & Blockchain',
      description: 'Explore decentralized applications, smart contracts, and blockchain integration.',
      features: ['Smart Contracts', 'DApp Development', 'NFT Solutions', 'Blockchain Consulting']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android with seamless user experiences.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: '💼',
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your business processes and digital transformation.',
      features: ['Tech Strategy', 'Digital Transformation', 'System Architecture', 'IT Infrastructure']
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services - TOOSII TECH</title>
        <meta name="description" content="Comprehensive technology services including AI, Cloud, Cybersecurity, Web3, Mobile Development, and IT Consulting." />
      </Head>

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
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Home
              </Link>
              
              {/* Added: Link to other website */}
              <a 
                href="https://toosii-tech-company-3npa.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                🌐 Our Portal
              </a>
              
              <Link href="/contact" style={{
                color: '#60a5fa',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                border: '1px solid #334155',
                borderRadius: '8px',
                fontWeight: '500'
              }}>
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Header Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '4rem 2rem 2rem',
          textAlign: 'center'
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
            Our Services
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Comprehensive technology solutions designed to drive your business forward in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid #334155'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                {service.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: 'white',
                textAlign: 'center'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: '#cbd5e0', 
                marginBottom: '1.5rem',
                lineHeight: 1.6,
                textAlign: 'center'
              }}>
                {service.description}
              </p>
              <ul style={{ 
                color: '#cbd5e0',
                paddingLeft: '1rem'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '3rem auto',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            color: 'white'
          }}>
            🌐 Explore More on Our Portal
          </h2>
          <div style={{
            background: 'rgba(30, 41, 59, 0.8)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #334155',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{ 
              color: '#cbd5e0', 
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              Discover more about our technology solutions, case studies, and industry insights on our dedicated portal.
            </p>
            <a 
              href="https://toosii-tech-company-3npa.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'inline-block'
              }}
            >
              Visit Our Portal
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '4rem auto',
          padding: '3rem 2rem',
          background: 'rgba(30, 41, 59, 0.8)',
          borderRadius: '16px',
          border: '1px solid #334155',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ 
            color: '#cbd5e0', 
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/contact"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}
            >
              Get Started Today
            </Link>
            <a 
              href="https://toosii-tech-company-3npa.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid #334155'
              }}
            >
              Explore Our Portal
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderTop: '1px solid #334155',
          padding: '3rem 2rem',
          marginTop: '4rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
              TOOSII TECH
            </div>
            <p style={{ color: '#cbd5e0', marginBottom: '2rem' }}>
              Leading technology solutions in Nairobi, Kenya
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📧 toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                📞 +254 748 340 864
              </a>
              {/* Added: Link to other website in footer */}
              <a 
                href="https://toosii-tech-company-3npa.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                🌐 Company Portal
              </a>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              © 2024 TOOSII TECH. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
