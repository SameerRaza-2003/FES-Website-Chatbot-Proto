import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Star } from 'lucide-react'

// Reusable animated text component
export const TypingText = ({ text, className = "" }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.span>
  )
}

// Reusable gradient text component
export const GradientText = ({ children, className = "" }) => (
  <span className={`bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
)

// Reusable floating element component
export const FloatingElement = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
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

// Animated background component
export const AnimatedBackground = () => (
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

// Hero section with floating elements
export const HeroFloatingElements = () => (
  <>
    <FloatingElement delay={0} className="absolute top-20 left-10 text-yellow-300 opacity-60">
      <Sparkles className="w-8 h-8" />
    </FloatingElement>
    <FloatingElement delay={1} className="absolute top-32 right-20 text-blue-300 opacity-60">
      <Zap className="w-6 h-6" />
    </FloatingElement>
    <FloatingElement delay={2} className="absolute bottom-32 left-20 text-purple-300 opacity-60">
      <Star className="w-7 h-7" />
    </FloatingElement>
  </>
)

// Animated stat card component
export const StatCard = ({ stat, index }) => (
  <motion.div
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
)

// Floating particles component
export const FloatingParticles = ({ count = 6 }) => (
  <>
    {[...Array(count)].map((_, i) => (
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
  </>
)
