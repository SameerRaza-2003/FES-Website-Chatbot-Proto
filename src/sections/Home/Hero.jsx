import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Globe, Users, BookOpen, Award, Shield } from 'lucide-react'
import featuredStudent from '../../assets/img2.jpg'
import airplaneBg from '../../assets/airplane.png'

const useCounter = (target, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      if (target === 22 && suffix === ' yrs') {
        setCount(Math.floor(progress * target))
      } else if (target === 170 && suffix === '+') {
        setCount(Math.floor(progress * target))
      } else if (target === 95 && suffix === '%') {
        setCount(Math.floor(progress * target))
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration, suffix])
  
  return count + suffix
}

export default function Hero({ onGetStarted }){
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '0%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0])
  
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
              <Link
                to="/book-session"
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book A Free Consultancy Session
              </Link>
            </motion.div>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-sm">
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.4, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useCounter(95, 3000, '%')}</div>
                <div className="text-gray-500">Visa Acceptance Rate</div>
              </motion.div>
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.5, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useCounter(170, 3000, '+')}</div>
                <div className="text-gray-500">Universities and Colleges</div>
              </motion.div>
              <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.6, duration:0.6}}
                className="glass p-3 sm:p-4 text-center"
              >
                <div className="font-bold text-2xl">{useCounter(22, 3000, ' yrs')}</div>
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
            <div className="w-full max-w-md glass-strong p-6 transform -rotate-2 shadow-2xl">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img 
                  src={featuredStudent} 
                  alt="Featured Student Success Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white">
                    <div className="text-sm opacity-90">Featured Student</div>
                    <div className="font-semibold text-xl">Success Story</div>
                    <div className="text-xs opacity-75">Admitted to Dream University</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Why Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
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
                className="glass p-4 sm:p-6 hover:scale-105 transition-transform"
              >
                <Icon className="w-8 h-8 text-fes-deep mb-4"/>
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
