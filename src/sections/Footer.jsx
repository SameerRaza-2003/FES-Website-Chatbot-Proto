import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 mt-12 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-2xl font-bold">FES</div>
          <div className="text-sm text-gray-400 mt-2">Empowering students to reach global universities.</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick links</div>
          <div className="text-sm text-gray-400">Services · About · Contact</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm text-gray-400">info@fes.com<br/>+92 300 1234567</div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">© {new Date().getFullYear()} FES Consultancy</div>
    </footer>
  )
}
