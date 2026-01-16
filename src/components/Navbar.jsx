import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="minimal-header nav-container">

        {/* Brand Group */}
        <div className="brand-area">
          <a href="#home" style={{ textDecoration: 'none' }}>
            <div className="nav-brand">NICO<span className="dot">.</span></div>
          </a>
        </div>

        <div className="nav-center-group" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right Actions Group */}
        <div className="contact-area" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ThemeToggle />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=domenictaganahan@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            Let's Talk
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
