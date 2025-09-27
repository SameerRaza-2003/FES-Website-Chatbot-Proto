import React from 'react'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

const AnimatedCounter = ({ 
  end, 
  duration = 3000, 
  suffix = "", 
  className = "",
  ...props 
}) => {
  const count = useAnimatedCounter(end, duration, suffix)
  
  return (
    <span className={className} {...props}>
      {count}
    </span>
  )
}

export default AnimatedCounter
