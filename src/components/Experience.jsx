import React, { useState, useEffect } from 'react'

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const experiences = [
    {
      title: "Quality Assurance Tester & Full Stack Developer",
      company: "OrthoVision (Thesis Project)",
      details: [
        "Architected a medical diagnostic web platform using Next.js 14 (Frontend) and FastAPI (Backend)",
        "Integrated Computer Vision models (YOLOv8 and ResNet) to perform real-time bone fracture detection and localization",
        "Designed a type-safe database schema and managed API integrations for seamless data flow"
      ]
    },
    {
      title: "Financial Officer",
      company: "Cyb Robotics Organization (CYB:ORG)",
      location: "West Visayas State University",
      details: [
        "Managed financial resources and budget allocation for student-led robotics and fabrication projects",
        "Collaborated with the executive committee to streamline organizational workflows and event logistics",
        "Demonstrated leadership and accountability in a technical student organization environment"
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Benta POS System",
      details: [
        "Developed a cross-platform Point-of-Sale (POS) application using Flutter and Dart",
        "Implemented complex state management logic to handle sales transactions and inventory tracking",
        "Conducted rigorous UI/Widget testing to ensure responsiveness across different device sizes"
      ]
    },
    {
      title: "Automation & Scripting Enthusiast",
      company: "Personal Projects",
      details: [
        "Designed and maintained custom CLI tools using PowerShell and Bash to automate repetitive development tasks",
        "Created system monitoring scripts to optimize workflow efficiency and reduce manual configuration time"
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % experiences.length)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [experiences.length])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-carousel">
          <div
            className="carousel-wrapper"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="carousel-slide"
              >
                <div className="experience-item">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="experience-company">{exp.company}</span>
                    {exp.location && <span className="experience-location">{exp.location}</span>}
                  </div>
                  <ul className="experience-details">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <div className="carousel-nav">
              <div className="nav-label">PREV</div>
              <button
                className="nav-arrow nav-arrow-prev"
                onClick={prevSlide}
                aria-label="Previous experience"
              >
                ←
              </button>
            </div>
            <div className="carousel-nav">
              <div className="nav-label">NEXT</div>
              <button
                className="nav-arrow nav-arrow-next"
                onClick={nextSlide}
                aria-label="Next experience"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
