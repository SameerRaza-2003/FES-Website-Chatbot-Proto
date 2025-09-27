import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, FileText, Languages, Users, Plane, ArrowRight, CheckCircle, Star, MessageCircle, Sparkles, Zap } from 'lucide-react'
import servicesImg from "../assets/services-background.jpg"
import SEO from '../components/SEO'
import { seoConfig } from '../data/seoData'

const services = [
  {
    icon: Users,
    title: 'Career Counseling',
    description: 'When one talks about career counseling, many questions come to mind. Should one look for career guidance services? Would it help in making the right choices? Would it create avenues for the student or should we apply direct?',
    features: ['Career Assessment', 'Strategic Planning', 'Decision Making'],
    detailedDescription: 'Our comprehensive career counseling services help students make informed decisions about their academic and professional future. We provide personalized guidance based on individual strengths, interests, and career goals.',
    process: [
      'Initial consultation and assessment',
      'Career aptitude testing',
      'Personalized career roadmap',
      'Ongoing support and guidance'
    ],
    benefits: [
      'Clarity on career direction',
      'Informed decision making',
      'Personalized action plan',
      'Access to exclusive opportunities'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Admission Guidance',
    description: 'Taking admission to any university is not an easy task; it requires a lot of research and admission guidance. This task can be achieved if you have the right career counselor or career guidance at FES.',
    features: ['University Research', 'Application Strategy', 'Admission Support'],
    detailedDescription: 'Our expert admission guidance team helps you navigate the complex university application process. From selecting the right institutions to crafting compelling applications, we ensure you stand out.',
    process: [
      'University shortlisting based on profile',
      'Application strategy development',
      'Document preparation and review',
      'Application submission and follow-up'
    ],
    benefits: [
      'Higher acceptance rates',
      'Reduced application stress',
      'Expert document review',
      'Timeline management'
    ]
  },
  {
    icon: FileText,
    title: 'Medical Requirements',
    description: 'Precautionary health tests for viral and non-viral diseases have been a part of the student visa process to study abroad. These tests are conducted to determine if any infectious disease is existent in the student.',
    features: ['Health Screening', 'Medical Documentation', 'Compliance Support'],
    detailedDescription: 'We assist students in completing all necessary medical requirements for their student visa applications. Our team ensures compliance with destination country regulations.',
    process: [
      'Medical requirement assessment',
      'Approved medical facility selection',
      'Test scheduling and coordination',
      'Document verification and submission'
    ],
    benefits: [
      'Hassle-free medical processing',
      'Compliance assurance',
      'Time-efficient coordination',
      'Expert guidance on requirements'
    ]
  },
  {
    icon: Plane,
    title: 'Pre Departure Orientation',
    description: 'We provide comprehensive support to the student and guide on different aspects necessary for a student. FES consultants support students in booking an air ticket, enrollment in the desired university, accommodation, and airport pickup.',
    features: ['Travel Planning', 'University Enrollment', 'Accommodation Support'],
    detailedDescription: 'Our pre-departure orientation program prepares students for their journey abroad. We cover everything from travel arrangements to cultural adaptation.',
    process: [
      'Travel documentation and booking',
      'Accommodation arrangement',
      'University enrollment confirmation',
      'Pre-departure briefing session'
    ],
    benefits: [
      'Stress-free travel planning',
      'Safe accommodation guaranteed',
      'Cultural preparation',
      '24/7 support during transition'
    ]
  },
  {
    icon: Award,
    title: 'Appeals and Review',
    description: 'When the country you are applying for refuses a student visa and the student appeals to the tribunal to reconsider, it is known as a visa rejection appeal. Mostly, visas are denied when students do not have proper guidance.',
    features: ['Visa Appeal Support', 'Document Review', 'Tribunal Guidance'],
    detailedDescription: 'Our specialized appeals and review service helps students navigate visa rejections. We provide expert guidance on appeal processes and documentation.',
    process: [
      'Rejection cause analysis',
      'Appeal strategy development',
      'Document enhancement and preparation',
      'Tribunal representation support'
    ],
    benefits: [
      'Expert rejection analysis',
      'Increased appeal success rate',
      'Professional representation',
      'Comprehensive case preparation'
    ]
  },
  {
    icon: Users,
    title: 'Arranging Education Expos & Events',
    description: 'FES Higher Education Consultants was established in 2003 with an aim to serve aspiring students and help them in fulfilling their dreams by placing them in the best universities in the courses that best match their skillset.',
    features: ['Education Expos', 'University Events', 'Networking Opportunities'],
    detailedDescription: 'We organize and participate in education expos and events, connecting students directly with university representatives and industry professionals.',
    process: [
      'Event planning and coordination',
      'University partner engagement',
      'Student registration and management',
      'Post-event follow-up and support'
    ],
    benefits: [
      'Direct university interaction',
      'Scholarship opportunities',
      'Networking with peers',
      'On-spot admissions'
    ]
  },
  {
    icon: Plane,
    title: 'Post Departure Support',
    description: 'Moving away from a familiar environment is difficult for anyone, more so for a child who has led a cocooned life and is venturing out on his/her own. Change is always challenging for anyone to adjust.',
    features: ['Settlement Support', 'Cultural Adjustment', 'Ongoing Guidance'],
    detailedDescription: 'Our post-departure support ensures students settle smoothly into their new environment. We provide ongoing assistance throughout their study abroad journey.',
    process: [
      'Initial settlement assistance',
      'Cultural orientation programs',
      'Academic integration support',
      'Ongoing check-ins and guidance'
    ],
    benefits: [
      'Smooth cultural transition',
      'Academic success support',
      '24/7 emergency assistance',
      'Community building'
    ]
  },
  {
    icon: Languages,
    title: 'IELTS & TOEFL',
    description: 'For applying to any university, you must meet their language entry criteria. Most universities that teach English language courses require their applicants to prove their English language proficiency.',
    features: ['Test Preparation', 'Practice Sessions', 'Score Improvement'],
    detailedDescription: 'Our comprehensive test preparation programs help students achieve their target scores in IELTS, TOEFL, and other language proficiency tests.',
    process: [
      'Skill assessment and goal setting',
      'Personalized study plan',
      'Intensive training sessions',
      'Mock tests and feedback'
    ],
    benefits: [
      'Expert instruction',
      'Personalized study plans',
      'Comprehensive practice materials',
      'Score improvement guarantee'
    ]
  },
  {
    icon: FileText,
    title: 'Student Visa Assistance',
    description: 'A student visa is a unique stamp put on the student\'s passport ensuring entry of the applicant to the enrolled educational institution. Any student seeking higher education in other countries must obtain a permit, a visa.',
    features: ['Visa Application', 'Documentation Support', 'Embassy Liaison'],
    detailedDescription: 'Our visa assistance service guides students through the complex visa application process, ensuring all requirements are met for successful approval.',
    process: [
      'Visa requirement assessment',
      'Document preparation and verification',
      'Application form completion',
      'Embassy appointment coordination'
    ],
    benefits: [
      'Expert visa guidance',
      'Reduced rejection risk',
      'Document verification',
      'Application tracking'
    ]
  }
]

const TypingText = ({ text, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-6 bg-white ml-1 align-middle"
      />
    </span>
  )
}

const GradientText = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
)

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

const PulseBackground = () => (
  <motion.div
    className="absolute inset-0"
    animate={{
      background: [
        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
      ]
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
  />
)

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
        <PulseBackground />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url(${servicesImg})`,
            opacity: 0.2
          }}
        />
        
        {/* Floating Elements */}
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-yellow-300 opacity-60">
            <Sparkles className="w-8 h-8" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-32 right-20 text-blue-300 opacity-60">
            <Zap className="w-6 h-6" />
          </div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-32 left-20 text-purple-300 opacity-60">
            <Star className="w-7 h-7" />
          </div>
        </FloatingElement>
        
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
            {[
              { value: "9+", label: "Services" },
              { value: "20+", label: "Years Experience" },
              { value: "50K+", label: "Students Helped" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/20 backdrop-blur-md rounded-xl px-8 py-4 border border-white/30 shadow-xl"
                whileHover={{ 
                  scale: 1.05, 
                  background: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-white"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-blue-100 mt-1">{stat.label}</div>
              </motion.div>
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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)"
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
                
                {/* Glow Effect */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20 rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg">
                      <service.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      Our Process
                    </h4>
                    <ol className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0 shadow-md">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-500" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.5)",
                "0 0 30px rgba(255, 255, 255, 0.8)",
                "0 0 20px rgba(255, 255, 255, 0.5)"
              ]
            }}
          
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/recommendations"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <MessageCircle className="mr-3 w-6 h-6" />
                </motion.div>
                <span className="relative z-10 text-lg">Talk with Virtual Assistant</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold rounded-full shadow-2xl hover:shadow-green-500/50 transform transition-all duration-300 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Sparkles className="mr-3 w-6 h-6" />
                </motion.div>
                <span className="relative z-10 text-lg">Book a Consultation</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
