import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import servicesImg from "../assets/services-background.jpg"
import SEO from '../components/SEO'
import { seoConfig } from '../data/seoData'
import { servicesData, serviceStats } from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'
import { ActionButtonGroup } from '../components/ActionButtons'
import { 
  TypingText, 
  GradientText, 
  AnimatedBackground, 
  HeroFloatingElements, 
  StatCard, 
  FloatingParticles 
} from '../components/AnimatedHero'

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO {...seoConfig.services} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <AnimatedBackground />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url(${servicesImg})`,
            opacity: 0.2
          }}
        />
        
        <HeroFloatingElements />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <GradientText className="text-white drop-shadow-lg">
              <TypingText text="Our Comprehensive Services" />
            </GradientText>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Expert guidance for every step of your study abroad journey
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {serviceStats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Complete Study Abroad Solutions
            </h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              From career counseling to post-departure support, we provide 
              <span className="font-semibold text-blue-600">
                {" "}end-to-end services{" "}
              </span>
              to ensure your success
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.title}
                service={service}
                index={index}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <FloatingParticles count={6} />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let our expert team guide you through every step of your 
            <span className="font-bold text-white drop-shadow-md">
              {" "}study abroad experience{" "}
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ActionButtonGroup 
              aiTitle="Talk with Virtual Assistant"
              bookTitle="Book a Consultation"
              showCourseFinder={false}
              size="large"
              layout="horizontal"
            />
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
