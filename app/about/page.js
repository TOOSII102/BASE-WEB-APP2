import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="hero-section">
        <h1>Welcome to Music Flow</h1>
        <p>Experience music like never before</p>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </Layout>
  )
}
