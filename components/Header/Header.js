'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // ... existing scroll and menu logic

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
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className={`nav-link ${pathname.startsWith('/services') ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/case-studies" className={`nav-link ${pathname === '/case-studies' ? 'active' : ''}`}>
                Case Studies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
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
          {/* ... mobile nav content */}
        </div>
      </div>
    </header>
  )
}
