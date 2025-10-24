import Link from 'next/link'

export default function ITConsulting() {
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
              💼 IT Consulting
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Strategic technology guidance and digital transformation consulting 
              to help your business leverage technology for growth, efficiency, and competitive advantage.
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
                Get Free Consultation
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
                Download Consulting Guide
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
              }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Digital Strategy</h3>
              <p style={{ color: '#cbd5e1' }}>
                Comprehensive digital transformation roadmaps and technology 
                strategies aligned with your business objectives.
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
              }}>🏗️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Technology Architecture</h3>
              <p style={{ color: '#cbd5e1' }}>
                Scalable and secure technology infrastructure design and 
                architecture planning for future growth.
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>IT Optimization</h3>
              <p style={{ color: '#cbd5e1' }}>
                Performance analysis and optimization of existing IT systems 
                to improve efficiency and reduce costs.
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
            Our IT Consulting Services
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            {/* Digital Transformation */}
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
              }}>🔄 Digital Transformation Consulting</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Digital maturity assessment and gap analysis</li>
                <li>Digital transformation strategy development</li>
                <li>Change management and organizational alignment</li>
                <li>Technology adoption roadmaps and implementation plans</li>
                <li>Process automation and workflow optimization</li>
                <li>Customer experience transformation strategies</li>
                <li>Innovation and digital product strategy</li>
                <li>ROI analysis and business case development</li>
              </ul>
            </div>

            {/* Technology Strategy */}
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
              }}>🎯 Technology Strategy & Planning</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>IT strategy development and alignment with business goals</li>
                <li>Technology portfolio management and optimization</li>
                <li>Digital innovation and emerging technology assessment</li>
                <li>IT governance framework development</li>
                <li>Vendor selection and technology partnership strategies</li>
                <li>IT budget planning and cost optimization</li>
                <li>Technology risk assessment and mitigation strategies</li>
                <li>IT performance measurement and KPIs</li>
              </ul>
            </div>

            {/* Cloud Consulting */}
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
              }}>☁️ Cloud Strategy & Migration</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Cloud readiness assessment and migration planning</li>
                <li>Multi-cloud and hybrid cloud strategy development</li>
                <li>Cloud cost optimization and management</li>
                <li>Cloud security and compliance consulting</li>
                <li>Cloud architecture design and best practices</li>
                <li>Serverless computing and microservices strategy</li>
                <li>Cloud-native application development guidance</li>
                <li>Disaster recovery and business continuity planning</li>
              </ul>
            </div>

            {/* Cybersecurity Consulting */}
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
              }}>🛡️ Cybersecurity Consulting</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Cybersecurity risk assessment and gap analysis</li>
                <li>Security framework implementation (NIST, ISO 27001, etc.)</li>
                <li>Security architecture design and review</li>
                <li>Incident response planning and testing</li>
                <li>Compliance consulting (GDPR, HIPAA, PCI DSS)</li>
                <li>Security awareness training program development</li>
                <li>Third-party risk management strategies</li>
                <li>Security operations center (SOC) design</li>
              </ul>
            </div>

            {/* Data & Analytics */}
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
              }}>📈 Data & Analytics Consulting</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Data strategy and governance framework development</li>
                <li>Big data and analytics platform architecture</li>
                <li>Business intelligence and reporting strategy</li>
                <li>Data quality management and improvement</li>
                <li>Machine learning and AI implementation strategy</li>
                <li>Data privacy and protection compliance</li>
                <li>Data warehouse and data lake design</li>
                <li>Real-time analytics and streaming architecture</li>
              </ul>
            </div>

            {/* IT Operations */}
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
              }}>⚙️ IT Operations & Infrastructure</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>IT infrastructure assessment and optimization</li>
                <li>Network architecture design and security</li>
                <li>Data center strategy and modernization</li>
                <li>IT service management (ITSM) implementation</li>
                <li>DevOps and SRE practices implementation</li>
                <li>IT asset management and lifecycle planning</li>
                <li>Disaster recovery and business continuity planning</li>
                <li>IT staffing and team structure optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Consulting Methodology
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
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discovery & Assessment</h4>
              <p style={{ color: '#cbd5e1' }}>
                Comprehensive analysis of your current state, challenges, and opportunities
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
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Strategy Development</h4>
              <p style={{ color: '#cbd5e1' }}>
                Create tailored technology strategies aligned with business objectives
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
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Roadmap Creation</h4>
              <p style={{ color: '#cbd5e1' }}>
                Develop detailed implementation plans with clear milestones and deliverables
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
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Implementation Support</h4>
              <p style={{ color: '#cbd5e1' }}>
                Guide execution and provide ongoing support throughout implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
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
            Industries We Serve
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏦</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Banking & Finance</h4>
              <p style={{ color: '#cbd5e1' }}>
                Digital banking, fintech solutions, regulatory compliance, and security
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Healthcare</h4>
              <p style={{ color: '#cbd5e1' }}>
                Telemedicine, EHR systems, healthcare analytics, and compliance
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Retail & E-commerce</h4>
              <p style={{ color: '#cbd5e1' }}>
                Omnichannel strategies, customer experience, and supply chain optimization
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏭</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Manufacturing</h4>
              <p style={{ color: '#cbd5e1' }}>
                Industry 4.0, IoT implementation, supply chain digitization, and automation
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Education</h4>
              <p style={{ color: '#cbd5e1' }}>
                EdTech solutions, learning management systems, and digital campus initiatives
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Energy & Utilities</h4>
              <p style={{ color: '#cbd5e1' }}>
                Smart grid technologies, energy management systems, and sustainability solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Transform Your Business with Strategic IT Consulting
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            Ready to leverage technology for business growth and competitive advantage? 
            Let's develop a strategic roadmap for your digital future.
          </p>
          
          {/* Inlined Company Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Contact Our Consulting Team</h3>
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
              Get Free Consultation
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
          Strategic IT Consulting for Digital Transformation
        </p>
      </div>
    </div>
  )
}
