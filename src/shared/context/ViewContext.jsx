import React, { createContext, useContext, useState, useCallback } from 'react'

const ViewContext = createContext()

export const VIEW_IDS = {
    HOME: 'home',
    ABOUT: 'about',
    CERTIFICATES: 'certificates',
    SKILLS: 'skills',
    PROJECTS: 'projects',
    CONTACT: 'contact',
}

export const useView = () => {
    const context = useContext(ViewContext)
    if (!context) {
        throw new Error('useView must be used within a ViewProvider')
    }
    return context
}

export const ViewProvider = ({ children }) => {
    const [activeView, setActiveView] = useState(VIEW_IDS.HOME)
    const [isLoading, setIsLoading] = useState(false)

    const changeView = useCallback((viewId) => {
        if (viewId === activeView) return

        setIsLoading(true)

        // Clear the old view, show loader, then inject new view
        setTimeout(() => {
            setActiveView(viewId)
            setIsLoading(false)
            window.scrollTo(0, 0)
        }, 500)
    }, [activeView])

    return (
        <ViewContext.Provider value={{ activeView, isLoading, changeView }}>
            {children}
        </ViewContext.Provider>
    )
}

export default ViewContext
