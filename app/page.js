import Link from 'next/link'

export default function Home() {
  const services = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
      icon: '🤖',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots']
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure and migration services.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Cloud Security']
    },
    {
      id: 'cybersecurity',
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Incident Response']
    },
    {
      id: 'web3',
      title: 'Web3 & Blockchain',
      description: 'Decentralized solutions and blockchain technology integration.',
      icon: '⛓️',
      features: ['Smart Contracts', 'DApp Development', 'NFT Solutions', 'Blockchain Consulting']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting for business transformation.',
      icon: '💼',
      features: ['Digital Strategy', 'Technology Audit', 'Process Optimization', 'IT Roadmapping']
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1>Welcome to TOOSII TECH</h1>
          <p>Pioneering the future of digital transformation through innovative technology solutions</p>
          <div className="cta-buttons">
            <Link href="/get-started" className="btn-primary">
              🚀 Get Started
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions tailored to drive your business forward in the digital age.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${service.id}`} className="service-button">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="view-all-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-grid">
            <div className="about-content">
              <h2>About TOOSII TECH</h2>
              <p>
                We are a forward-thinking technology company based in Nairobi, Kenya, dedicated to 
                transforming businesses through innovative digital solutions. Our team of experts 
                combines technical excellence with business acumen to deliver results that matter.
              </p>
              <p>
                From startups to enterprises, we partner with organizations to navigate the 
                complexities of digital transformation and emerge as leaders in their industries.
              </p>
              <Link href="/about" className="about-button">
                Learn More About Us
              </Link>
            </div>
            <div className="benefits-card">
              <h3>Why Choose TOOSII TECH?</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  <span>Cutting-edge technology solutions</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  <span>Customized approach for each client</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">✅</span>
                  <span>Competitive pricing and ROI focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Let's discuss how TOOSII TECH can help you achieve your digital transformation goals.
          </p>
          <div className="cta-buttons-group">
            <Link href="/contact" className="cta-primary">
              Get Free Consultation
            </Link>
            <a href="tel:+254748340864" className="cta-secondary">
              📞 Call Now
            </a>
          </div>
          <div className="contact-info">
            <p>Email: <a href="mailto:toosiitechcompany@gmail.com">toosiitechcompany@gmail.com</a></p>
            <p>Phone: <a href="tel:+254748340864">+254 748 340 864</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
