import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users } from 'lucide-react'
import { BookSessionLink } from '../../components/ActionButtons'
import { faqData } from '../../data/faqData'

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-fes-blue/20 to-emerald-400/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-fes-deep/20 rounded-full blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Got <span className="gradient-text">Questions?</span><br/>
            We've Got <span className="text-fes-deep">Answers!</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about studying abroad with FES Consultants. 
            Can't find what you're looking for? Feel free to reach out to our expert team.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {faqData.map((faq, index) => {
            const Icon = faq.icon
            const isOpen = openFaq === faq.id
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group"
              >
                <div className="glass-strong p-6 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-fes-blue/50 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-fes-blue to-emerald-500 text-white shadow-lg' 
                          : 'bg-gradient-to-br from-fes-blue/10 to-emerald-500/10 text-fes-deep group-hover:from-fes-blue/20 group-hover:to-emerald-500/20'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-fes-deep transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className={`w-6 h-6 transition-colors ${
                          isOpen ? 'text-fes-blue' : 'text-gray-400 group-hover:text-fes-deep'
                        }`} />
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-16 pr-10">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-strong p-8 rounded-3xl border border-white/30 shadow-2xl max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-fes-blue to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Our expert consultants are here to help you every step of the way. 
              Get personalized guidance for your study abroad journey.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookSessionLink 
                title="Book Free Consultation"
                size="large"
                variant="primary"
                className="bg-gradient-to-r from-fes-blue to-emerald-500 shadow-lg hover:shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}