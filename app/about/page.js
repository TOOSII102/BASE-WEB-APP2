import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'

export default function About() {
  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="page-content">
          <h1>About Us</h1>
          <p>We are passionate about bringing you the best music experience.</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎵 High Quality</h3>
              <p>Crystal clear audio quality</p>
            </div>
            <div className="feature-card">
              <h3>🎨 Beautiful Design</h3>
              <p>Stunning visuals and animations</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Fast & Responsive</h3>
              <p>Lightning fast performance</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
