import React, { useState, useEffect } from 'react'
import oracleCert from '../../assets/oracle_1.svg.png'

const Certificates = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const certificates = [
        {
            title: "Oracle Data Platform Foundations Associate",
            issuer: "Oracle",
            img: oracleCert,
            link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=36DBF566706C00E01FEE32A29A4ED68668785AB43FE700A1CF4014FA0BAF5634"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % certificates.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length)
            } else if (e.key === 'ArrowRight') {
                setCurrentSlide((prev) => (prev + 1) % certificates.length)
            }
        }

        if (certificates.length > 1) {
            window.addEventListener('keydown', handleKeyPress)
        }
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [certificates.length])

    return (
        <section id="certificates" className="certificates-section">
            <div className="container certificates-container">
                <h2 className="section-title">Certificates</h2>
                <div className="certificates-carousel">
                    <div
                        className="carousel-wrapper"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="carousel-slide"
                            >
                                <div className="certificate-item glass-panel">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-link"
                                        title="View official certification"
                                    >
                                        <div className="certificate-img-container">
                                            <img src={cert.img} alt={cert.title} className="certificate-img" />
                                        </div>
                                    </a>
                                    <div className="certificate-header">
                                        <h3>{cert.title}</h3>
                                        <span className="certificate-issuer">{cert.issuer}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="carousel-controls">
                        <button
                            className="carousel-btn prev-btn"
                            onClick={prevSlide}
                            aria-label="Previous certificate"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5" />
                                <path d="M12 19l-7-7 7-7" />
                            </svg>
                            <span className="btn-text">PREV</span>
                        </button>

                        <button
                            className="carousel-btn next-btn"
                            onClick={nextSlide}
                            aria-label="Next certificate"
                        >
                            <span className="btn-text">NEXT</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates
