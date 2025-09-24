import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, Sparkles, GraduationCap, DollarSign, FileText, Globe, Award, Users } from 'lucide-react'

const faqData = [
  {
    id: 1,
    icon: Users,
    question: "Who are FES Consultants?",
    answer: "We're Pakistan's leading foreign education consultants, specializing in study abroad guidance for Europe, North America, Australia, and Asia. Our experienced team provides personalized assistance to make your dream of studying abroad a reality, offering comprehensive support from application to graduation."
  },
  {
    id: 2,
    icon: FileText,
    question: "What services do you offer?",
    answer: "We provide end-to-end study abroad services: career counselling, university admissions, IELTS/TOEFL coaching, visa assistance, interview preparation, pre-departure orientation, and post-arrival support. From start to finish, we're your trusted partner in achieving higher education goals."
  },
  {
    id: 3,
    icon: GraduationCap,
    question: "Can I apply with low Intermediate scores?",
    answer: "Absolutely! We take a holistic approach considering IELTS scores, motivation statements, and other qualifications. Our consultants help craft compelling applications and provide IELTS coaching to strengthen your university admission chances, regardless of intermediate scores."
  },
  {
    id: 4,
    icon: Award,
    question: "Do you offer IELTS/PTE coaching?",
    answer: "Yes! We provide both in-house and virtual IELTS/PTE coaching classes across Pakistan. Our expert guidance helps students achieve their best scores, with countless success stories of students realizing their study abroad dreams through our coaching programs."
  },
  {
    id: 5,
    icon: Globe,
    question: "Is IELTS mandatory for foreign universities?",
    answer: "Not always! Many universities offer IELTS exemptions if your previous education was in English. Some universities don't require IELTS at all. We help identify the best options for Pakistani students seeking foreign education opportunities."
  },
  {
    id: 6,
    icon: DollarSign,
    question: "What if I can't afford tuition fees?",
    answer: "We specialize in securing scholarships for bachelor's and master's programs abroad. Our consultants work tirelessly to find suitable scholarship opportunities, helping make foreign education financially accessible for Pakistani students."
  },
  {
    id: 7,
    icon: DollarSign,
    question: "How can I afford living expenses abroad?",
    answer: "Most students work part-time while studying, which helps cover living expenses and provides valuable career experience. We guide you on balancing work and studies to ensure academic success while managing finances."
  },
  {
    id: 8,
    icon: Sparkles,
    question: "Can part-time work cover all expenses?",
    answer: "While part-time jobs can significantly help with expenses, we recommend not relying solely on them for tuition fees. Your primary focus should be academics and obtaining qualifications for long-term career success. We help you find the right balance."
  }
]

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
            
            <Link to="/book-session">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fes-blue to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}