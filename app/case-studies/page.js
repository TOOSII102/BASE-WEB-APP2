import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './case-studies.css'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Supply Chain Optimization for Retail Giant",
      client: "Global Retail Corporation",
      industry: "Retail & E-commerce",
      duration: "6 months",
      teamSize: "8 specialists",
      results: [
        { metric: "40%", label: "Reduction in delivery times" },
        { metric: "25%", label: "Decrease in logistics costs" },
        { metric: "99.2%", label: "Inventory accuracy" }
      ],
      challenge: "The client faced significant challenges in inventory management and delivery optimization across 50+ distribution centers worldwide, leading to stockouts and delayed deliveries.",
      solution: "We implemented a custom AI-driven supply chain management system using machine learning algorithms to predict demand, optimize inventory levels, and streamline logistics operations.",
      technologies: ["Python", "TensorFlow", "AWS", "React", "Node.js"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Blockchain-Based Digital Identity Platform",
      client: "National Banking Association",
      industry: "Banking & Finance",
      duration: "9 months",
      teamSize: "12 specialists",
      results: [
        { metric: "2M+", label: "Digital identities created" },
        { metric: "80%", label: "Faster KYC process" },
        { metric: "Zero", label: "Security breaches" }
      ],
      challenge: "The banking sector needed a secure, decentralized identity verification system to combat fraud and streamline customer onboarding processes across multiple institutions.",
      solution: "We developed a blockchain-powered digital identity platform that enables secure, verifiable, and portable digital identities while maintaining user privacy and regulatory compliance.",
      technologies: ["Ethereum", "Solidity", "React Native", "IPFS", "Node.js"],
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Migration & DevOps Transformation",
      client: "Healthcare Technology Provider",
      industry: "Healthcare",
      duration: "8 months",
      teamSize: "10 specialists",
      results: [
        { metric: "60%", label: "Reduction in infrastructure costs" },
        { metric: "99.9%", label: "Uptime achieved" },
        { metric: "4x", label: "Faster deployment cycles" }
      ],
      challenge: "A healthcare technology company struggled with legacy on-premise infrastructure, leading to frequent downtime, slow deployment cycles, and high maintenance costs.",
      solution: "We executed a comprehensive cloud migration to AWS, implemented CI/CD pipelines, containerized applications with Docker and Kubernetes, and established robust monitoring systems.",
      technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Banking App Security Overhaul",
      client: "Regional Bank Chain",
      industry: "Banking",
      duration: "5 months",
      teamSize: "6 specialists",
      results: [
        { metric: "100%", label: "Security compliance achieved" },
        { metric: "Zero", label: "Vulnerabilities post-audit" },
        { metric: "50%", label: "Faster transaction processing" }
      ],
      challenge: "The client's mobile banking application had critical security vulnerabilities and performance issues, risking customer data and regulatory compliance.",
      solution: "We conducted a comprehensive security audit, implemented advanced encryption, biometric authentication, and optimized the app's performance while ensuring full regulatory compliance.",
      technologies: ["React Native", "Biometric Auth", "Encryption", "Security Testing"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 5,
      title: "IoT Platform for Smart Manufacturing",
      client: "Industrial Manufacturing Group",
      industry: "Manufacturing",
      duration: "7 months",
      teamSize: "9 specialists",
      results: [
        { metric: "30%", label: "Increase in production efficiency" },
        { metric: "45%", label: "Reduction in equipment downtime" },
        { metric: "20%", label: "Energy savings" }
      ],
      challenge: "A manufacturing company needed to modernize their production facilities with real-time monitoring, predictive maintenance, and process optimization capabilities.",
      solution: "We designed and implemented a comprehensive IoT platform connecting 500+ sensors across manufacturing lines, enabling predictive maintenance, real-time monitoring, and data-driven optimization.",
      technologies: ["IoT Sensors", "Python", "AWS IoT", "React", "Machine Learning"],
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity Infrastructure for Government Agency",
      client: "Federal Government Department",
      industry: "Government",
      duration: "12 months",
      teamSize: "15 specialists",
      results: [
        { metric: "Zero", label: "Successful cyber attacks" },
        { metric: "99.99%", label: "System availability" },
        { metric: "2min", label: "Threat detection time" }
      ],
      challenge: "A government agency required a robust cybersecurity framework to protect sensitive citizen data and critical infrastructure from sophisticated cyber threats.",
      solution: "We implemented a multi-layered security architecture including advanced threat detection, zero-trust network access, encryption protocols, and comprehensive security training.",
      technologies: ["Zero Trust", "SIEM", "EDR", "Encryption", "Compliance"],
      image: "/api/placeholder/600/400",
      featured: false
    }
  ]

  const industries = [
    "All Industries",
    "Banking & Finance",
    "Healthcare",
    "Retail & E-commerce",
    "Manufacturing",
    "Government",
    "Technology"
  ]

  const services = [
    "All Services",
    "AI & Machine Learning",
    "Blockchain & Web3",
    "Cloud Solutions",
    "Cybersecurity",
    "Mobile Development",
    "IoT Solutions"
  ]

  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="case-studies-page">
          {/* Hero Section */}
          <div className="case-studies-hero">
            <div className="hero-content">
              <h1>Case Studies</h1>
              <p className="hero-subtitle">
                Discover how TOOSII TECH delivers transformative results for clients across industries. 
                Explore our successful projects and the measurable impact we've created.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Industries Served</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="featured-case-studies">
            <div className="container">
              <h2 className="section-title">Featured Success Stories</h2>
              <div className="featured-grid">
                {caseStudies.filter(study => study.featured).map(study => (
                  <div key={study.id} className="featured-case-study">
                    <div className="case-image">
                      <div className="image-placeholder"></div>
                    </div>
                    <div className="case-content">
                      <span className="industry-tag">{study.industry}</span>
                      <h3>{study.title}</h3>
                      <div className="client-info">
                        <strong>Client:</strong> {study.client}
                      </div>
                      <div className="project-details">
                        <div className="detail">
                          <span className="label">Duration:</span>
                          <span className="value">{study.duration}</span>
                        </div>
                        <div className="detail">
                          <span className="label">Team:</span>
                          <span className="value">{study.teamSize}</span>
                        </div>
                      </div>
                      <div className="results-showcase">
                        <h4>Key Results</h4>
                        <div className="results-grid">
                          {study.results.map((result, index) => (
                            <div key={index} className="result-item">
                              <div className="result-metric">{result.metric}</div>
                              <div className="result-label">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="view-case-btn">
                        View Full Case Study
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Case Studies */}
          <div className="all-case-studies">
            <div className="container">
              <div className="case-studies-header">
                <h2>All Case Studies</h2>
                <div className="filters">
                  <select className="filter-select">
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  <select className="filter-select">
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="case-studies-grid">
                {caseStudies.filter(study => !study.featured).map(study => (
                  <div key={study.id} className="case-study-card">
                    <div className="card-image">
                      <div className="image-placeholder"></div>
                    </div>
                    <div className="card-content">
                      <span className="industry-tag">{study.industry}</span>
                      <h3>{study.title}</h3>
                      <div className="client-info">
                        <strong>Client:</strong> {study.client}
                      </div>
                      <p className="challenge-excerpt">
                        {study.challenge.substring(0, 120)}...
                      </p>
                      <div className="quick-results">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="quick-result">
                            <span className="metric">{result.metric}</span>
                            <span className="label">{result.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="technologies">
                        <span className="tech-label">Technologies:</span>
                        <div className="tech-tags">
                          {study.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                          {study.technologies.length > 3 && (
                            <span className="tech-tag">+{study.technologies.length - 3} more</span>
                          )}
                        </div>
                      </div>
                      <button className="read-case-btn">
                        Read Case Study
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="case-studies-cta">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Start Your Success Story?</h2>
                <p>
                  Let's discuss how TOOSII TECH can help transform your business with cutting-edge technology solutions. 
                  Our team is ready to deliver measurable results for your organization.
                </p>
                <div className="cta-buttons">
                  <button className="cta-button primary">
                    Start Your Project
                  </button>
                  <button className="cta-button secondary">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
