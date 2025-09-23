import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, FileText, Languages, Users, Plane, ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react'

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

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Comprehensive Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert guidance for every step of your study abroad journey
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">9+</div>
              <div className="text-sm">Services</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Students Helped</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Study Abroad Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From career counseling to post-departure support, we provide end-to-end services to ensure your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
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
                          <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold mr-2 mt-0.5 flex-shrink-0">
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let our expert team guide you through every step of your study abroad experience
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/recommendations"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fes-blue to-fes-deep text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Talk with Virtual Assistant
            </Link>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
