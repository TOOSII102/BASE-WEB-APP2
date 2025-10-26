'use client'

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
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white'
          }}>
            TOOSII TECH
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/services" style={{
              color: '#60a5fa',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Services
            </Link>
            
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
              fontWeight: '500'
            }}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '6rem 2rem 4rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          lineHeight: 1.2
        }}>
          Transform Your Business With Cutting-Edge Technology
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#cbd5e0',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          TOOSII TECH delivers innovative AI, Cloud, and Cybersecurity solutions tailored for Kenyan businesses. We help you stay ahead in the digital revolution.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/services"
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
            Explore Services
          </Link>
          <Link 
            href="/contact"
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
            Get Started
          </Link>
        </div>
      </div>

      {/* Services Preview */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '3rem',
          color: 'white'
        }}>
          Our Expertise
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { icon: '🤖', title: 'AI & Machine Learning', desc: 'Intelligent solutions for business automation' },
            { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and migration' },
            { icon: '🛡️', title: 'Cyber Security', desc: 'Protect your business from digital threats' },
            { icon: '⛓️', title: 'Web3 & Blockchain', desc: 'Decentralized applications and solutions' },
            { icon: '📱', title: 'Mobile Development', desc: 'Native and cross-platform mobile apps' },
            { icon: '💼', title: 'IT Consulting', desc: 'Strategic technology guidance and planning' }
          ].map((service, index) => (
            <div key={index} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.8)',
        margin: '4rem auto',
        padding: '4rem 2rem',
        borderRadius: '16px',
        border: '1px solid #334155',
        maxWidth: '1200px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          color: 'white'
        }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{ 
          color: '#cbd5e0', 
          fontSize: '1.1rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Contact us today for a free consultation and discover how TOOSII TECH can drive your digital transformation.
        </p>
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
          Start Your Project
        </Link>
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
            <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'none' }}>
              🌐 Company Portal
            </a>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            © 2024 TOOSII TECH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
