import { useState, useEffect } from 'react'

// Reusable animated counter hook
export const useAnimatedCounter = (target, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Handle different target types
      let currentCount
      if (typeof target === 'number') {
        currentCount = Math.floor(progress * target)
      } else {
        currentCount = Math.floor(progress * parseInt(target))
      }
      
      setCount(currentCount)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration])
  
  return count + suffix
}

// Simplified counter hook for basic counting
export const useCounter = (target, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime = null
    const startValue = 0
    const endValue = typeof target === 'number' ? target : parseInt(target)

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentCount = Math.floor(
        progress * (endValue - startValue) + startValue
      )

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return count + suffix
}
