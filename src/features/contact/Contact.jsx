import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="contact-new">
            <div className="container">
                <h2 className="contact-title">GET IN TOUCH</h2>
                <p className="contact-subtitle">
                    Hi, I am glad you made it here to know more about me. I'm a passionate developer
                    and tech enthusiast. Feel free to reach out through any of the channels below.
                </p>
                <div className="contact-cards">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=domenictaganahan@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
                        <div className="contact-card-icon email-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <h3>Email</h3>
                        <p>domenictaganahan@gmail.com</p>
                    </a>
                    <div className="contact-card">
                        <div className="contact-card-icon address-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </div>
                        <h3>Address</h3>
                        <p>La Paz, Iloilo City</p>
                    </div>
                    <div className="contact-card">
                        <div className="contact-card-icon call-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </div>
                        <h3>Call</h3>
                        <p>+639696264837</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
