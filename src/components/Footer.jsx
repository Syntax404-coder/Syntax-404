import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Domenic Taganahan</h3>
            <p>Aspiring DevSecOps Engineer | Full Stack Developer | AI Enthusiast</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social & Connect</h4>
            <ul>
              <li><a href="https://github.com/Syntax404-coder" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#contact">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Built With</h4>
            <p>React • Vite • JavaScript • HTML5 • CSS3</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Domenic Taganahan. All rights reserved.</p>
          <p className="footer-tagline">Fortune favors the bold.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
