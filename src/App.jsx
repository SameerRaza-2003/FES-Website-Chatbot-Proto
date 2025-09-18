import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import Recommendations from './pages/Recommendations'
import CourseFinder from './pages/CourseFinder'
import Navbar from './sections/Home/Navbar'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateToHome = () => setCurrentPage('home')
  const navigateToRecommendations = () => setCurrentPage('recommendations')
  const navigateToCourseFinder = () => setCurrentPage('course-finder')

  return (
    <div className="min-h-screen text-gray-900">
      <Navbar
        onGetStarted={navigateToRecommendations}
        onBackToHome={navigateToHome}
        onCourseFinder={navigateToCourseFinder}
        currentPage={currentPage}
      />
      <main className="pt-20">
        {currentPage === 'home' && (
          <HomePage onGetStarted={navigateToRecommendations} />
        )}
        {currentPage === 'recommendations' && (
          <Recommendations onBackToHome={navigateToHome} />
        )}
        {currentPage === 'course-finder' && (
          <CourseFinder onBackToHome={navigateToHome} />
        )}
      </main>
    </div>
  )
}
