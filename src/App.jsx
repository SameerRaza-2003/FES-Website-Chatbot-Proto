import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Recommendations from './pages/Recommendations'
import CourseFinder from './pages/CourseFinder'
import BookSession from './pages/BookSession'
import CountriesPage from './pages/CountriesPage'
import CountryDetailPage from './pages/CountryDetailPage'
import ServicesPage from './pages/ServicesPage'
import Navbar from './sections/Navbar/Navbar'

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
          <Route path="/book-session" element={<BookSession onBackToHome={() => navigate('/')} />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/:slug" element={<CountryDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
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
