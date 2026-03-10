import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './shared/context/ThemeContext'
import { ViewProvider } from './shared/context/ViewContext'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
