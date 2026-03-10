import React, { useEffect, useRef, useState } from 'react'
import profilePhoto from '../../assets/D.T.png'
import cvPDF from '../../assets/Taganahan_CV.pdf'
import wvsuLogo from '../../components/img/wvsu_logo.png'

// Custom hook for typing animation effect
const useTypingEffect = (text, speed = 50, startDelay = 0) => {
    const [displayedText, setDisplayedText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (!text) return

        const startTimeout = setTimeout(() => {
            let currentIndex = 0
            setDisplayedText('')

            const typingInterval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex))
                    currentIndex++
                } else {
                    clearInterval(typingInterval)
                    setIsComplete(true)
                }
            }, speed)

            return () => clearInterval(typingInterval)
        }, startDelay)

        return () => clearTimeout(startTimeout)
    }, [text, speed, startDelay])

    return { displayedText, isComplete }
}

const About = () => {
    const statItemsRef = useRef([])
    const junkieText = "JUNKIE"
    const junkieTyping = useTypingEffect(junkieText, 100, 500)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1'
                        entry.target.style.transform = 'translateY(0)'
                    }
                })
            },
            { threshold: 0.1 }
        )

        statItemsRef.current.forEach((item) => {
            if (item) {
                item.style.opacity = '0'
                item.style.transform = 'translateY(30px)'
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
                observer.observe(item)
            }
        })

        return () => {
            statItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item)
            })
        }
    }, [])

    return (
        <section id="about" className="about" style={{ paddingTop: '60px', paddingBottom: '4rem' }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-bento-grid">
                    
                    {/* HERO MODULE (Spans 8) */}
                    <article className="bento-module bento-hero">
                        <figure className="bento-profile-wrapper">
                            <img src={profilePhoto} alt="Domenic Taganahan" className="profile-photo blob-morph" />
                        </figure>

                        <div className="bento-identity">
                            <div className="hero-greeting">Hi, I'm Domenic Taganahan!</div>
                            <h1 className="hero-title compact">
                                <span className="hero-tech">THE TECH </span>
                                <span className="hero-junkie glitch-text" data-text="JUNKIE">
                                    {junkieTyping.displayedText}
                                    {!junkieTyping.isComplete && <span className="animate-pulse">|</span>}
                                </span>
                            </h1>
                            <p className="hero-description compact">
                                Turning caffeine into code and wild ideas into digital reality. I build things that live on the web and sometimes breaks them too.
                            </p>

                            <div className="hero-buttons compact">
                                <a href="#projects" className="btn btn-projects">PROJECTS &lt;/&gt;</a>
                                <a href={cvPDF} download="Domenic_Taganahan_CV.pdf" className="btn btn-hire">DOWNLOAD CV</a>
                            </div>

                            <div className="hero-socials compact" style={{ marginTop: '1.5rem' }}>
                                <a href="https://www.facebook.com/blocononico/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/Syntax404-coder" target="_blank" rel="noopener noreferrer" title="GitHub">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/domenic-taganahan-46310a238/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.637h3.554v1.364c.429-.66 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.51zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.712 0-.951.77-1.71 1.954-1.71 1.184 0 1.915.759 1.915 1.71 0 .951-.771 1.712-1.954 1.712zm1.595 11.596H3.742V9.816h3.19v10.635zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* STATS MODULE (Spans 4) */}
                    <article className="bento-module bento-stat-hero">
                        <div className="bento-stat-content">
                            <h3 className="bento-stat-number">2026</h3>
                            <p className="bento-stat-label">Expected Graduation</p>
                        </div>
                        <div className="bento-stat-content">
                            <h3 className="bento-stat-number">486+</h3>
                            <p className="bento-stat-label">Internship Hours Ready</p>
                        </div>
                    </article>

                    {/* EDITORIAL MODULE (Spans 8) */}
                    <article className="bento-module bento-editorial">
                        <p className="bento-editorial-intro">
                            <strong>I am Domenic Taganahan</strong>, currently a senior computer science student at West Visayas State University majoring in Artificial Intelligence. I describe myself as a 'quality-first' developer who specializes in using automation to make software more reliable.
                        </p>
                        <p>
                            In my recent projects, I've moved beyond just writing code to actually building the tools that test and manage it. I recently developed custom CLI tools using PowerShell, and I have also been experimenting with Bash with my dual-boot Linux to automate repetitive technical workflows, which I'd say gave me a sharp eye for identifying edge cases where software breaks.
                        </p>
                        <p>
                            My expertise spans from leading AI-powered medical diagnostic platforms to developing cross-platform mobile applications and managing organizational resources. I thrive in collaborative environments and am always eager to tackle complex technical challenges while maintaining clean, scalable code architecture.
                        </p>
                    </article>

                    {/* EDUCATION MODULE (Spans 4) */}
                    <article className="bento-module bento-education">
                        <div className="bento-education-content">
                            <div className="bento-education-header">
                                <img src={wvsuLogo} alt="WVSU Logo" className="bento-education-logo" />
                                <div>
                                    <h3 className="bento-education-title">Education</h3>
                                    <h4 className="bento-education-degree">BS Computer Science - Major in Artificial Intelligence</h4>
                                    <p className="bento-education-school">West Visayas State University</p>
                                </div>
                            </div>

                            
                            <div className="bento-education-details">
                                <p><strong>Specialization:</strong><br/>Artificial Intelligence, Machine Learning, and Computer Vision</p>
                                <p><strong>Relevant Coursework:</strong><br/>Data Structures & Algorithms, Systems Architecture, Software Engineering, Linear Programming</p>
                            </div>
                        </div>
                    </article>

                    {/* SKILL HIGHLIGHTS (Span 6 + Span 6, or nested grid) */}
                    <article className="bento-module bento-highlight" ref={(el) => (statItemsRef.current[1] = el)}>
                        <h4 className="bento-highlight-title">Specialization</h4>
                        <p className="bento-highlight-desc">Full-stack Development</p>
                    </article>

                    <article className="bento-module bento-highlight" ref={(el) => (statItemsRef.current[2] = el)}>
                        <h4 className="bento-highlight-title">Development Focus</h4>
                        <p className="bento-highlight-desc">DevSecOps</p>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default About
