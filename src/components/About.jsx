import React, { useEffect, useRef } from 'react'

const About = () => {
  const statItemsRef = useRef([])

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
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student specializing in Artificial Intelligence, Machine Learning, 
              and Computer Vision at West Visayas State University. With a passion for building intelligent 
              systems and full-stack applications, I combine technical expertise with practical problem-solving 
              to create impactful solutions.
            </p>
            <p>
              My experience spans from leading AI-powered medical diagnostic platforms to developing 
              cross-platform mobile applications and managing organizational resources. I thrive in 
              collaborative environments and am always eager to tackle complex technical challenges 
              while maintaining clean, scalable code architecture.
            </p>
            <div className="education-info">
              <h3>Education</h3>
              <div className="education-item">
                <h4>BS Computer Science - Major in Artificial Intelligence</h4>
                <p className="education-institution">West Visayas State University</p>
                <p className="education-details">Expected Graduation: 2026</p>
                <p className="education-specialization">
                  <strong>Specialization:</strong> Artificial Intelligence, Machine Learning, and Computer Vision
                </p>
                <p className="education-courses">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Systems Architecture, 
                  Software Engineering, Linear Programming
                </p>
              </div>
            </div>
            <div className="about-stats">
              <div 
                className="stat-item"
                ref={(el) => (statItemsRef.current[0] = el)}
              >
                <div className="stat-number">2026</div>
                <div className="stat-label">Expected Graduation</div>
              </div>
              <div 
                className="stat-item"
                ref={(el) => (statItemsRef.current[1] = el)}
              >
                <div className="stat-number">Quality Assurance</div>
                <div className="stat-label">Specialization</div>
              </div>
              <div 
                className="stat-item"
                ref={(el) => (statItemsRef.current[2] = el)}
              >
                <div className="stat-number">DevSecOps</div>
                <div className="stat-label">Development Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
