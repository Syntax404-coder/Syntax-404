import React, { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsSectionRef = useRef(null)

  const skills = [
    {
      title: "Programming Languages",
      items: ["C++", "Rust", "Python (Pandas/NumPy)", "JavaScript/TypeScript", "Dart"]
    },
    {
      title: "Web & Mobile Development",
      items: ["Next.js", "React", "Node.js", "Flutter", "HTML/CSS"]
    },
    {
      title: "AI & Machine Learning",
      items: ["YOLOv8", "ResNet", "PyTorch", "Computer Vision"]
    },
    {
      title: "DevOps & Automation",
      items: ["PowerShell", "Bash Scripting", "Docker", "Git/GitHub"]
    },
    {
      title: "Soft Skills",
      items: ["Technical Communication", "Agile Collaboration", "Resource Management", "Problem Solving"]
    }
  ]

  const skillBars = [
    { name: "Python / AI/ML", percentage: 90 },
    { name: "JavaScript/TypeScript", percentage: 88 },
    { name: "Next.js / React", percentage: 85 },
    { name: "Flutter / Dart", percentage: 82 },
    { name: "Computer Vision", percentage: 80 }
  ]

  const skillCardsRef = useRef([])

  useEffect(() => {
    // Animate skill cards
    const cardObserver = new IntersectionObserver(
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

    skillCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        cardObserver.observe(card)
      }
    })

    // Animate skill bars
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress')
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width')
              bar.style.width = width + '%'
            })
            barObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (skillsSectionRef.current) {
      barObserver.observe(skillsSectionRef.current)
    }

    return () => {
      skillCardsRef.current.forEach((card) => {
        if (card) cardObserver.unobserve(card)
      })
      if (skillsSectionRef.current) {
        barObserver.unobserve(skillsSectionRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Competencies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              ref={(el) => (skillCardsRef.current[index] = el)}
            >
              <div className="skill-icon"></div>
              <h3>{skill.title}</h3>
              <ul className="skill-items">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="skills-bars" ref={skillsSectionRef}>
          {skillBars.map((bar, index) => (
            <div key={index} className="skill-bar-item">
              <div className="skill-bar-header">
                <span>{bar.name}</span>
                <span>{bar.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width={bar.percentage}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
