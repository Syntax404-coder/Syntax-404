import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const target = document.querySelector(sectionId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">NICO<span className="dot">.</span></div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
          <li><a href="#skills" className="nav-link" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=domenictaganahan@gmail.com&su=Let's%20Talk" target="_blank" rel="noopener noreferrer" className="nav-cta">Let's Talk</a>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
