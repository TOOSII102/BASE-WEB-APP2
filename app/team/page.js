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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
      featured: false
    }
  ]

  const stats = [
    { number: "4", label: "Core Team Members" },
    { number: "8+", label: "Years Average Experience" },
    { number: "15+", label: "Certifications" },
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
                The core team behind TOOSII TECH. Our dedicated experts deliver exceptional technology solutions with the emails you know and trust.
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
              <h2 className="section-title">Core Team</h2>
              <p className="section-subtitle">
                Meet the leadership team that drives TOOSII TECH's vision and innovation.
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
              <h2 className="section-title">Our Team Members</h2>
              <p className="section-subtitle">
                Meet all the talented professionals who make TOOSII TECH a leader in technology innovation.
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
                <h2>Join Our Team</h2>
                <p>
                  Are you passionate about technology and innovation? We're always looking for talented 
                  individuals to join our team.
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
