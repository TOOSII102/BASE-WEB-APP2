'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOOSII TECH - Leading Technology Solutions in Nairobi, Kenya</title>
        <meta name="description" content="TOOSII TECH provides cutting-edge technology solutions including web development, mobile apps, cloud solutions, IT support, and digital marketing services in Nairobi, Kenya." />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        {/* Navigation */}
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
              <Link href="/" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <Link href="/services" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Portal</a>
              <Link href="/contact" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
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
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: '1.2'
          }}>
            Transform Your Business With Technology
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
            color: '#cbd5e0',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 2.5rem'
          }}>
            Leading technology solutions provider in Nairobi, Kenya. We help businesses 
            thrive in the digital world with cutting-edge web development, mobile apps, 
            and comprehensive IT services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Get Started Today
            </Link>
            <Link href="/services" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              border: '1px solid #334155',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = '#60a5fa';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = '#334155';
            }}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '4rem 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Our Services
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e0',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Comprehensive technology solutions tailored to meet your business needs 
              and drive digital transformation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { 
                icon: '💻', 
                title: 'Web Development', 
                desc: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. Responsive designs that work perfectly on all devices.',
                features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'API Development']
              },
              { 
                icon: '📱', 
                title: 'Mobile App Development', 
                desc: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with excellent performance.',
                features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter']
              },
              { 
                icon: '☁️', 
                title: 'Cloud Solutions', 
                desc: 'Cloud infrastructure setup, migration, and management. Scalable solutions using AWS, Google Cloud, and Azure.',
                features: ['Cloud Migration', 'Server Setup', 'DevOps', 'Scalable Infrastructure']
              },
              { 
                icon: '🔧', 
                title: 'IT Support & Maintenance', 
                desc: '24/7 technical support, system maintenance, and troubleshooting. Keep your systems running smoothly.',
                features: ['24/7 Support', 'System Maintenance', 'Security Updates', 'Performance Optimization']
              },
              { 
                icon: '🎨', 
                title: 'UI/UX Design', 
                desc: 'Beautiful and intuitive user interface designs that enhance user experience and drive engagement.',
                features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
              },
              { 
                icon: '🚀', 
                title: 'Digital Marketing', 
                desc: 'Boost your online presence with SEO, social media marketing, and digital advertising strategies.',
                features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Advertising']
              },
              { 
                icon: '🛒', 
                title: 'E-commerce Solutions', 
                desc: 'Complete online store development with payment integration, inventory management, and analytics.',
                features: ['Online Stores', 'Payment Gateways', 'Inventory Management', 'Sales Analytics']
              },
              { 
                icon: '📊', 
                title: 'Data Analytics', 
                desc: 'Business intelligence and data visualization solutions to help you make informed decisions.',
                features: ['Data Visualization', 'Business Intelligence', 'Reports & Dashboards', 'KPI Tracking']
              },
              { 
                icon: '🔒', 
                title: 'Cyber Security', 
                desc: 'Protect your digital assets with comprehensive security audits, monitoring, and protection services.',
                features: ['Security Audits', 'Threat Monitoring', 'Data Protection', 'Compliance']
              }
            ].map((service, index) => (
              <div key={index} style={{
                background: 'rgba(30, 41, 59, 0.8)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  color: 'white', 
                  marginBottom: '1rem', 
                  fontSize: '1.5rem',
                  textAlign: 'center'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#cbd5e0', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {service.desc}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center'
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} style={{
                      background: 'rgba(96, 165, 250, 0.1)',
                      color: '#60a5fa',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      border: '1px solid rgba(96, 165, 250, 0.3)'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div style={{ 
          background: 'rgba(15, 23, 42, 0.9)',
          padding: '6rem 2rem'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Why Choose TOOSII TECH?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#cbd5e0',
              maxWidth: '600px',
              margin: '0 auto 4rem',
              lineHeight: '1.6'
            }}>
              We deliver exceptional value through our commitment to quality, innovation, 
              and client success.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { 
                  icon: '⚡', 
                  title: 'Fast Delivery', 
                  desc: 'Quick turnaround times without compromising on quality. We deliver projects on time, every time.' 
                },
                { 
                  icon: '💎', 
                  title: 'Quality Assurance', 
                  desc: 'Rigorous testing and quality control processes ensure your solution works flawlessly.' 
                },
                { 
                  icon: '🤝', 
                  title: 'Client Focused', 
                  desc: 'We prioritize your business objectives and work closely with you to achieve your goals.' 
                },
                { 
                  icon: '🌍', 
                  title: 'Global Standards', 
                  desc: 'Our solutions meet international standards while understanding local market needs.' 
                },
                { 
                  icon: '🛡️', 
                  title: 'Reliable Support', 
                  desc: 'Continuous support and maintenance to keep your systems running smoothly.' 
                },
                { 
                  icon: '💡', 
                  title: 'Innovation', 
                  desc: 'We stay updated with the latest technologies to provide cutting-edge solutions.' 
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(30, 41, 59, 0.8)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  textAlign: 'center',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1.5rem'
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ 
                    color: 'white', 
                    marginBottom: '1rem', 
                    fontSize: '1.25rem'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ 
                    color: '#cbd5e0', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '6rem 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#cbd5e0',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Let's discuss your project and create a technology solution that drives 
            your business forward. Contact us today for a free consultation.
          </p>
          
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '3rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Email Us</h4>
                <a href="mailto:toosiitechcompany@gmail.com" style={{ 
                  color: '#60a5fa', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}>
                  toosiitechcompany@gmail.com
                </a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📞</div>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Call Us</h4>
                <a href="tel:+254748340864" style={{ 
                  color: '#60a5fa', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}>
                  +254 748 340 864
                </a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌐</div>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Visit Portal</h4>
                <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer" 
                  style={{ 
                    color: '#60a5fa', 
                    textDecoration: 'none',
                    fontSize: '1.1rem'
                  }}>
                  Company Portal
                </a>
              </div>
            </div>

            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '1.25rem 3rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.2rem',
              display: 'inline-block',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Start Your Project Today
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          background: 'rgba(15, 23, 42, 0.95)',
          borderTop: '1px solid #334155',
          padding: '4rem 2rem 2rem'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: 'white'
            }}>
              TOOSII TECH
            </div>
            <p style={{ 
              color: '#cbd5e0', 
              marginBottom: '2rem',
              fontSize: '1.125rem'
            }}>
              Leading technology solutions in Nairobi, Kenya
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap', 
              marginBottom: '3rem' 
            }}>
              <a href="mailto:toosiitechcompany@gmail.com" style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                <span>📧</span>
                toosiitechcompany@gmail.com
              </a>
              <a href="tel:+254748340864" style={{ 
                color: '#60a5fa', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: '500'
              }}>
                <span>📞</span>
                +254 748 340 864
              </a>
              <a href="https://toosii-tech-company-3npa.vercel.app/" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  color: '#60a5fa', 
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '500'
                }}>
                <span>🌐</span>
                Company Portal
              </a>
            </div>
            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.9rem',
              borderTop: '1px solid #334155',
              paddingTop: '2rem'
            }}>
              © 2024 TOOSII TECH. All rights reserved. | Nairobi, Kenya
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
