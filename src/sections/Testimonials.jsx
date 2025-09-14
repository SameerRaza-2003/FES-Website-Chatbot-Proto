import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import story1 from '../assets/stories/1.jpeg'
import story2 from '../assets/stories/2.jpeg'
import story3 from '../assets/stories/3.jpeg'
import story4 from '../assets/stories/4.jpeg'
import story5 from '../assets/stories/5.jpeg'

SwiperCore.use([Autoplay, Pagination])

const testimonials = [
  {
    name: 'Abbass Ishfaq Babar', 
    text: 'Alhamdulillah, I have received my UK study visa! A big thanks to FES and especially Mr. Moeez for guiding me at every step. From choosing the right university to preparing documents and interview tips, his support made the process so much easier. I am truly grateful and highly recommend FES and Mr. Moeez to anyone planning their study abroad journey.', 
    image: story1
  },
  {
    name: 'Ahmed Yar Khan', 
    text: 'FES helped me get into my dream university. The counselors were amazing and provided excellent guidance throughout the entire process.', 
    image: story2
  },
  {
    name: 'Owais Khan', 
    text: 'Smooth visa process and excellent pre-departure support. The team at FES made everything so easy for me.', 
    image: story3
  },
  {
    name: 'Saad Abdullah Afridi', 
    text: 'Personalised SOP helped my application stand out. I got accepted to my top choice university thanks to FES.', 
    image: story4
  },
  {
    name: 'Muhammad Khalid Khan', 
    text: 'From application to visa approval, FES made my journey to Canada seamless and stress-free. Highly recommended!', 
    image: story5
  },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-fes-blue/5 to-fes-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Real students, real achievements</p>
        </div>
        
        <Swiper 
          spaceBetween={20} 
          slidesPerView={1} 
          autoplay={{delay:4000, disableOnInteraction: false}} 
          pagination={{clickable:true, dynamicBullets: true}}
          className="testimonials-swiper"
        >
          {testimonials.map((t,idx)=>(
            <SwiperSlide key={idx}>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-fes-blue to-fes-deep rounded-3xl transform rotate-3"></div>
                  <img 
                    src={t.image} 
                    alt={`Success story of ${t.name}`}
                    className="relative w-full h-64 sm:h-80 md:h-96 object-contain rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-4xl sm:text-6xl text-fes-blue/20 font-serif">"</div>
                  <blockquote className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 font-medium">
                    {t.text}
                  </blockquote>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-fes-blue to-fes-deep rounded-full"></div>
                    <cite className="text-xl sm:text-2xl font-bold text-fes-deep not-italic">{t.name}</cite>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
