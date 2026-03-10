import React, { lazy, Suspense } from 'react'
import { useView, VIEW_IDS } from './shared/context/ViewContext'

// Eager-loaded components
import Navbar from './shared/components/Navbar/Navbar'
import CustomCursor from './shared/components/CustomCursor'
import PurpleLoader from './shared/components/PurpleLoader'
import Hero from './features/hero/Hero'

// Lazy-loaded views
const About = lazy(() => import('./features/about/About'))
const Certificates = lazy(() => import('./features/certificates/Certificates'))
const Skills = lazy(() => import('./features/skills/Skills'))
const Projects = lazy(() => import('./features/projects/Projects'))
const Contact = lazy(() => import('./features/contact/Contact'))

// View Switcher — maps activeView ID to the correct component
const ViewSwitcher = () => {
    const { activeView, isLoading } = useView()

    if (isLoading) return null

    const viewMap = {
        [VIEW_IDS.HOME]: (
            <>
                <Hero />
                <About />
            </>
        ),
        [VIEW_IDS.ABOUT]: <About />,
        [VIEW_IDS.CERTIFICATES]: <Certificates />,
        [VIEW_IDS.SKILLS]: <Skills />,
        [VIEW_IDS.PROJECTS]: <Projects />,
        [VIEW_IDS.CONTACT]: <Contact />,
    }

    const CurrentView = viewMap[activeView] || (
        <>
            <Hero />
            <About />
        </>
    )

    return (
        <Suspense fallback={null}>
            <div className="view-enter" key={activeView}>
                {CurrentView}
            </div>
        </Suspense>
    )
}

function App() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <PurpleLoader />
            <div className="view-container">
                <ViewSwitcher />
            </div>
        </>
    )
}

export default App
