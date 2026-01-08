import React, { useEffect, useRef } from 'react'

const Projects = () => {
  const projects = [
    {
      title: "OrthoVision",
      description: "A medical diagnostic web platform with real-time bone fracture detection using Computer Vision. Features YOLOv8 and ResNet models integrated with Next.js frontend and FastAPI backend.",
      tags: ["Next.js 14", "FastAPI", "YOLOv8", "ResNet", "Computer Vision"],
      sourceLink: "https://github.com/kurumizxc/OrthoVision"
    },
    {
      title: "Benta POS System",
      description: "A cross-platform Point-of-Sale application built with Flutter. Handles complex sales transactions, inventory tracking, and state management with responsive UI across all device sizes.",
      tags: ["Flutter", "Dart", "State Management", "Mobile App"],
      sourceLink: "https://github.com/keanedalisay/cc206_benta"
    },
    {
      title: "Automation CLI Tools",
      description: "Custom command-line tools and scripts for automating repetitive development tasks. Includes system monitoring scripts and workflow optimization utilities built with PowerShell and Bash.",
      tags: ["PowerShell", "Bash", "Automation", "CLI Tools"],
      sourceLink: "https://github.com/Syntax404-coder/SENTRY"
    },
    {
      title: "CYB:ORG Projects",
      description: "Student-led robotics and fabrication projects managed as Financial Officer. Contributed to organizational workflows, event logistics, and resource allocation for technical initiatives.",
      tags: ["Project Management", "Robotics", "Leadership"],
      sourceLink: "https://www.facebook.com/cybrobotics"
    }
  ]

  const projectCardsRef = useRef([])

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

    projectCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        observer.observe(card)
      }
    })

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              ref={(el) => (projectCardsRef.current[index] = el)}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
