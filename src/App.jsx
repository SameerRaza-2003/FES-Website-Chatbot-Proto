import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Recommendations from './pages/Recommendations'
import CourseFinder from './pages/CourseFinder'
import Navbar from './sections/Home/Navbar'

function AppContent() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-gray-900">
      <Navbar
        onGetStarted={() => navigate('/recommendations')}
        onBackToHome={() => navigate('/')}
        onCourseFinder={() => navigate('/course-finder')}
      />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage onGetStarted={() => navigate('/recommendations')} />} />
          <Route path="/recommendations" element={<Recommendations onBackToHome={() => navigate('/')} />} />
          <Route path="/course-finder" element={<CourseFinder onBackToHome={() => navigate('/')} />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
