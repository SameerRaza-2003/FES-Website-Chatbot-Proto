import React, { useEffect } from 'react'
import Hero from '../sections/Home/Hero'
import Services from '../sections/Home/Services'
import Testimonials from '../sections/Home/Testimonials'
import Footer from '../sections/Home/Footer'
import Faqs from '../sections/Home/Faqs'

export default function HomePage({ onGetStarted }){
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Services />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  )
}
