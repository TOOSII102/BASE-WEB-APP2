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
            <Link href="/services" style={{ color: '#cbd5e0', textDecoration: 'none' }}>All Services</Link>
            <Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Home</Link>
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
            <button style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Start Your AI Project
            </button>
            <button style={{
              background: 'transparent',
              color: '#60a5fa',
              border: '2px solid #60a5fa',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Case Studies
            </button>
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
              <ul style={{ color: '#cbd5e0', paddingLeft: '1.5rem' }}>
                <li>Object Detection & Recognition</li>
                <li>Image Classification</li>
                <li>Facial Recognition</li>
                <li>Quality Control Automation</li>
              </ul>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              background: '#1e293b',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Machine Learning</h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>Custom ML models for your specific business needs</p>
            </div>
            
            <div style={{
              background: '#1e293b',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠</div>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Deep Learning</h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>Neural networks for complex pattern recognition</p>
            </div>
            
            <div style={{
              background: '#1e293b',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>AI Automation</h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>Intelligent process automation and workflow optimization</p>
            </div>
            
            <div style={{
              background: '#1e293b',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
              <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>AI Consulting</h4>
              <p style={{ color: '#cbd5e0', fontSize: '0.9rem' }}>Strategic AI implementation and roadmap planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our AI Development Process
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { step: '1', title: 'Discovery & Analysis', desc: 'Understand your business needs and data landscape' },
              { step: '2', title: 'Data Preparation', desc: 'Clean, label, and prepare data for training' },
              { step: '3', title: 'Model Development', desc: 'Build and train custom AI models' },
              { step: '4', title: 'Testing & Validation', desc: 'Rigorously test models for accuracy and bias' },
              { step: '5', title: 'Deployment', desc: 'Integrate AI solutions into your workflow' },
              { step: '6', title: 'Monitoring & Optimization', desc: 'Continuously improve model performance' }
            ].map((process, index) => (
              <div key={index} style={{
                background: '#1e293b',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  {process.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
                  {process.title}
                </h3>
                <p style={{ color: '#cbd5e0', lineHeight: '1.6' }}>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Transform Your Business with AI?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#e2e8f0',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Let's discuss how AI and machine learning can drive innovation and growth for your organization.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Schedule Consultation
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        padding: '2rem',
        borderTop: '1px solid #334155'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#cbd5e0'
        }}>
          <p>© {new Date().getFullYear()} TOOSII TECH COMPANY. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <Link href="/services" style={{ color: '#cbd5e0', textDecoration: 'none' }}>All Services</Link>
            <Link href="/contact" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Contact Us</Link>
            <Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
