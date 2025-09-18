import React from 'react'
import Hero from '../sections/Home/Hero'
import Why from '../sections/Home/Why'
import Services from '../sections/Home/Services'
import Testimonials from '../sections/Home/Testimonials'
import Footer from '../sections/Home/Footer'

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
