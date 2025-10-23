import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms for predictive analytics and automation.',
      icon: '🤖',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots'],
      link: '/services/ai-ml',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure, migration services, and DevOps solutions for modern businesses.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Cloud Security'],
      link: '/services/cloud',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      link: '/services/cybersecurity',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Web3 & Blockchain',
      description: 'Decentralized applications, smart contracts, and blockchain solutions for the future of the internet.',
      icon: '⛓️',
      features: ['Smart Contracts', 'DApp Development', 'NFT Solutions', 'DeFi Platforms'],
      link: '/services/web3',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      link: '/services/mobile',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your business processes and digital transformation journey.',
      icon: '💼',
      features: ['Digital Strategy', 'Technology Audit', 'Process Optimization', 'IT Infrastructure'],
      link: '/services/consulting',
      gradient: 'from-gray-600 to-gray-800'
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #fff, #e2e8f0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Our Services
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#e2e8f0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Cutting-edge technology solutions to drive your digital transformation and business growth
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '4rem 2rem' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #4a5568',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <Link href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontSize: '3rem',
                    marginRight: '1rem'
                  }}>{service.icon}</span>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0
                  }}>{service.title}</h3>
                </div>
                
                <p style={{
                  color: '#cbd5e0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>{service.description}</p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  {service.features.map((feature, index) => (
                    <span key={index} style={{
                      background: 'rgba(102, 126, 234, 0.2)',
                      color: '#cbd5e0',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      border: '1px solid #4a5568'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    color: '#667eea',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>Explore Service →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '3rem',
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#e2e8f0',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Let's discuss how our technology solutions can drive your success
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f7fafc'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              Get Started
            </Link>
            <Link href="/contact" style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid white',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = '#667eea'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'white'
            }}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
