import Navigation from './Navigation'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

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
