import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featuredServices } from '../../data/featuredServicesData'

export default function Services(){
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-fes-blue/5 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-fes-blue/10 to-fes-deep/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-fes-deep/10 to-fes-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.9, 1],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive support for your study abroad journey - from initial planning to successful settlement
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We offer 9+ specialized services designed to ensure your success at every step
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredServices.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div 
                key={i} 
                className="group relative h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Card background with animated gradient border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-fes-blue to-fes-deep rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  animate={{
                    background: [
                      'linear-gradient(135deg, #3b82f6, #1e3a8a)',
                      'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                      'linear-gradient(135deg, #3b82f6, #1e3a8a)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Animated icon with gradient background */}
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-fes-blue to-fes-deep rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  
                  {/* Animated title */}
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-fes-deep transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-fes-blue to-fes-deep rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative bottom accent */}
                  <div className="h-1 bg-gradient-to-r from-fes-blue to-fes-deep rounded-full mt-auto" />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fes-blue to-fes-deep text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Explore all 9+ services with detailed information and processes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
