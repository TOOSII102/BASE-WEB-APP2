'use client'
import Navigation from './Navigation'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'
import MusicPlayer from './MusicPlayer'

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatedBackground />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {children}
      </main>
      <MusicPlayer />
      <Footer />
    </div>
  )
}
