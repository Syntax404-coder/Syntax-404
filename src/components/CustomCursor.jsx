import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        const handleHoverStart = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true)
            }
        }

        const handleHoverEnd = () => {
            setIsHovering(false)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleHoverStart)
        window.addEventListener('mouseout', handleHoverEnd)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleHoverStart)
            window.removeEventListener('mouseout', handleHoverEnd)
        }
    }, [])

    return (
        <>
            <div
                className="cursor-dot"
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`
                }}
            />
            <div
                className="cursor-outline"
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    width: isHovering ? '60px' : '40px',
                    height: isHovering ? '60px' : '40px',
                    backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent'
                }}
            />
        </>
    )
}

export default CustomCursor
