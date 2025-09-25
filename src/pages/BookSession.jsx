import SessionForm from "../sections/Book-Session/SessionForm";
import { motion } from "framer-motion";
import React, { useEffect } from 'react';

export default function BookSession() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-32 top-10 w-72 h-72 rounded-full bg-gradient-to-br from-fes-blue/20 to-fes-deep/10 blur-3xl mix-blend-overlay pointer-events-none"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -left-24 bottom-10 w-60 h-60 rounded-full bg-gradient-to-tr from-green-400/20 to-green-600/10 blur-3xl mix-blend-overlay pointer-events-none"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-yellow-300/10 blur-2xl mix-blend-overlay pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 md:py-12 lg:py-16">
        {/* Left Side: Heading + Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-fes-blue/10 text-fes-blue rounded-full text-sm font-semibold mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Free Consultation
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            Book A{" "}
            <span className="gradient-text">Free Consultancy</span> Session
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
          >
            To help us guide you better with your study abroad journey, please
            fill out the following short form. One of our expert counselors will
            contact you shortly after submission.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
          >
            {[
              { icon: "🎓", text: "Expert Guidance" },
              { icon: "🌍", text: "Global Reach" },
              { icon: "⏱️", text: "Quick Response" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass-strong rounded-2xl shadow-2xl p-0 overflow-hidden"
        >
          <SessionForm />
        </motion.div>
      </div>
    </section>
  );
}
