import React, { useState } from 'react'
import ThemeToggle from '../ThemeToggle'
import { useView, VIEW_IDS } from '../../context/ViewContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { activeView, changeView } = useView()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleNav = (viewId) => {
        changeView(viewId)
        setIsOpen(false)
    }

    const navItems = [
        { id: VIEW_IDS.HOME, label: 'Home' },
        { id: VIEW_IDS.ABOUT, label: 'About' },
        { id: VIEW_IDS.CERTIFICATES, label: 'Certificates' },
        { id: VIEW_IDS.SKILLS, label: 'Skills' },
        { id: VIEW_IDS.PROJECTS, label: 'Projects' },
        { id: VIEW_IDS.CONTACT, label: 'Contact' },
    ]

    const leftNav = navItems.slice(0, 3)
    const rightNav = navItems.slice(3)

    return (
        <nav className="navbar scrolled">
            <div className="nav-container">

                {/* Left Navigation Group - Hidden on Mobile */}
                <div className="nav-left-group hidden-mobile">
                    {leftNav.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`nav-link ${activeView === item.id ? 'active' : ''}`}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Center Logo */}
                <div className="nav-center-logo">
                    <button
                        onClick={() => handleNav(VIEW_IDS.HOME)}
                        style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <div className="nav-brand">NICO<span className="dot">.</span></div>
                    </button>
                </div>

                {/* Right Navigation Group - Hidden on Mobile */}
                <div className="nav-right-group hidden-mobile">
                    <div className="nav-right-links">
                        {rightNav.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNav(item.id)}
                                className={`nav-link ${activeView === item.id ? 'active' : ''}`}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                            >
                                {item.label}
                            </button>
                        ))}
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
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNav(item.id)}
                                className={activeView === item.id ? 'active' : ''}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                            >
                                {item.label}
                            </button>
                        ))}
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
