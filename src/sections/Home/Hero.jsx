import React from 'react'
import { motion } from 'framer-motion'
import featuredStudent from '../../assets/img2.jpg'

export default function Hero({ onGetStarted }){
  return (
    <section id="home" className="relative overflow-hidden pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 sm:py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-4xl md:text-6xl font-extrabold leading-tight">
              Shape your <span className="gradient-text">global future</span><br/> with <span className="text-fes-deep">FES</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-6 text-gray-600 max-w-xl">
            For 20+ years, we’ve helped students secure admissions, scholarships, and visas at top universities in the UK, USA, Canada, Australia, Europe, and Türkiye. With 1,400+ partner institutions, 18 global offices, and 15,000+ success stories, we make your study abroad dreams a reality.
            </motion.p>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">
              <button onClick={onGetStarted} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-fes-blue to-fes-deep text-white shadow-lg">Get Started</button>
              <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-200 glass">Learn More</button>
            </motion.div>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-sm">
              <div className="glass p-3 sm:p-4 text-center">
                <div className="font-bold text-2xl">95%</div>
                <div className="text-gray-500">Visa Acceptance Rate</div>
              </div>
              <div className="glass p-3 sm:p-4 text-center">
                <div className="font-bold text-2xl">170+</div>
                <div className="text-gray-500">Universities and Colleges</div>
              </div>
              <div className="glass p-3 sm:p-4 text-center">
                <div className="font-bold text-2xl">22 yrs</div>
                <div className="text-gray-500">Industry Experience</div>
              </div>
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
      {/* subtle animated background */}
      <div className="absolute -right-40 top-10 w-96 h-96 rounded-full bg-gradient-to-br from-fes-blue/30 to-fes-deep/20 blur-3xl mix-blend-overlay pointer-events-none"></div>
    </section>
  )
}
