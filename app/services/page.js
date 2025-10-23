'use client'

import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms for your business.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots'],
      link: '/services/ai-ml'
    },
    {
      id: 2,
      name: 'Cloud Solutions',
      icon: '☁️',
      description: 'Scalable and secure cloud infrastructure, migration, and management services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Cloud Security'],
      link: '/services/cloud'
    },
    {
      id: 3,
      name: 'Cyber Security',
      icon: '🔒',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      link: '/services/cybersecurity'
    },
    {
      id: 4,
      name: 'Web3 & Blockchain',
      icon: '⛓️',
      description: 'Decentralized applications, smart contracts, and blockchain solutions for the future of web.',
      features: ['Smart Contracts', 'DApp Development', 'NFT Solutions', 'DeFi Platforms'],
      link: '/services/web3'
    },
    {
      id: 5,
      name: 'Mobile Development',
      icon: '📱',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps'],
      link: '/services/mobile'
    },
    {
      id: 6,
      name: 'IT Consulting',
      icon: '💼',
      description: 'Strategic technology consulting to optimize your business processes and digital transformation.',
      features: ['Digital Strategy', 'Technology Audit', 'Process Optimization', 'IT Roadmapping'],
      link: '/services/consulting'
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      padding: '4rem 0' 
    }}>
      {/* Header Section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem',
        textAlign: 'center',
        marginBottom: '4rem'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 800, 
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
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
          Cutting-edge technology solutions designed to drive your business forward in the digital age.
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem' 
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((service) => (
            <div 
              key={service.id}
              style={{ 
                background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid #4a5568',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Service Icon */}
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                marginBottom: '1rem',
                textAlign: 'center',
                color: 'white'
              }}>
                {service.name}
              </h3>

              {/* Service Description */}
              <p style={{ 
                color: '#cbd5e0', 
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {service.description}
              </p>

              {/* Features List */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  marginBottom: '0.75rem',
                  color: '#e2e8f0'
                }}>
                  Key Features:
                </h4>
                <ul style={{ 
                  color: '#cbd5e0', 
                  paddingLeft: '1.25rem',
                  lineHeight: 1.5
                }}>
                  {service.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Link */}
              <div style={{ textAlign: 'center' }}>
                <Link 
                  href={service.link}
                  style={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '4rem auto 0', 
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          color: 'white'
        }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#e2e8f0', 
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Let's discuss how our technology solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/contact"
            style={{ 
              display: 'inline-block',
              background: 'white',
              color: '#667eea',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
          >
            Get Started
          </Link>
          <Link 
            href="/about"
            style={{ 
              display: 'inline-block',
              background: 'transparent',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              border: '2px solid white',
              transition: 'all 0.3s ease'
            }}
          >
            Learn About Us
          </Link>
        </div>
      </div>

      {/* Technology Stack */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '4rem auto 0', 
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '2rem',
          color: '#e2e8f0'
        }}>
          Technologies We Work With
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem',
          flexWrap: 'wrap',
          color: '#cbd5e0',
          fontSize: '1.125rem'
        }}>
          <span>React & Next.js</span>
          <span>Node.js & Python</span>
          <span>AWS & Azure</span>
          <span>TensorFlow & PyTorch</span>
          <span>Solidity & Web3</span>
          <span>React Native & Flutter</span>
        </div>
      </div>
    </div>
  )
}
