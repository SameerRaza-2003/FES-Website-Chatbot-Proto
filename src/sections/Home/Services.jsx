import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, FileText, Languages, Users, Plane } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Career Counseling',
    description: 'When one talks about career counseling, many questions come to mind. Should one look for career guidance services? Would it help in making the right choices? Would it create avenues for the student or should we apply direct?',
    features: ['Career Assessment', 'Strategic Planning', 'Decision Making']
  },
  {
    icon: GraduationCap,
    title: 'Admission Guidance',
    description: 'Taking admission to any university is not an easy task; it requires a lot of research and admission guidance. This task can be achieved if you have the right career counselor or career guidance at FES.',
    features: ['University Research', 'Application Strategy', 'Admission Support']
  },
  {
    icon: FileText,
    title: 'Medical Requirements',
    description: 'Precautionary health tests for viral and non-viral diseases have been a part of the student visa process to study abroad. These tests are conducted to determine if any infectious disease is existent in the student.',
    features: ['Health Screening', 'Medical Documentation', 'Compliance Support']
  },
  {
    icon: Plane,
    title: 'Pre Departure Orientation',
    description: 'We provide comprehensive support to the student and guide on different aspects necessary for a student. FES consultants support students in booking an air ticket, enrollment in the desired university, accommodation, and airport pickup.',
    features: ['Travel Planning', 'University Enrollment', 'Accommodation Support']
  },
  {
    icon: Award,
    title: 'Appeals and Review',
    description: 'When the country you are applying for refuses a student visa and the student appeals to the tribunal to reconsider, it is known as a visa rejection appeal. Mostly, visas are denied when students do not have proper guidance.',
    features: ['Visa Appeal Support', 'Document Review', 'Tribunal Guidance']
  },
  {
    icon: Users,
    title: 'Arranging Education Expos & Events',
    description: 'FES Higher Education Consultants was established in 2003 with an aim to serve aspiring students and help them in fulfilling their dreams by placing them in the best universities in the courses that best match their skillset.',
    features: ['Education Expos', 'University Events', 'Networking Opportunities']
  },
  {
    icon: Plane,
    title: 'Post Departure Support',
    description: 'Moving away from a familiar environment is difficult for anyone, more so for a child who has led a cocooned life and is venturing out on his/her own. Change is always challenging for anyone to adjust.',
    features: ['Settlement Support', 'Cultural Adjustment', 'Ongoing Guidance']
  },
  {
    icon: Languages,
    title: 'IELTS & TOEFL',
    description: 'For applying to any university, you must meet their language entry criteria. Most universities that teach English language courses require their applicants to prove their English language proficiency.',
    features: ['Test Preparation', 'Practice Sessions', 'Score Improvement']
  },
  {
    icon: FileText,
    title: 'Student Visa Assistance',
    description: 'A student visa is a unique stamp put on the student\'s passport ensuring entry of the applicant to the enrolled educational institution. Any student seeking higher education in other countries must obtain a permit, a visa.',
    features: ['Visa Application', 'Documentation Support', 'Embassy Liaison']
  }
]

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
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive support for your study abroad journey - from initial planning to successful settlement
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => {
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
                  
                  {/* Decorative bottom accent instead of button */}
                  <div className="h-1 bg-gradient-to-r from-fes-blue to-fes-deep rounded-full mt-auto" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
