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
                        const radius = 34
                        const circumference = radius * 2 * Math.PI

                        return (
                            <div key={index} className="circular-skill-item">
                                <svg className="progress-ring" width="90" height="90">
                                    <circle
                                        className="progress-ring-bg"
                                        stroke="#E5E7EB"
                                        strokeWidth="6"
                                        fill="transparent"
                                        r={radius}
                                        cx="45"
                                        cy="45"
                                    />
                                    <circle
                                        className="progress-ring-circle"
                                        stroke="#2563EB"
                                        strokeWidth="6"
                                        fill="transparent"
                                        r={radius}
                                        cx="45"
                                        cy="45"
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

            {/* Commit QoL #2: Weekly Task Layout */}
            <section id="weekly-tasks" className="QoL-2-weekly-tasks">
                <div className="container">
                    <h2 className="section-title">Weekly Tasks</h2>
                    
                    <div className="QoL-2-status-board">
                        
                        {/* Main Area: Core Development */}
                        <article className="QoL-2-task-card QoL-2-area-main">
                            <div className="QoL-2-priority">01</div>
                            <h3>Core Development</h3>
                            <span className="QoL-2-status-label">Active</span>
                            <p>Focusing on Ruby data structures and Generative AI prompt engineering.</p>
                        </article>

                        {/* Side Area: Infrastructure Maintenance */}
                        <article className="QoL-2-task-card QoL-2-area-side">
                            <div className="QoL-2-sub-card">
                                <div className="QoL-2-priority">02</div>
                                <h3>Infra: K8s</h3>
                                <span className="QoL-2-status-label">Optimized</span>
                                <p>Kubernetes orchestration.</p>
                            </div>
                            <hr className="QoL-2-divider" />
                            <div className="QoL-2-sub-card">
                                <div className="QoL-2-priority">03</div>
                                <h3>Infra: Docker</h3>
                                <span className="QoL-2-status-label">Deployed</span>
                                <p>Docker container auditing.</p>
                            </div>
                        </article>

                        {/* Footer Area: Professional Development */}
                        <article className="QoL-2-task-card QoL-2-area-footer">
                            <div className="QoL-2-priority">04</div>
                            <h3>Professional Development</h3>
                            <span className="QoL-2-status-label">In Progress</span>
                            <p>Tracking progress on the 2026 AWS and Microsoft/LinkedIn AI badges.</p>
                        </article>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Skills
