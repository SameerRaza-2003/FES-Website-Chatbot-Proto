import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Globe, Users, BookOpen, Award, Shield, ChevronLeft, ChevronRight } from 'lucide-react'
import airplaneBg from '../../assets/airplane.png'
import heroImage1 from '../../assets/hero/fesconsultants2025_09_23_22_30_3321d5ee0a-fee7-440b-b5d3-2e0830cd9756.jpg'
import heroImage2 from '../../assets/hero/fesconsultants2025_09_23_22_30_48b7a6971a-be6d-4e78-bccb-73cf7538a959.jpg'
import heroImage3 from '../../assets/hero/fesconsultants2025_09_23_22_32_1682df95c9-5d2f-4933-952a-d7953c5d0cd9.jpg'
import heroImage4 from '../../assets/hero/fesconsultants2025_09_23_22_32_33703a02d9-5158-4940-9bdc-e5650cfe3ac5.jpg'
import { BookSessionLink } from '../../components/ActionButtons'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { useCarousel } from '../../hooks/useCarousel'

export default function Hero({ onGetStarted }){
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '0%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0])
  
  // Carousel setup
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4]
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(heroImages, 4000)
  
  return (
    <section id="home" className="relative overflow-hidden pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 sm:py-6 md:py-8 lg:py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-4xl md:text-6xl font-extrabold leading-tight">
              Shape your <span className="gradient-text">global future</span><br/> with <span className="text-fes-deep">FES</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-6 text-gray-600 max-w-xl">
            For 20+ years, we’ve helped students secure admissions, scholarships, and visas at top universities in the UK, USA, Canada, Australia, Europe, and Türkiye. With 1,400+ partner institutions, 18 global offices, and 15,000+ success stories, we make your study abroad dreams a reality.
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-6 sm:mt-8">
              <BookSessionLink 
                title="Book A Free Consultancy Session"
                size="large"
                variant="primary"
              />
            </motion.div>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-sm">
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.4, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useAnimatedCounter(95, 3000, '%')}</div>
                <div className="text-gray-500">Visa Acceptance Rate</div>
              </motion.div>
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.5, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useAnimatedCounter(170, 3000, '+')}</div>
                <div className="text-gray-500">Universities and Colleges</div>
              </motion.div>
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.6, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useAnimatedCounter(22, 3000, ' yrs')}</div>
                <div className="text-gray-500">Industry Experience</div>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{opacity:0,x:20}} 
            animate={{opacity:1,x:0}} 
            transition={{delay:0.5, duration:0.7}}
            className="hidden md:flex justify-center items-center"
          >
            <div className="w-full max-w-lg glass-strong p-3 transform -rotate-2 shadow-2xl">
              <div className="relative h-[28rem] rounded-xl overflow-hidden">
                {/* Carousel Images */}
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={image} 
                      alt={`Hero Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Why Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 place-items-center md:place-items-stretch">
          {[
            {icon: GraduationCap, title: 'Expert Counselors', text: 'Years of admissions experience across disciplines.'},
            {icon: Globe, title: 'Global Partnerships', text: 'Universities across North America, UK, EU, Australia.'},
            {icon: Users, title: 'Personalized Plans', text: 'Tailored strategies for each applicant.'},
            {icon: BookOpen, title: 'Full Services', text: 'From application to post-arrival support.'},
            {icon: Award, title: '95% Success Rate', text: 'Proven track record of successful admissions.'},
            {icon: Shield, title: 'Visa Guarantee', text: 'Comprehensive visa support with high approval rates.'},
          ].map((it,idx)=>{
            const Icon = it.icon
            return (
              <motion.div
                key={idx}
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.8 + idx * 0.1, duration:0.6}}
                className="glass p-4 sm:p-6 hover:scale-105 transition-transform text-center md:text-left w-full shadow-lg border border-white/30 backdrop-blur-md"
              >
                <Icon className="w-8 h-8 text-fes-deep mb-4 mx-auto md:mx-0"/>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-500 mt-2">{it.text}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Airplane Background */}
      <motion.div 
        className="absolute inset-0 z-[-10] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${airplaneBg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          x: 'calc(-50% + 50vw)',
          y,
          scale,
          opacity,
          width: '100vw',
          height: '100%'
        }}
      />
      
      {/* subtle animated background */}
      <div className="absolute -right-40 top-10 w-96 h-96 rounded-full bg-gradient-to-br from-fes-blue/30 to-fes-deep/20 blur-3xl mix-blend-overlay pointer-events-none"></div>
    </section>
  )
}
