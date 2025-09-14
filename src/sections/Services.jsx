import React from 'react'
import { GraduationCap, Award, FileText, Languages, Users, Plane } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Study Abroad Strategy',
    description: 'Personalized roadmap to your dream university with expert guidance and strategic planning.',
    features: ['University Selection', 'Application Timeline', 'Profile Building']
  },
  {
    icon: Award,
    title: 'Scholarship Assistance',
    description: 'Maximize your funding opportunities with our comprehensive scholarship search and application support.',
    features: ['Scholarship Search', 'Application Writing', 'Interview Prep']
  },
  {
    icon: FileText,
    title: 'Visa & Documentation',
    description: 'Streamlined visa processing with 95% success rate and complete documentation support.',
    features: ['Visa Application', 'Document Prep', 'Interview Training']
  },
  {
    icon: Languages,
    title: 'Language Preparation',
    description: 'Achieve your target scores in IELTS, TOEFL, and other language proficiency tests.',
    features: ['IELTS/TOEFL Prep', 'Mock Tests', 'Speaking Practice']
  },
  {
    icon: Users,
    title: 'Career Counselling',
    description: 'Align your academic choices with career goals through expert counseling sessions.',
    features: ['Career Assessment', 'Industry Insights', 'Goal Setting']
  },
  {
    icon: Plane,
    title: 'Post-Arrival Support',
    description: 'Comprehensive support for your smooth transition and successful settlement abroad.',
    features: ['Airport Pickup', 'Accommodation', 'Local Orientation']
  }
]

export default function Services(){
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-fes-blue/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-fes-blue/10 to-fes-deep/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-fes-deep/10 to-fes-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for your study abroad journey - from initial planning to successful settlement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="group relative h-full">
                {/* Card background with gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-fes-blue to-fes-deep rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-fes-blue to-fes-deep rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-fes-deep transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-gradient-to-r from-fes-blue to-fes-deep rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-fes-blue to-fes-deep text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
