import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const LoadingScreen = ({ onComplete }) => {
    const [showLottie, setShowLottie] = useState(true)

    const handleLottieComplete = () => {
        console.log('Lottie completed')
        setShowLottie(false) // Instant visual removal
        if (onComplete) onComplete()
    }

    // Simple safety fallback
    useEffect(() => {
        const timer = setTimeout(() => {
            if (showLottie) {
                if (onComplete) onComplete()
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [showLottie, onComplete])

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#FFFFFF',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {showLottie && (
                <DotLottieReact
                    src="/trail.json"
                    loop={false}
                    autoplay
                    onComplete={handleLottieComplete}
                    style={{ width: '300px', height: '300px' }}
                />
            )}
        </div>
    )
}

export default LoadingScreen
