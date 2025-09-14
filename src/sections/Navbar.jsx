import React, {useState} from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/image.png'

export default function Navbar({ onGetStarted, onBackToHome, currentPage }){
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full z-40 top-0 left-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3 cursor-pointer" onClick={currentPage === 'recommendations' ? onBackToHome : undefined}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-fes-blue to-fes-deep text-white font-bold">F</div>
            <img src={logo} alt="FES Consultancy" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {currentPage === 'home' ? (
              <>
                <a className="hover:text-fes-deep" href="#home">Home</a>
                <a className="hover:text-fes-deep" href="#why-us">Why Us</a>
                <a className="hover:text-fes-deep" href="#services">Services</a>
                <a className="hover:text-fes-deep" href="#testimonials">Testimonials</a>
                <button onClick={onGetStarted} className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white">AI Assistant</button>
              </>
            ) : (
              <button onClick={onBackToHome} className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white">Back to Home</button>
            )}
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass-strong p-4 mt-2 space-y-3">
            {currentPage === 'home' ? (
              <>
                <a href="#home" className="block" onClick={() => setOpen(false)}>Home</a>
                <a href="#why-us" className="block" onClick={() => setOpen(false)}>Why Us</a>
                <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
                <a href="#testimonials" className="block" onClick={() => setOpen(false)}>Testimonials</a>
                <button onClick={() => { onGetStarted(); setOpen(false); }} className="w-full py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white">AI Assistant</button>
              </>
            ) : (
              <button onClick={() => { onBackToHome(); setOpen(false); }} className="w-full py-2 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white">Back to Home</button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
