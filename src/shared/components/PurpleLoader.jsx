import React from 'react'
import { useView } from '../context/ViewContext'

const PurpleLoader = () => {
    const { isLoading } = useView()

    if (!isLoading) return null

    return (
        <div className="purple-loader-overlay">
            <svg className="purple-loader-spinner" viewBox="0 0 50 50">
                <circle
                    className="purple-loader-circle"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                />
            </svg>
        </div>
    )
}

export default PurpleLoader
