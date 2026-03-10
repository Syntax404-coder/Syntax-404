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
        { name: "System Architecture", percentage: 30 },
        { name: "Front End", percentage: 25 },
        { name: "Backend", percentage: 22 },
        { name: "Mobile Dev", percentage: 15 },
        { name: "AI/ML", percentage: 8 }
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

        // Animate circular progress bars
        const barObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const circles = entry.target.querySelectorAll('.progress-ring-circle')
                        circles.forEach((circle) => {
                            const percentage = parseFloat(circle.getAttribute('data-percentage'))
                            const radius = circle.r.baseVal.value
                            const circumference = radius * 2 * Math.PI
                            const offset = circumference - (percentage / 100) * circumference
                            circle.style.strokeDashoffset = offset
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
                <div className="daily-tasks-section">
                    <h3 className="daily-tasks-title">What My Weekly Tasks Look Like</h3>
                </div>
                <div className="skills-circular-bars" ref={skillsSectionRef}>
                    {skillBars.map((bar, index) => {
                        const radius = 45
                        const circumference = radius * 2 * Math.PI

                        return (
                            <div key={index} className="circular-skill-item">
                                <svg className="progress-ring" width="120" height="120">
                                    <circle
                                        className="progress-ring-bg"
                                        stroke="#E5E7EB"
                                        strokeWidth="8"
                                        fill="transparent"
                                        r={radius}
                                        cx="60"
                                        cy="60"
                                    />
                                    <circle
                                        className="progress-ring-circle"
                                        stroke="#2563EB"
                                        strokeWidth="8"
                                        fill="transparent"
                                        r={radius}
                                        cx="60"
                                        cy="60"
                                        data-percentage={bar.percentage}
                                        style={{
                                            strokeDasharray: `${circumference} ${circumference}`,
                                            strokeDashoffset: circumference,
                                            transition: 'stroke-dashoffset 1.5s ease-in-out'
                                        }}
                                    />
                                </svg>
                                <div className="circular-skill-info">
                                    <span className="circular-skill-percentage">{bar.percentage}%</span>
                                    <span className="circular-skill-name">{bar.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills
