'use client'
import { useState } from 'react'
import Link from 'next/link'
import './navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="brand-link">
            <span className="brand-logo">TOOSII TECH</span>
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/case-studies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Case Studies
          </Link>
          <Link href="/careers" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
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
