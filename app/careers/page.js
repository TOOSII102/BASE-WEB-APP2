import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './careers.css'

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Nairobi, Kenya",
      remote: true,
      description: "We're looking for an experienced Full Stack Developer to join our core engineering team and help build scalable web applications.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of database design and optimization",
        "Experience with DevOps and CI/CD pipelines"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      type: "Full-time",
      location: "Remote",
      remote: true,
      description: "Join our AI team to develop cutting-edge machine learning models and AI solutions for our clients.",
      requirements: [
        "3+ years of experience in machine learning",
        "Proficiency in Python, TensorFlow, or PyTorch",
        "Experience with NLP, computer vision, or predictive modeling",
        "Knowledge of MLOps practices",
        "Strong mathematical background"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      type: "Full-time",
      location: "Nairobi, Kenya",
      remote: false,
      description: "Help protect our clients' digital assets and infrastructure from emerging cyber threats.",
      requirements: [
        "4+ years in cybersecurity roles",
        "Experience with penetration testing and vulnerability assessment",
        "Knowledge of security frameworks (ISO 27001, NIST)",
        "Familiarity with cloud security best practices",
        "Relevant certifications (CISSP, CEH, etc.)"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      remote: true,
      description: "Build and maintain our infrastructure and deployment pipelines to ensure high availability and performance.",
      requirements: [
        "3+ years of DevOps experience",
        "Proficiency with Docker, Kubernetes, and Terraform",
        "Experience with cloud infrastructure (AWS preferred)",
        "Knowledge of monitoring and logging tools",
        "Scripting skills in Bash, Python, or similar"
      ]
    },
    {
      id: 5,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Nairobi, Kenya",
      remote: true,
      description: "Create beautiful, responsive, and accessible user interfaces for our web applications.",
      requirements: [
        "3+ years of frontend development experience",
        "Expertise in React, Next.js, and modern CSS",
        "Experience with state management (Redux, Context API)",
        "Knowledge of web performance optimization",
        "Familiarity with UX/UI principles"
      ]
    },
    {
      id: 6,
      title: "Blockchain Developer",
      department: "Web3",
      type: "Contract",
      location: "Remote",
      remote: true,
      description: "Work on decentralized applications and smart contracts for our Web3 projects.",
      requirements: [
        "2+ years of blockchain development experience",
        "Proficiency in Solidity and smart contract development",
        "Experience with Ethereum, Polygon, or other blockchain platforms",
        "Knowledge of Web3.js or Ethers.js",
        "Understanding of DeFi and NFT ecosystems"
      ]
    }
  ]

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description: "Industry-competitive compensation package with performance bonuses"
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible remote work options and comfortable work environment"
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual budget for conferences, courses, and professional development"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health and dental insurance coverage"
    },
    {
      icon: "⚡",
      title: "Latest Equipment",
      description: "Top-of-the-line hardware and software tools to do your best work"
    },
    {
      icon: "🌴",
      title: "Paid Time Off",
      description: "Generous vacation policy and paid time off for rest and recovery"
    }
  ]

  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="careers-page">
          {/* Hero Section */}
          <div className="careers-hero">
            <div className="hero-content">
              <h1>Join TOOSII TECH</h1>
              <p className="hero-subtitle">
                Build the future with us. We're looking for talented individuals who are passionate about technology and innovation.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="stat">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Open Positions</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="why-join-section">
            <div className="container">
              <h2>Why Join TOOSII TECH?</h2>
              <div className="reasons-grid">
                <div className="reason-card">
                  <div className="reason-icon">🚀</div>
                  <h3>Cutting-Edge Projects</h3>
                  <p>Work on innovative projects using the latest technologies in AI, Web3, and cloud computing.</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">🌍</div>
                  <h3>Global Impact</h3>
                  <p>Your work will reach clients across multiple continents and make a real difference.</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">👥</div>
                  <h3>Great Team</h3>
                  <p>Join a diverse team of experts who are passionate about technology and collaboration.</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">📈</div>
                  <h3>Growth Opportunities</h3>
                  <p>Continuous learning and clear career progression paths for every team member.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <div className="container">
              <h2>Employee Benefits</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Openings Section */}
          <div className="jobs-section">
            <div className="container">
              <h2>Current Openings</h2>
              <p className="section-subtitle">
                Ready to build the future with us? Check out our current opportunities.
              </p>
              
              <div className="jobs-grid">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <h3>{job.title}</h3>
                      <div className="job-meta">
                        <span className="department">{job.department}</span>
                        <span className="job-type">{job.type}</span>
                        <span className="location">
                          {job.location} {job.remote && "• Remote"}
                        </span>
                      </div>
                    </div>
                    
                    <p className="job-description">{job.description}</p>
                    
                    <div className="job-requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-actions">
                      <button className="apply-button">
                        Apply Now
                      </button>
                      <button className="learn-more-button">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="careers-cta">
            <div className="container">
              <h2>Don't See the Perfect Role?</h2>
              <p>
                We're always looking for talented people. Send us your resume and tell us how you can contribute to our team.
              </p>
              <div className="cta-buttons">
                <button className="cta-button primary">
                  Send General Application
                </button>
                <button className="cta-button secondary">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
