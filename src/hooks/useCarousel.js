import { useState, useEffect } from 'react'

// Reusable carousel hook
export const useCarousel = (items, autoRotateInterval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!autoRotateInterval || items.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length)
    }, autoRotateInterval)
    
    return () => clearInterval(interval)
  }, [items.length, autoRotateInterval])
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length)
  }
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }
  
  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    setCurrentSlide
  }
}
