import React, { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">

                {/* Left Navigation Group - Hidden on Mobile */}
                <div className="nav-left-group hidden-mobile">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#certificates" className="nav-link">Certificates</a>
                </div>

                {/* Center Logo */}
                <div className="nav-center-logo">
                    <a href="#home" style={{ textDecoration: 'none' }}>
                        <div className="nav-brand">NICO<span className="dot">.</span></div>
                    </a>
                </div>

                {/* Right Navigation Group - Hidden on Mobile */}
                <div className="nav-right-group hidden-mobile">
                    <div className="nav-right-links">
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                    <div className="nav-right-actions">
                        <ThemeToggle />
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=domenictaganahan@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                            Let's Talk
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Hamburger Menu Button - Visible on Mobile */}
                <button 
                    className={`hamburger ${isOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-links">
                        <a href="#home" onClick={toggleMenu}>Home</a>
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#certificates" onClick={toggleMenu}>Certificates</a>
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                        <a href="#projects" onClick={toggleMenu}>Projects</a>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                        <div className="mobile-actions">
                             <ThemeToggle />
                             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=domenictaganahan@gmail.com" target="_blank" rel="noopener noreferrer" className="mobile-contact-btn">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
