'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { 
      href: "https://toosii-tech-company-3npa.vercel.app/", 
      label: "Portal",
      external: true 
    },
  ]

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const NavLink = ({ item }) => {
    const isActive = isActiveLink(item.href)
    
    const baseStyles = {
      color: isActive ? '#ffffff' : '#60a5fa',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'all 0.2s',
      padding: '0.5rem 0.75rem',
      borderRadius: '6px',
      background: isActive ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
      border: isActive ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid transparent'
    }

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={baseStyles}
          onMouseEnter={(e) => !isActive && (e.target.style.color = '#93c5fd')}
          onMouseLeave={(e) => !isActive && (e.target.style.color = '#60a5fa')}
        >
          {item.label} ↗
        </a>
      )
    }

    return (
      <Link
        href={item.href}
        style={baseStyles}
        onMouseEnter={(e) => !isActive && (e.target.style.color = '#93c5fd')}
        onMouseLeave={(e) => !isActive && (e.target.style.color = '#60a5fa')}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <>
      <header style={{
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #334155',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              T
            </div>
            TOOSII TECH
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            {navigationItems.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid #334155',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'none',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.98)',
            borderTop: '1px solid #334155',
            padding: '1rem 2rem',
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigationItems.map((item) => (
                <div key={item.label} onClick={() => setIsMobileMenuOpen(false)}>
                  <NavLink item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header
