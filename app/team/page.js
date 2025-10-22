import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './team.css'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Chief Executive Officer",
      department: "Leadership",
      bio: "Visionary leader with 15+ years of experience in technology innovation and business strategy. Passionate about driving digital transformation.",
      expertise: ["Strategic Planning", "Business Development", "Technology Innovation"],
      experience: "15+ years",
      education: "MBA, Harvard Business School",
      linkedin: "https://linkedin.com/in/alexjohnson",
      email: "alex.johnson@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Technology evangelist and software architect with deep expertise in AI, cloud computing, and scalable system design.",
      expertise: ["AI/ML", "Cloud Architecture", "System Design", "DevOps"],
      experience: "12+ years",
      education: "M.S. Computer Science, MIT",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah.chen@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      role: "Head of Cybersecurity",
      department: "Security",
      bio: "Cybersecurity expert with extensive experience in threat intelligence, risk management, and secure system architecture.",
      expertise: ["Threat Intelligence", "Risk Assessment", "Security Architecture", "Compliance"],
      experience: "10+ years",
      education: "CISSP, CISM Certified",
      linkedin: "https://linkedin.com/in/mikerodriguez",
      email: "mike.rodriguez@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: true
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "AI Research Lead",
      department: "Artificial Intelligence",
      bio: "Machine learning researcher focused on developing cutting-edge AI solutions for complex business problems.",
      expertise: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
      experience: "8+ years",
      education: "Ph.D. Artificial Intelligence, Stanford",
      linkedin: "https://linkedin.com/in/emilywatson",
      email: "emily.watson@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 5,
      name: "David Kim",
      role: "Blockchain Architect",
      department: "Web3 & Blockchain",
      bio: "Blockchain specialist with expertise in decentralized systems, smart contracts, and Web3 application development.",
      expertise: ["Smart Contracts", "DeFi", "NFT Platforms", "Web3 Development"],
      experience: "6+ years",
      education: "M.S. Cryptography, University of Tokyo",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david.kim@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Cloud Solutions Architect",
      department: "Cloud Engineering",
      bio: "Cloud infrastructure expert specializing in scalable, secure, and cost-effective cloud solutions for enterprise clients.",
      expertise: ["AWS", "Azure", "Kubernetes", "Infrastructure as Code"],
      experience: "9+ years",
      education: "AWS Solutions Architect Professional",
      linkedin: "https://linkedin.com/in/lisawang",
      email: "lisa.wang@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 7,
      name: "James Okafor",
      role: "Mobile Development Lead",
      department: "Mobile Engineering",
      bio: "Mobile technology expert with a passion for creating intuitive, high-performance cross-platform applications.",
      expertise: ["React Native", "Flutter", "iOS/Android", "Mobile Security"],
      experience: "7+ years",
      education: "B.S. Software Engineering, University of Nairobi",
      linkedin: "https://linkedin.com/in/jamesokafor",
      email: "james.okafor@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 8,
      name: "Maria Gonzalez",
      role: "UX/UI Design Director",
      department: "Design",
      bio: "Creative director focused on delivering exceptional user experiences through human-centered design principles.",
      expertise: ["User Research", "UI/UX Design", "Design Systems", "Product Strategy"],
      experience: "8+ years",
      education: "M.Des. Interaction Design, RISD",
      linkedin: "https://linkedin.com/in/mariagonzalez",
      email: "maria.gonzalez@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 9,
      name: "Robert Taylor",
      role: "DevOps Engineer",
      department: "Engineering",
      bio: "Infrastructure specialist passionate about automation, CI/CD pipelines, and building robust development workflows.",
      expertise: ["Docker", "Kubernetes", "CI/CD", "Infrastructure Automation"],
      experience: "5+ years",
      education: "B.S. Computer Engineering, Georgia Tech",
      linkedin: "https://linkedin.com/in/roberttaylor",
      email: "robert.taylor@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    },
    {
      id: 10,
      name: "Amina Hassan",
      role: "Data Scientist",
      department: "Data Science",
      bio: "Data science professional specializing in predictive modeling, data visualization, and business intelligence solutions.",
      expertise: ["Python", "R", "SQL", "Data Visualization", "Statistical Modeling"],
      experience: "4+ years",
      education: "M.S. Data Science, University of Cape Town",
      linkedin: "https://linkedin.com/in/aminahassan",
      email: "amina.hassan@toosiitech.com",
      image: "/api/placeholder/300/300",
      featured: false
    }
  ]

  const departments = [
    { name: "Leadership", count: 3, color: "#667eea" },
    { name: "Technology", count: 4, color: "#764ba2" },
    { name: "Artificial Intelligence", count: 2, color: "#f093fb" },
    { name: "Web3 & Blockchain", count: 1, color: "#4facfe" },
    { name: "Security", count: 1, color: "#43e97b" },
    { name: "Design", count: 1, color: "#fa709a" }
  ]

  const stats = [
    { number: "25+", label: "Team Members" },
    { number: "15+", label: "Countries Represented" },
    { number: "12+", label: "Years Average Experience" },
    { number: "50+", label: "Certifications" }
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
                The brilliant minds behind TOOSII TECH. Our diverse team of experts is passionate about 
                pushing the boundaries of technology and delivering exceptional solutions for our clients.
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
                Our experienced leadership team guides TOOSII TECH with vision, expertise, and a commitment to innovation.
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
                      </div>
                      <div className="leader-contact">
                        <a href={member.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                        <a href={`mailto:${member.email}`} className="contact-link">
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
                        <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href={`mailto:${member.email}`} className="social-link">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
