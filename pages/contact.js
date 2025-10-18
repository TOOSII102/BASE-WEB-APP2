import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <AnimatedBackground />
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
