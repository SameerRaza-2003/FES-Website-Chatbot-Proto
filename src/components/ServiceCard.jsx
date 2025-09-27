import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, ArrowRight, Award } from 'lucide-react'

const ServiceCard = ({ service, index, hoveredCard, setHoveredCard }) => {
  const Icon = service.icon

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
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
      {hoveredCard === index && (
        <motion.div
          className="absolute inset-0 bg-blue-400/20 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <div className="p-8 relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg">
            <Icon className="w-7 h-7 text-blue-600" />
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
  )
}

export default ServiceCard
