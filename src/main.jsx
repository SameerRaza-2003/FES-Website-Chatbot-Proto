import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import SessionForm from './sections/Book-Session/SessionForm'
import BookSession from './pages/BookSession'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
)
