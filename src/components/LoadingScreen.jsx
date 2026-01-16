import React from 'react'

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#111827]">
            <div className="flex flex-col items-center gap-4">
                <div className="loading-spinner"></div>
                <p className="text-[#8B5CF6] font-semibold animate-pulse">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingScreen
