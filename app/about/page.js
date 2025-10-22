import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'
import './about.css'

export default function About() {
  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="page-content">
          <div className="about-hero">
            <h1>About Toosii Tech</h1>
            <p className="hero-subtitle">
              Pioneering the future of digital transformation through innovative technology solutions
            </p>
          </div>

          <div className="mission-section">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create sustainable competitive advantages in the digital era.
              </p>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>AI & Machine Learning</h3>
              <p>Intelligent solutions that learn and adapt to your business needs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure for businesses of all sizes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized solutions delivering lightning-fast performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Cyber Security</h3>
              <p>Enterprise-grade security protecting your digital assets</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 & Blockchain</h3>
              <p>Next-generation decentralized technology solutions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Innovation</h3>
              <p>Cutting-edge mobile applications for modern businesses</p>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-number">01</div>
                <h4>Innovation First</h4>
                <p>We constantly push technological boundaries and explore uncharted territories to deliver groundbreaking solutions.</p>
              </div>
              <div className="value-item">
                <div className="value-number">02</div>
                <h4>Quality Excellence</h4>
                <p>Every line of code, every solution, and every interaction reflects our commitment to superior quality.</p>
              </div>
              <div className="value-item">
                <div className="value-number">03</div>
                <h4>Client Success</h4>
                <p>Your success is our success. We measure our achievements by the value we create for our clients.</p>
              </div>
              <div className="value-item">
                <div className="value-number">04</div>
                <h4>Collaborative Spirit</h4>
                <p>We believe in the power of teamwork and partnership to achieve extraordinary results.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Why Choose Toosii Tech?</h2>
            <div className="reasons-grid">
              <div className="reason-item">
                <h4>Expert Team</h4>
                <p>Our team comprises industry experts with decades of combined experience in technology and innovation.</p>
              </div>
              <div className="reason-item">
                <h4>Future-Proof Solutions</h4>
                <p>We build solutions that not only meet today's needs but also adapt to tomorrow's challenges.</p>
              </div>
              <div className="reason-item">
                <h4>Agile Approach</h4>
                <p>Flexible methodologies that ensure rapid delivery without compromising on quality.</p>
              </div>
              <div className="reason-item">
                <h4>Continuous Support</h4>
                <p>Comprehensive maintenance and support to ensure your technology grows with your business.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
