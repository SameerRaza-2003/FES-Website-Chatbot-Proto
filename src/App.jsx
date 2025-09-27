import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import Recommendations from './pages/Recommendations'
import CourseFinder from './pages/CourseFinder'
import BookSession from './pages/BookSession'
import CountriesPage from './pages/CountriesPage'
import CountryDetailPage from './pages/CountryDetailPage'
import ServicesPage from './pages/ServicesPage'
import BranchesPage from './pages/BranchesPage'
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
          
          {/* New React-specific routes */}
          <Route path="/recommendations" element={<Recommendations onBackToHome={() => navigate('/')} />} />
          <Route path="/course-finder" element={<CourseFinder onBackToHome={() => navigate('/')} />} />
          
          {/* WordPress-compatible routes for SEO continuity */}
          <Route path="/contact-us" element={<BookSession onBackToHome={() => navigate('/')} />} />
          <Route path="/universities" element={<CountriesPage />} />
          <Route path="/universities/:slug" element={<CountryDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/our-branches" element={<BranchesPage />} />
          <Route path="/our-branches/:slug" element={<BranchesPage />} />
          
          {/* Maintain new routes as alternatives */}
          <Route path="/book-session" element={<BookSession onBackToHome={() => navigate('/')} />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/:slug" element={<CountryDetailPage />} />
          <Route path="/branches" element={<BranchesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}
