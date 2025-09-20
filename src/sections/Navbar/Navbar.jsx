import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/image.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <nav className="fixed w-full z-40 top-0 left-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo (always links home) */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="FES Consultancy" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {isHome ? (
              <>
                <a className="hover:text-fes-deep" href="#home">Home</a>
                <a className="hover:text-fes-deep" href="#why-us">Why Us</a>
                <a className="hover:text-fes-deep" href="#services">Services</a>
                <a className="hover:text-fes-deep" href="#testimonials">Testimonials</a>
                <Link
                  to="/course-finder"
                  className="ml-4 px-4 py-2 rounded-full border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white transition"
                >
                  Course Finder
                </Link>
                <Link
                  to="/recommendations"
                  className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white"
                >
                  AI Assistant
                </Link>
              </>
            ) : (
              <Link
                to="/"
                className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white"
              >
                Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden glass-strong p-4 mt-2 space-y-3">
            {isHome ? (
              <>
                <a href="#home" className="block" onClick={() => setOpen(false)}>Home</a>
                <a href="#why-us" className="block" onClick={() => setOpen(false)}>Why Us</a>
                <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
                <a href="#testimonials" className="block" onClick={() => setOpen(false)}>Testimonials</a>
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
              </>
            ) : (
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="block w-full py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white text-center"
              >
                Back to Home
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
