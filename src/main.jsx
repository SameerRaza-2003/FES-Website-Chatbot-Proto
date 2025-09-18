import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import Recommendations from './pages/Recommendations'
import Navbar from './sections/Home/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToRecommendations = () => {
    setCurrentPage('recommendations')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  return (
    <React.StrictMode>
      <div className="min-h-screen text-gray-900">
        <Navbar onGetStarted={navigateToRecommendations} onBackToHome={navigateToHome} currentPage={currentPage} />
        <main className="pt-20">
          {currentPage === 'home' ? (
            <HomePage onGetStarted={navigateToRecommendations} />
          ) : (
            <Recommendations onBackToHome={navigateToHome} />
          )}
        </main>
      </div>
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
