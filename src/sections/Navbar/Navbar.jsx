import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AIAssistantLink, BookSessionLink, CourseFinderLink } from '../../components/ActionButtons'
import AnimatedLogo from '../../components/AnimatedLogo'
import { countries } from '../../data/countries'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [countriesDropdown, setCountriesDropdown] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'

  const showDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setCountriesDropdown(true)
  }

  const hideDropdown = () => {
    setDropdownTimeout(setTimeout(() => {
      setCountriesDropdown(false)
    }, 150)) // 150ms delay
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  return (
    <nav className="fixed w-full z-40 top-0 left-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="relative flex items-center"  >
            <AnimatedLogo />

          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className="hover:text-fes-deep text-center px-1 py-1">Home</Link>
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <Link 
                to="/countries" 
                className="hover:text-fes-deep text-center px-3 py-2 flex items-center gap-1 -mx-2"
              >
                Countries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {countriesDropdown && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Study Destinations</h3>
                    <p className="text-sm text-gray-600">Choose your perfect country</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {countries.map((country) => (
                      <Link
                        key={country.slug}
                        to={`/countries/${country.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setCountriesDropdown(false)}
                      >
                        <img 
                          src={country.flag} 
                          alt={`${country.name} flag`} 
                          className="w-6 h-4 object-cover rounded-sm"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{country.name}</div>
                          <div className="text-sm text-gray-600">{country.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <Link
                      to="/countries"
                      className="text-fes-blue hover:text-fes-deep font-medium text-sm"
                      onClick={() => setCountriesDropdown(false)}
                    >
                      View all countries →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/services" className="hover:text-fes-deep text-center px-1 py-1">Services</Link>
            <Link to="/branches" className="hover:text-fes-deep text-center px-1 py-1">Branches</Link>
            <CourseFinderLink 
              title="Course Finder"
              size="medium"
              variant="outline"
              className="ml-2"
            />
            <AIAssistantLink 
              title="AI Assistant"
              size="medium"
              variant="primary"
              className="ml-1"
            />
            <BookSessionLink 
              title="Book Session"
              size="medium"
              variant="primary"
              className="ml-2"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden glass-strong p-4 space-y-3 fixed top-20 left-0 right-0 bottom-0 overflow-y-auto z-30">
            <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
            <div className="relative">
              <button 
                onClick={() => setCountriesDropdown(!countriesDropdown)}
                className="w-full text-left flex items-center justify-between py-2"
              >
                <span>Countries</span>
                <svg className={`w-4 h-4 transition-transform ${countriesDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {countriesDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      to={`/countries/${country.slug}`}
                      className="flex items-center gap-3 py-2 hover:text-fes-deep transition-colors"
                      onClick={() => {
                        setCountriesDropdown(false)
                        setOpen(false)
                      }}
                    >
                      <img 
                        src={country.flag} 
                        alt={`${country.name} flag`} 
                        className="w-5 h-3 object-cover rounded-sm"
                      />
                      <span className="text-sm">{country.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/countries"
                    className="block text-fes-blue hover:text-fes-deep font-medium text-sm mt-2"
                    onClick={() => {
                      setCountriesDropdown(false)
                      setOpen(false)
                    }}
                  >
                    View all countries →
                  </Link>
                </div>
              )}
            </div>
            <Link to="/services" className="block" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/branches" className="block" onClick={() => setOpen(false)}>Branches</Link>
            <CourseFinderLink 
              title="Course Finder"
              size="medium"
              variant="outline"
              className="block w-full text-center"
              onClick={() => setOpen(false)}
            />
            <AIAssistantLink 
              title="AI Assistant"
              size="medium"
              variant="primary"
              className="block w-full text-center"
              onClick={() => setOpen(false)}
            />
            <BookSessionLink 
              title="Book Session"
              size="large"
              variant="primary"
              className="block w-full text-center"
              onClick={() => setOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  )
}
