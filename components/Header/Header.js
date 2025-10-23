'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Services', href: '/services', current: pathname.startsWith('/services') },
    { name: 'About', href: '/about', current: pathname === '/about' },
    { name: 'Team', href: '/team', current: pathname === '/team' },
    { name: 'Case Studies', href: '/case-studies', current: pathname === '/case-studies' },
    { name: 'Blog', href: '/blog', current: pathname === '/blog' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="logo-link" onClick={closeMenu}>
            <span className="logo-text">TOOSII TECH</span>
            <span className="logo-tagline">Innovating Tomorrow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  href={item.href}
                  className={`nav-link ${item.current ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="header-actions">
          <Link href="/contact" className="cta-button primary">
            Get Started
          </Link>
          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon">
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <div className="logo">
                <Link href="/" className="logo-link" onClick={closeMenu}>
                  <span className="logo-text">TOOSII TECH</span>
                </Link>
              </div>
              <button 
                className="close-menu-button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span className="close-icon">×</span>
              </button>
            </div>
            
            <nav className="mobile-nav-menu">
              <ul className="mobile-nav-list">
                {navigation.map((item) => (
                  <li key={item.name} className="mobile-nav-item">
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${item.current ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-nav-footer">
              <Link 
                href="/contact" 
                className="cta-button primary full-width"
                onClick={closeMenu}
              >
                Start Your Project
              </Link>
              <div className="mobile-contact-info">
                <p>Ready to transform your business?</p>
                <a href="tel:+254748340864" className="contact-link">
                  +254 748 340 864
                </a>
                <a href="mailto:toosiitechcompany@gmail.com" className="contact-link">
                  toosiitechcompany@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Backdrop */}
        {isMenuOpen && (
          <div 
            className="mobile-nav-backdrop" 
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  )
}
