import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './team.css'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Toosii Tech",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Visionary leader and founder of TOOSII TECH with extensive experience in technology innovation and digital transformation strategies. Driving the company's vision and strategic direction.",
      expertise: ["Strategic Planning", "Business Development", "Technology Innovation", "Digital Transformation", "Leadership"],
      experience: "12+ years",
      education: "M.Sc. Computer Science & Business Administration",
      linkedin: "https://linkedin.com/in/toosiitech",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 2,
      name: "Toosii Tech",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Technology expert leading our technical vision and innovation. Passionate about building scalable solutions and implementing cutting-edge technologies across all projects.",
      expertise: ["AI/ML", "Cloud Architecture", "System Design", "Blockchain", "DevOps", "Full Stack Development"],
      experience: "10+ years",
      education: "B.Sc. Software Engineering, Advanced Cloud Certifications",
      linkedin: "https://linkedin.com/in/toosiitech-cto",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 3,
      name: "Casper Tech",
      role: "Head of Cybersecurity",
      department: "Security",
      bio: "Cybersecurity specialist with deep expertise in threat intelligence, risk management, and secure system architecture for enterprise clients.",
      expertise: ["Threat Intelligence", "Risk Assessment", "Security Architecture", "Network Security", "Compliance"],
      experience: "8+ years",
      education: "CISSP, CEH Certified",
      linkedin: "https://linkedin.com/in/caspertech",
      email: "caspertechke@gmail.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 4,
      name: "Toosii Tech",
      role: "Lead Full Stack Developer",
      department: "Engineering",
      bio: "Full stack developer specializing in creating robust, scalable web applications with modern technologies and industry best practices.",
      expertise: ["React", "Node.js", "Python", "MongoDB", "AWS", "Next.js"],
      experience: "6+ years",
      education: "B.Sc. Computer Science",
      linkedin: "https://linkedin.com/in/toosiitech-dev",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 5,
      name: "Toosii Tech",
      role: "AI Research Lead",
      department: "Artificial Intelligence",
      bio: "Machine learning researcher focused on developing innovative AI solutions and implementing cutting-edge algorithms for business applications.",
      expertise: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Data Science"],
      experience: "7+ years",
      education: "Ph.D. Artificial Intelligence",
      linkedin: "https://linkedin.com/in/toosiitech-ai",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 6,
      name: "Toosii Tech",
      role: "Cloud Solutions Architect",
      department: "Cloud Engineering",
      bio: "Cloud infrastructure expert specializing in designing and implementing scalable, secure, and cost-effective cloud solutions for enterprise clients.",
      expertise: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Serverless"],
      experience: "8+ years",
      education: "AWS Solutions Architect Professional",
      linkedin: "https://linkedin.com/in/toosiitech-cloud",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 7,
      name: "Jamal",
      role: "Mobile Development Lead",
      department: "Mobile Engineering",
      bio: "Mobile technology expert with extensive experience in creating high-performance cross-platform applications for iOS and Android.",
      expertise: ["React Native", "Flutter", "iOS Development", "Android Development", "Mobile Security"],
      experience: "5+ years",
      education: "B.Sc. Mobile Computing",
      linkedin: "https://linkedin.com/in/jamal",
      email: "jamalikicom@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 8,
      name: "Josh",
      role: "DevOps Engineer",
      department: "Engineering",
      bio: "DevOps specialist passionate about automation, CI/CD pipelines, and building robust infrastructure for development teams.",
      expertise: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Infrastructure as Code", "Monitoring"],
      experience: "4+ years",
      education: "B.E. Computer Engineering",
      linkedin: "https://linkedin.com/in/josh",
      email: "jeshi5005@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 9,
      name: "Toosii Tech",
      role: "Blockchain Architect",
      department: "Web3 & Blockchain",
      bio: "Blockchain expert specializing in decentralized systems, smart contracts, and Web3 application development for modern businesses.",
      expertise: ["Smart Contracts", "Ethereum", "Solidity", "DeFi", "Web3 Development", "NFT Platforms"],
      experience: "5+ years",
      education: "M.Sc. Cryptography & Blockchain",
      linkedin: "https://linkedin.com/in/toosiitech-blockchain",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 10,
      name: "Toosii Tech",
      role: "UX/UI Design Director",
      department: "Design",
      bio: "Creative director focused on delivering exceptional user experiences through human-centered design principles and modern UI practices.",
      expertise: ["User Research", "UI/UX Design", "Design Systems", "Product Strategy", "Prototyping", "User Testing"],
      experience: "6+ years",
      education: "M.Des. Interaction Design",
      linkedin: "https://linkedin.com/in/toosiitech-design",
      email: "toosiitechcompany@gmail.com",
      image: "/api/placeholder/300/300",
      featured: false
    }
  ]

  const departments = [
    { name: "Leadership", count: 3, color: "#667eea" },
    { name: "Technology", count: 6, color: "#764ba2" },
    { name: "Security", count: 1, color: "#f093fb" },
    { name: "Engineering", count: 2, color: "#4facfe" },
    { name: "Artificial Intelligence", count: 1, color: "#43e97b" },
    { name: "Web3 & Blockchain", count: 1, color: "#fa709a" },
    { name: "Design", count: 1, color: "#ff9a9e" }
  ]

  const stats = [
    { number: "10", label: "Team Members" },
    { number: "7", label: "TOOSII TECH Experts" },
    { number: "8+", label: "Years Average Experience" },
    { number: "20+", label: "Certifications" }
  ]

  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="team-page">
          {/* Hero Section */}
          <div className="team-hero">
            <div className="hero-content">
              <h1>Meet Our Team</h1>
              <p className="hero-subtitle">
                The brilliant minds behind TOOSII TECH. Led by our core team, we deliver exceptional 
                technology solutions with expertise across multiple domains.
              </p>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="leadership-section">
            <div className="container">
              <h2 className="section-title">Leadership Team</h2>
              <p className="section-subtitle">
                Our experienced leadership team drives TOOSII TECH's vision with expertise and innovation.
              </p>
              <div className="leadership-grid">
                {teamMembers.filter(member => member.featured).map(member => (
                  <div key={member.id} className="leader-card">
                    <div className="leader-image">
                      <div className="image-placeholder"></div>
                    </div>
                    <div className="leader-content">
                      <h3>{member.name}</h3>
                      <div className="leader-role">{member.role}</div>
                      <div className="leader-department">{member.department}</div>
                      <p className="leader-bio">{member.bio}</p>
                      <div className="leader-expertise">
                        <strong>Expertise:</strong>
                        <div className="expertise-tags">
                          {member.expertise.map((skill, index) => (
                            <span key={index} className="expertise-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="leader-details">
                        <div className="detail">
                          <strong>Experience:</strong> {member.experience}
                        </div>
                        <div className="detail">
                          <strong>Education:</strong> {member.education}
                        </div>
                        <div className="detail email-highlight">
                          <strong>Email:</strong> {member.email}
                        </div>
                      </div>
                      <div className="leader-contact">
                        <a href={member.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a href={`mailto:${member.email}`} className="contact-link email-button">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Departments Overview */}
          <div className="departments-section">
            <div className="container">
              <h2 className="section-title">Our Departments</h2>
              <div className="departments-grid">
                {departments.map((dept, index) => (
                  <div key={index} className="department-card">
                    <div 
                      className="department-icon"
                      style={{ backgroundColor: dept.color }}
                    >
                      {dept.name.split(' ').map(word => word[0]).join('')}
                    </div>
                    <h3>{dept.name}</h3>
                    <div className="department-count">{dept.count} Members</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Team Grid */}
          <div className="full-team-section">
            <div className="container">
              <h2 className="section-title">Our Expert Team</h2>
              <p className="section-subtitle">
                Meet the talented professionals who make TOOSII TECH a leader in technology innovation.
              </p>
              <div className="team-grid">
                {teamMembers.filter(member => !member.featured).map(member => (
                  <div key={member.id} className="team-member-card">
                    <div className="member-image">
                      <div className="image-placeholder"></div>
                    </div>
                    <div className="member-content">
                      <h3>{member.name}</h3>
                      <div className="member-role">{member.role}</div>
                      <div className="member-department">{member.department}</div>
                      <p className="member-bio">{member.bio}</p>
                      <div className="member-expertise">
                        {member.expertise.slice(0, 3).map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="skill-tag more">+{member.expertise.length - 3} more</span>
                        )}
                      </div>
                      <div className="member-contact">
                        <div className={`member-email ${member.email.includes('toosiitechcompany') ? 'primary-email' : ''}`}>
                          <strong>Email:</strong> {member.email}
                        </div>
                        <div className="social-links">
                          <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <a href={`mailto:${member.email}`} className="social-link email-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary Contact CTA */}
          <div className="primary-contact-cta">
            <div className="container">
              <div className="cta-content">
                <h2>Primary Contact</h2>
                <p>
                  For general inquiries, project discussions, or partnership opportunities, 
                  please contact our main team at:
                </p>
                <div className="primary-email-display">
                  <div className="email-address">toosiitechcompany@gmail.com</div>
                  <a href="mailto:toosiitechcompany@gmail.com" className="cta-button primary">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="join-team-cta">
            <div className="container">
              <div className="cta-content">
                <h2>Join Our Growing Team</h2>
                <p>
                  Are you passionate about technology and innovation? We're always looking for talented 
                  individuals to join our team and help shape the future of digital transformation.
                </p>
                <div className="cta-buttons">
                  <a href="/careers" className="cta-button primary">
                    View Open Positions
                  </a>
                  <a href="/contact" className="cta-button secondary">
                    Contact HR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
