import Link from 'next/link'

export default function MobileDevelopment() {
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
              📱 Mobile Development
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#e2e8f0',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Creating powerful, user-friendly mobile applications for iOS and Android 
              that deliver exceptional user experiences and drive business growth.
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
                Start Mobile Project
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
                View Portfolio
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
              }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Native iOS Apps</h3>
              <p style={{ color: '#cbd5e1' }}>
                High-performance iOS applications built with Swift and SwiftUI, 
                optimized for all Apple devices.
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
              }}>🤖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Native Android Apps</h3>
              <p style={{ color: '#cbd5e1' }}>
                Robust Android applications developed with Kotlin and Jetpack Compose, 
                compatible with all Android devices.
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
              }}>🌐</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cross-Platform Apps</h3>
              <p style={{ color: '#cbd5e1' }}>
                Cost-effective cross-platform solutions using React Native and Flutter 
                for faster development and deployment.
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
            Our Mobile Development Services
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            {/* iOS Development */}
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
              }}>📱 iOS App Development</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Swift and SwiftUI development for modern iOS apps</li>
                <li>Objective-C for legacy app maintenance and updates</li>
                <li>iPhone, iPad, and Apple Watch applications</li>
                <li>Apple Store submission and approval process</li>
                <li>iOS-specific UI/UX design and implementation</li>
                <li>Integration with Apple ecosystem (HealthKit, ARKit, etc.)</li>
              </ul>
            </div>

            {/* Android Development */}
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
              }}>🤖 Android App Development</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Kotlin and Jetpack Compose for modern Android apps</li>
                <li>Java for existing app maintenance and enhancements</li>
                <li>Material Design implementation and customization</li>
                <li>Google Play Store deployment and optimization</li>
                <li>Android-specific features and API integration</li>
                <li>Multi-device compatibility and testing</li>
              </ul>
            </div>

            {/* Cross-Platform Development */}
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
              }}>🌐 Cross-Platform Development</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>React Native development for JavaScript-based apps</li>
                <li>Flutter development for Dart-based applications</li>
                <li>Single codebase for iOS and Android platforms</li>
                <li>Native performance with cross-platform efficiency</li>
                <li>Custom native module development when needed</li>
                <li>Rapid prototyping and MVP development</li>
              </ul>
            </div>

            {/* App Types */}
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
              }}>🎯 Types of Mobile Apps We Build</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li><strong>E-commerce & Retail Apps</strong> - Shopping, payments, inventory</li>
                <li><strong>Social Media & Networking Apps</strong> - Community platforms</li>
                <li><strong>Healthcare & Fitness Apps</strong> - Wellness tracking, telemedicine</li>
                <li><strong>Finance & Banking Apps</strong> - Mobile banking, fintech solutions</li>
                <li><strong>Entertainment & Media Apps</strong> - Streaming, content delivery</li>
                <li><strong>Productivity & Business Apps</strong> - Enterprise solutions</li>
                <li><strong>Gaming & Interactive Apps</strong> - Mobile games, AR experiences</li>
                <li><strong>Education & Learning Apps</strong> - E-learning platforms</li>
              </ul>
            </div>

            {/* Additional Services */}
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
              }}>🛠️ Additional Mobile Services</h3>
              <ul style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <li>Mobile app UI/UX design and prototyping</li>
                <li>App store optimization (ASO) and marketing</li>
                <li>Backend development and API integration</li>
                <li>App maintenance and support services</li>
                <li>Performance optimization and bug fixing</li>
                <li>App analytics and user behavior tracking</li>
                <li>Security implementation and penetration testing</li>
                <li>Cloud integration and push notification services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: 'white'
          }}>
            Our Mobile Technology Stack
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
              }}>🍎</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>iOS Technologies</h4>
              <p style={{ color: '#cbd5e1' }}>
                Swift, SwiftUI, Objective-C, Xcode, CocoaPods, Core Data, ARKit
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
              }}>🤖</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Android Technologies</h4>
              <p style={{ color: '#cbd5e1' }}>
                Kotlin, Java, Jetpack Compose, Android Studio, Gradle, Room, Material Design
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
              }}>⚛️</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Cross-Platform</h4>
              <p style={{ color: '#cbd5e1' }}>
                React Native, Flutter, Dart, JavaScript, TypeScript, Expo
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
              }}>☁️</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Backend & APIs</h4>
              <p style={{ color: '#cbd5e1' }}>
                Node.js, Firebase, REST APIs, GraphQL, AWS, Google Cloud, MongoDB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
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
            Our Mobile App Development Process
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Discovery & Planning</h4>
              <p style={{ color: '#cbd5e1' }}>
                Understand your requirements, define features, and create project roadmap.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>UI/UX Design</h4>
              <p style={{ color: '#cbd5e1' }}>
                Create intuitive user interfaces and engaging user experience designs.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Development</h4>
              <p style={{ color: '#cbd5e1' }}>
                Build your mobile app using the latest technologies and best practices.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Testing & QA</h4>
              <p style={{ color: '#cbd5e1' }}>
                Rigorous testing across devices and platforms to ensure quality.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>5</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Deployment</h4>
              <p style={{ color: '#cbd5e1' }}>
                Launch your app on App Store, Google Play, or enterprise distribution.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #334155',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>6</div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Support & Maintenance</h4>
              <p style={{ color: '#cbd5e1' }}>
                Ongoing updates, feature enhancements, and technical support.
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
            Transform Your Business with Mobile
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            Ready to build a mobile app that engages users and drives growth? 
            Let's create something amazing together.
          </p>
          
          {/* Inlined Company Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Contact Our Mobile Team</h3>
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
              Start Mobile Project
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
          Creating Exceptional Mobile Experiences
        </p>
      </div>
    </div>
  )
}
