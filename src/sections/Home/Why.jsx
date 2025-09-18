import React from 'react'
import { GraduationCap, Globe, Users, BookOpen, Award, Shield } from 'lucide-react'

const items = [
  {icon: GraduationCap, title: 'Expert Counselors', text: 'Years of admissions experience across disciplines.'},
  {icon: Globe, title: 'Global Partnerships', text: 'Universities across North America, UK, EU, Australia.'},
  {icon: Users, title: 'Personalized Plans', text: 'Tailored strategies for each applicant.'},
  {icon: BookOpen, title: 'Full Services', text: 'From application to post-arrival support.'},
  {icon: Award, title: '95% Success Rate', text: 'Proven track record of successful admissions.'},
  {icon: Shield, title: 'Visa Guarantee', text: 'Comprehensive visa support with high approval rates.'},
]

export default function Why(){
  return (
    <section id="why-us" className="py-8 sm:py-12 md:py-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-left mb-8 sm:mb-12">
          Why Choose <span className="gradient-text">FES</span>?
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it,idx)=>{
            const Icon = it.icon
            return (
              <div key={idx} className="glass p-4 sm:p-6 hover:scale-105 transition-transform">
                <Icon className="w-8 h-8 text-fes-deep mb-4"/>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-500 mt-2">{it.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
