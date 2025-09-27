import React from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, BookOpen, Star, DollarSign, MapPin } from 'lucide-react'

// Reusable stat card component
export const StatCard = ({ icon: Icon, value, label, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 ${className}`}
  >
    <Icon className="w-8 h-8 text-fes-blue mx-auto mb-3" />
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </motion.div>
)

// Reusable info card component
export const InfoCard = ({ 
  title, 
  children, 
  delay = 0, 
  direction = 0, 
  className = "",
  icon: Icon 
}) => (
  <motion.div
    initial={{ opacity: 0, x: direction * 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white rounded-2xl shadow-lg p-8 border border-gray-100 ${className}`}
  >
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      {Icon && <Icon className="w-6 h-6 mr-3 text-fes-blue" />}
      {title}
    </h2>
    {children}
  </motion.div>
)

// Highlights list component
export const HighlightsList = ({ highlights }) => (
  <ul className="space-y-4">
    {highlights.map((highlight, index) => (
      <li key={index} className="flex items-start">
        <div className="w-2 h-2 bg-fes-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <span className="text-gray-700">{highlight}</span>
      </li>
    ))}
  </ul>
)

// Cost info component
export const CostInfo = ({ costs }) => (
  <div className="space-y-4">
    <div className="flex items-center">
      <DollarSign className="w-5 h-5 text-fes-blue mr-3" />
      <div>
        <div className="font-semibold text-gray-900">Tuition Fees</div>
        <div className="text-gray-600">{costs.tuition}</div>
      </div>
    </div>
    <div className="flex items-center">
      <MapPin className="w-5 h-5 text-fes-blue mr-3" />
      <div>
        <div className="font-semibold text-gray-900">Living Costs</div>
        <div className="text-gray-600">{costs.living}</div>
      </div>
    </div>
  </div>
)

// Universities list component
export const UniversitiesList = ({ universities }) => (
  <ul className="space-y-3">
    {universities.map((university, index) => (
      <li key={index} className="flex items-center">
        <div className="w-8 h-8 bg-fes-blue/10 rounded-full flex items-center justify-center mr-3">
          <span className="text-fes-blue font-semibold text-sm">{index + 1}</span>
        </div>
        <span className="text-gray-700">{university}</span>
      </li>
    ))}
  </ul>
)

// Programs grid component
export const ProgramsGrid = ({ programs }) => (
  <div className="grid grid-cols-2 gap-3">
    {programs.map((program, index) => (
      <div key={index} className="bg-fes-blue/5 rounded-lg p-3 text-center">
        <span className="text-gray-700 text-sm font-medium">{program}</span>
      </div>
    ))}
  </div>
)

// Stats grid component for country pages
export const StatsGrid = ({ stats, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
  >
    <StatCard 
      icon={GraduationCap} 
      value={stats.universities} 
      label="Universities" 
    />
    <StatCard 
      icon={Users} 
      value={stats.students} 
      label="Students" 
    />
    <StatCard 
      icon={BookOpen} 
      value={stats.programs} 
      label="Programs" 
    />
    <StatCard 
      icon={Star} 
      value={stats.satisfaction} 
      label="Satisfaction" 
    />
  </motion.div>
)
