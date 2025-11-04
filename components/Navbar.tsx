'use client'

import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <a href="#hero" className="brand-link" onClick={closeMenu}>
            <span className="brand-text">Portfolio</span>
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <a href="#contact" className="btn btn-outline" onClick={closeMenu}>Let&apos;s Talk</a>
          </div>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
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

