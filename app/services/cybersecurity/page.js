import Link from 'next/link'

export default function CyberSecurity() {
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

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
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
              🔒 Cyber Security
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Comprehensive security solutions to protect your digital assets, 
              ensure compliance, and safeguard your business from evolving threats.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Get Security Audit
              </Link>
              <button style={{
                background: 'transparent',
                color: '#60a5fa',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: '2px solid #60a5fa',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Download Security Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>🛡️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Threat Protection</h3>
              <p style={{ color: '#cbd5e1' }}>
                Advanced threat detection and prevention systems to protect against 
                malware, ransomware, and sophisticated cyber attacks.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Security Assessment</h3>
              <p style={{ color: '#cbd5e1' }}>
                Comprehensive vulnerability assessments and penetration testing 
                to identify and remediate security weaknesses.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>📊</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Compliance</h3>
              <p style={{ color: '#cbd5e1' }}>
                Ensure compliance with industry standards like GDPR, ISO 27001, 
                PCI DSS, and other regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Cyber Security Services
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            {/* Network Security */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>🌐 Network Security</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Firewall configuration and management</li>
                <li>Intrusion Detection & Prevention Systems (IDS/IPS)</li>
                <li>VPN and remote access security</li>
                <li>Network segmentation and micro-segmentation</li>
                <li>DDoS protection and mitigation</li>
              </ul>
            </div>

            {/* Application Security */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>💻 Application Security</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Secure code review and analysis</li>
                <li>Web application firewall (WAF) implementation</li>
                <li>API security testing and protection</li>
                <li>Mobile application security assessment</li>
                <li>DevSecOps integration</li>
              </ul>
            </div>

            {/* Cloud Security */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>☁️ Cloud Security</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Cloud infrastructure security assessment</li>
                <li>Identity and Access Management (IAM)</li>
                <li>Cloud security posture management</li>
                <li>Container and Kubernetes security</li>
                <li>Multi-cloud security strategy</li>
              </ul>
            </div>

            {/* Incident Response */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: '#60a5fa',
                marginBottom: '1rem'
              }}>🚨 Incident Response</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>24/7 Security Operations Center (SOC)</li>
                <li>Digital forensics and investigation</li>
                <li>Breach response and recovery</li>
                <li>Threat intelligence and hunting</li>
                <li>Incident response planning and testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Approach */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Security Approach
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>1</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Assess</h4>
              <p style={{ color: '#cbd5e1' }}>
                Comprehensive security assessment and risk analysis
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>2</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Protect</h4>
              <p style={{ color: '#cbd5e1' }}>
                Implement multi-layered security controls
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #ec4899, #f59e0b)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>3</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Detect</h4>
              <p style={{ color: '#cbd5e1' }}>
                Continuous monitoring and threat detection
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f59e0b, #10b981)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>4</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Respond</h4>
              <p style={{ color: '#cbd5e1' }}>
                Rapid incident response and recovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Inlined Email */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Secure Your Digital Future
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            Don't wait for a security breach to take action. Protect your business 
            with our comprehensive cyber security solutions.
          </p>
          
          {/* Inlined Company Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Contact Our Security Team</h3>
            <p style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Email us directly at:{' '}
              <a 
                href="mailto:toosiitechcompany@gmail.com"
                style={{
                  color: '#60a5fa',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                toosiitechcompany@gmail.com
              </a>
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              We typically respond within 2 hours during business hours
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" style={{
              background: 'white',
              color: '#1e40af',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Get Free Security Consultation
            </Link>
            <Link href="tel:+254748340864" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              border: '2px solid white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              Call: +254 748 340 864
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Bottom Bar */}
      <div style={{
        background: '#0f172a',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} TOOSII TECH COMPANY
        </p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
          Comprehensive Cyber Security Solutions
        </p>
      </div>
    </div>
  )
}
