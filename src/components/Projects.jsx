import React, { useState } from 'react'

import orthovisionImg from './img/Orthovision.png'
import bentaPosImg from './img/Benta.png'
import automationImg from './img/SENTRY.png'
import cyborgImg from './img/CYB.jpg'

const Projects = () => {
  const projects = [
    {
      title: "OrthoVision",
      description: "A medical diagnostic web platform with real-time bone fracture detection using Computer Vision. Features YOLOv8 and ResNet models integrated with Next.js frontend and FastAPI backend.",
      tags: ["Next.js 14", "FastAPI", "YOLOv8", "ResNet", "Computer Vision"],
      sourceLink: "https://github.com/kurumizxc/OrthoVision",
      image: orthovisionImg
    },
    {
      title: "Benta POS System",
      description: "A cross-platform Point-of-Sale application built with Flutter. Handles complex sales transactions, inventory tracking, and state management with responsive UI across all device sizes.",
      tags: ["Flutter", "Dart", "State Management", "Mobile App"],
      sourceLink: "https://github.com/keanedalisay/cc206_benta",
      image: bentaPosImg
    },
    {
      title: "Automation CLI Tools",
      description: "Custom command-line tools and scripts for automating repetitive development tasks. Includes system monitoring scripts and workflow optimization utilities built with PowerShell and Bash.",
      tags: ["PowerShell", "Bash", "Automation", "CLI Tools"],
      sourceLink: "https://github.com/Syntax404-coder/SENTRY",
      image: automationImg
    },
    {
      title: "CYB:ORG Projects",
      description: "Student-led robotics and fabrication projects managed as Financial Officer. Contributed to organizational workflows, event logistics, and resource allocation for technical initiatives.",
      tags: ["Project Management", "Robotics", "Leadership"],
      sourceLink: "https://www.facebook.com/cybrobotics",
      image: cyborgImg
    }
  ]

  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Mobile App', 'Computer Vision', 'Automation']

  const getCategory = (tags) => {
    if (tags.includes('Computer Vision')) return 'Computer Vision'
    if (tags.includes('Flutter')) return 'Mobile App'
    if (tags.includes('Automation')) return 'Automation'
    return 'Other'
  }

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true
    return getCategory(project.tags) === filter
  })

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card fade-in-section"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
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
