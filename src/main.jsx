
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create root using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the app with StrictMode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
