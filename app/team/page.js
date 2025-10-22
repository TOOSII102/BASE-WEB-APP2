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
      bio: "Visionary leader and founder of TOOSII TECH with extensive experience in technology innovation and digital transformation strategies.",
      expertise: ["Strategic Planning", "Business Development", "Technology Innovation", "Digital Transformation"],
      experience: "12+ years",
      education: "M.Sc. Computer Science & Business Administration",
      email: "toosiitechcompany@gmail.com",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face", // AI CEO image
      featured: true
    },
    {
      id: 2,
      name: "Casper Tech",
      role: "Chief Technology Officer",
      department: "Technology",
      bio: "Technology expert leading our technical vision and innovation. Passionate about building scalable solutions and cutting-edge technologies.",
      expertise: ["AI/ML", "Cloud Architecture", "System Design", "Blockchain", "DevOps"],
      experience: "10+ years",
      education: "B.Sc. Software Engineering, Advanced Cloud Certifications",
      email: "caspertechke@gmail.com",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop&crop=face", // Tech leader image
      featured: true
    },
    {
      id: 3,
      name: "Jamal",
      role: "Head of Cybersecurity",
      department: "Security",
      bio: "Cybersecurity specialist with deep expertise in threat intelligence, risk management, and secure system architecture.",
      expertise: ["Threat Intelligence", "Risk Assessment", "Security Architecture", "Network Security", "Compliance"],
      experience: "8+ years",
      education: "CISSP, CEH Certified",
      email: "jamalikicom@gmail.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face", // Cybersecurity expert image
      featured: true
    },
    {
      id: 4,
      name: "Josh",
      role: "Lead Full Stack Developer",
      department: "Engineering",
      bio: "Full stack developer specializing in creating robust, scalable web applications with modern technologies.",
      expertise: ["React", "Node.js", "Python", "MongoDB", "AWS", "Next.js"],
      experience: "6+ years",
      education: "B.Sc. Computer Science",
      email: "jeshi5005@gmail.com",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop&crop=face", // Developer image
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
      email: "toosiitechcompany@gmail.com",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop&crop=face", // AI researcher image
      featured: false
    },
    {
      id: 6,
      name: "Toosii Tech",
      role: "Blockchain Architect",
      department: "Web3 & Blockchain",
      bio: "Blockchain expert specializing in decentralized systems, smart contracts, and Web3 application development for modern businesses.",
      expertise: ["Smart Contracts", "Ethereum", "Solidity", "DeFi", "Web3 Development", "NFT Platforms"],
      experience: "5+ years",
      education: "M.Sc. Cryptography & Blockchain",
      email: "toosiitechcompany@gmail.com",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop&crop=face", // Blockchain expert image
      featured: false
    }
  ]

  const stats = [
    { number: "6", label: "Team Members" },
    { number: "8+", label: "Years Average Experience" },
    { number: "20+", label: "Certifications" },
    { number: "50+", label: "Projects Completed" }
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
                The elite team behind TOOSII TECH. Our cybersecurity and AI experts deliver cutting-edge technology solutions.
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
                Our experienced leadership team drives TOOSII TECH's vision with expertise in cybersecurity and AI innovation.
              </p>
              <div className="leadership-grid">
                {teamMembers.filter(member => member.featured).map(member => (
                  <div key={member.id} className="leader-card">
                    <div className="leader-image">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="team-photo"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="image-placeholder">
                        {member.name.split(' ').map(name => name[0]).join('')}
                      </div>
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
                        <a href={`mailto:${member.email}`} className="contact-link email-button">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          Send Email
                        </a>
                      </div>
                    </div>
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
                Meet the talented professionals who make TOOSII TECH a leader in cybersecurity and AI innovation.
              </p>
              <div className="team-grid">
                {teamMembers.filter(member => !member.featured).map(member => (
                  <div key={member.id} className="team-member-card">
                    <div className="member-image">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="team-photo"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="image-placeholder">
                        {member.name.split(' ').map(name => name[0]).join('')}
                      </div>
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
                        <div className="member-email">
                          <strong>Email:</strong> {member.email}
                        </div>
                        <a href={`mailto:${member.email}`} className="email-button-small">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
                <h2>Join Our Elite Team</h2>
                <p>
                  Are you passionate about cybersecurity, AI, and cutting-edge technology? 
                  We're always looking for talented individuals to join our elite team.
                </p>
                <div className="cta-buttons">
                  <a href="/careers" className="cta-button primary">
                    View Open Positions
                  </a>
                  <a href="/contact" className="cta-button secondary">
                    Contact Us
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
