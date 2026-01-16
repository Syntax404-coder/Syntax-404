import React from 'react'
import { LetterCollision } from './LetterExplosion/LetterCollision'


const Hero = () => {

  return (
    <section id="home" className="hero-minimal">

      <div className="minimal-content" style={{ padding: 0 }}>
        <LetterCollision />
      </div>

      <div className="minimal-footer">
        <div className="scroll-label">
          Scroll
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
            <path d="M1 1L11 11M11 11H1M11 11V1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
