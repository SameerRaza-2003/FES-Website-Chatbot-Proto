import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
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
            <Link to="/" className="hover:text-fes-deep text-center px-1 py-1" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }}>Testimonials</Link>
            <Link
              to="/course-finder"
              className="ml-2 px-3 py-1.5 rounded-full border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white transition text-center justify-center inline-flex items-center"
            >
              Course Finder
            </Link>
            <Link
              to="/recommendations"
              className="ml-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white text-center justify-center inline-flex items-center"
            >
              AI Assistant
            </Link>
            <Link
              to="/book-session"
              className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center justify-center inline-flex items-center"
            >
              Book Session
            </Link>
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
            <Link to="/" className="block" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}>Testimonials</Link>
            <Link
              to="/course-finder"
              onClick={() => setOpen(false)}
              className="block w-full py-2 rounded-full border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white transition text-center"
            >
              Course Finder
            </Link>
            <Link
              to="/recommendations"
              onClick={() => setOpen(false)}
              className="block w-full py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white text-center"
            >
              AI Assistant
            </Link>
            <Link
              to="/book-session"
              onClick={() => setOpen(false)}
              className="block w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              Book Session
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
