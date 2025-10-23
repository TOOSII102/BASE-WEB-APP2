import Link from 'next/link'

export default function CloudSolutions() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white'
    }}>
      {/* Navigation Header */}
      <nav style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
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
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textDecoration: 'none'
          }}>
            TOOSII TECH
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</Link>
            <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #60a5fa, #38bdf8)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Cloud Solutions
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e1',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Transform your business with scalable, secure, and cost-effective cloud infrastructure. 
            We provide end-to-end cloud services tailored to your unique needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              Get Started
            </button>
            <button style={{
              background: 'transparent',
              color: '#60a5fa',
              border: '2px solid #60a5fa',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem', background: '#0f172a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Cloud Services
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Cloud Migration */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #475569'
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
                🚀
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                Cloud Migration
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Seamless migration of your applications and data to the cloud with minimal downtime and maximum efficiency.
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ Application assessment & planning</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Data migration strategies</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Post-migration optimization</li>
              </ul>
            </div>

            {/* Infrastructure Setup */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #475569'
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
                ⚙️
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                Infrastructure Setup
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Design and implement robust cloud infrastructure tailored to your business requirements and scalability needs.
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ Virtual private clouds (VPC)</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Load balancing & auto-scaling</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Storage solutions</li>
              </ul>
            </div>

            {/* DevOps & Automation */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #475569'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                🔄
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                DevOps & Automation
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Implement CI/CD pipelines and automation to streamline your development and deployment processes.
              </p>
              <ul style={{ color: '#cbd5e1', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✅ CI/CD pipeline setup</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Infrastructure as Code (IaC)</li>
                <li style={{ marginBottom: '0.5rem' }}>✅ Monitoring & logging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section style={{ padding: '4rem 2rem', background: '#1e293b' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Supported Cloud Platforms
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                AWS
              </h3>
              <p style={{ color: '#cbd5e1' }}>Amazon Web Services</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔵</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                Azure
              </h3>
              <p style={{ color: '#cbd5e1' }}>Microsoft Azure</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔺</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
                Google Cloud
              </h3>
              <p style={{ color: '#cbd5e1' }}>Google Cloud Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Transform Your Infrastructure?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#dbeafe',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Let's discuss how our cloud solutions can drive your business forward with scalability, security, and innovation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#3b82f6',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              Start Your Cloud Journey
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        padding: '3rem 2rem',
        borderTop: '1px solid #334155'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            © 2024 TOOSII TECH COMPANY. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: '#60a5fa', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ color: '#60a5fa', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="/contact" style={{ color: '#60a5fa', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
