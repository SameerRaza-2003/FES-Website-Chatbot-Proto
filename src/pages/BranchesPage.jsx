import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Building2, Globe, Star, Sparkles } from 'lucide-react'
import { branches } from '../data/branches'
import SEO from '../components/SEO'

const BranchCard = ({ branch, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl">
        
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={branch.image} 
            alt={branch.name}
            className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Basic Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/90 via-black/70 to-transparent">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">{branch.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">{branch.phone}</span>
              </div>
            </div>
          </div>
          
          {/* Branch Name Badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900">{branch.name}</h3>
            </motion.div>
          </div>
          
          {/* Sparkle Effects */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>
          
          {/* Additional Info on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm p-6 flex flex-col justify-center text-white"
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-2">{branch.name}</h4>
                    <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{branch.email}</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg"
                    >
                      Contact Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Info Section */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>{branch.phone}</span>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating Glow Effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700"
        animate={{ 
          background: [
            "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #ec4899)",
            "linear-gradient(45deg, #ec4899, #3b82f6)",
            "linear-gradient(45deg, #3b82f6, #8b5cf6)"
          ]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </motion.div>
  )
}

const BranchSection = ({ regionKey, region }) => {
  const [isVisible, setIsVisible] = useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  if (region.locations.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          <div className={`bg-gradient-to-r ${region.color} text-white px-8 py-4 rounded-full shadow-2xl mb-4`}>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              {regionKey === 'international' ? <Globe className="w-8 h-8" /> : <Building2 className="w-8 h-8" />}
              {region.name}
            </h2>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          {regionKey === 'international' 
            ? 'Our global presence extends across multiple countries, bringing world-class education consultancy to your doorstep.' 
            : `Serving ${region.name} with excellence and dedication to student success.`
          }
        </motion.p>
      </div>

      {/* Branches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {region.locations.map((branch, index) => (
          <BranchCard key={branch.name} branch={branch} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default function BranchesPage() {
  const [activeRegion, setActiveRegion] = useState('punjab')

  return (
    <>
      <SEO 
        title="Our Branches - FES Consultancy Locations | Education Consultants"
        description="Find FES Consultancy branches near you. We have offices across multiple locations to provide personalized education consultancy services for studying abroad."
        keywords="FES consultancy branches, education consultant locations, study abroad offices, consultancy near me, education guidance centers"
        url="/branches"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Branches</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Visit our conveniently located branches across Pakistan and internationally. 
              Experience personalized education consultancy at a location near you.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {Object.entries(branches).map(([key, region]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {region.locations.length}
                  </div>
                  <div className="text-blue-200 capitalize">{region.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {Object.entries(branches).map(([key, region]) => (
              region.locations.length > 0 && (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveRegion(key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeRegion === key
                      ? `bg-gradient-to-r ${region.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {region.name}
                </motion.button>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Branches Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <BranchSection regionKey={activeRegion} region={branches[activeRegion]} />
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Visit Us?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a visit to your nearest branch and take the first step towards your educational journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
