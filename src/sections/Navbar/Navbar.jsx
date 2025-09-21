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
            <img src={logo} alt="FES Consultancy" className="h-12 w-auto min-w-[100px]" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="hover:text-fes-deep text-center px-1 py-1">Home</Link>
            <Link to="/countries" className="hover:text-fes-deep text-center px-1 py-1">Countries</Link>
            <Link to="/" className="hover:text-fes-deep text-center px-1 py-1" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</Link>
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
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden glass-strong p-4 mt-2 space-y-3">
            <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/countries" className="block" onClick={() => setOpen(false)}>Countries</Link>
            <Link to="/" className="block" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}>Services</Link>
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
