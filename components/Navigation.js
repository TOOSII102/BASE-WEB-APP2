'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './navigation.css'

export default function Navigation() {
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

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActiveLink = (path) => {
    return pathname === path
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="brand-link" onClick={closeMenu}>
            <span className="brand-logo">TOOSII TECH</span>
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            href="/" 
            className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`nav-link ${isActiveLink('/services') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            href="/case-studies" 
            className={`nav-link ${isActiveLink('/case-studies') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link 
            href="/team" 
            className={`nav-link ${isActiveLink('/team') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Our Team
          </Link>
          <Link 
            href="/careers" 
            className={`nav-link ${isActiveLink('/careers') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Careers
          </Link>
          <Link 
            href="/blog" 
            className={`nav-link ${isActiveLink('/blog') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          
          {/* Mobile CTA Button */}
          <div className="nav-actions mobile-only">
            <Link href="/contact" className="cta-button" onClick={closeMenu}>
              Get Started
            </Link>
          </div>
        </div>

        <div className="nav-actions desktop-only">
          <Link href="/contact" className="cta-button">
            Get Started
          </Link>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
