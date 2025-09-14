import React from 'react'
import Hero from '../sections/Hero'
import Why from '../sections/Why'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Footer from '../sections/Footer'

export default function HomePage({ onGetStarted }){
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <Why />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}
