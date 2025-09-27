import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Sparkles, Search, Calendar } from 'lucide-react'

// AI Assistant Button Component
export const AIAssistantButton = ({ 
  title = "AI Assistant", 
  className = "", 
  size = "medium",
  variant = "primary",
  onClick,
  ...props 
}) => {
  const navigate = useNavigate()
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-10 py-5 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-fes-blue to-fes-deep text-white hover:shadow-lg",
    outline: "border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white",
    large: "bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold shadow-2xl hover:shadow-blue-500/50"
  }
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate('/recommendations')
    }
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`inline-flex items-center rounded-full transform transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <MessageCircle className={`${size === 'large' ? 'w-6 h-6' : 'w-4 h-4'} mr-2`} />
      <span>{title}</span>
    </motion.button>
  )
}

// Book Session Button Component
export const BookSessionButton = ({ 
  title = "Book Session", 
  className = "", 
  size = "medium",
  variant = "primary",
  onClick,
  ...props 
}) => {
  const navigate = useNavigate()
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-10 py-5 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl",
    outline: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    large: "bg-gradient-to-r from-green-400 to-emerald-600 text-white font-bold shadow-2xl hover:shadow-green-500/50"
  }
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate('/book-session')
    }
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`inline-flex items-center rounded-full transform transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <Sparkles className={`${size === 'large' ? 'w-6 h-6' : 'w-4 h-4'} mr-2`} />
      <span>{title}</span>
    </motion.button>
  )
}

// Course Finder Button Component
export const CourseFinderButton = ({ 
  title = "Course Finder", 
  className = "", 
  size = "medium",
  variant = "primary",
  onClick,
  ...props 
}) => {
  const navigate = useNavigate()
  
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-10 py-5 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-fes-deep text-white hover:bg-blue-900",
    outline: "border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white",
    white: "bg-white text-fes-blue hover:bg-gray-100"
  }
  
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate('/course-finder')
    }
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`inline-flex items-center rounded-full font-semibold transform transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <Search className={`${size === 'large' ? 'w-6 h-6' : 'w-4 h-4'} mr-2`} />
      <span>{title}</span>
    </motion.button>
  )
}

// Combined Action Buttons Component for common layouts
export const ActionButtonGroup = ({ 
  showAI = true, 
  showBookSession = true, 
  showCourseFinder = true,
  aiTitle = "Talk with Virtual Assistant",
  bookTitle = "Book Consultation", 
  courseTitle = "Find Courses",
  layout = "horizontal", // horizontal, vertical, grid
  size = "large",
  className = ""
}) => {
  const layoutClasses = {
    horizontal: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center",
    vertical: "flex flex-col gap-4 justify-center items-center",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
  }
  
  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      {showAI && (
        <AIAssistantButton 
          title={aiTitle} 
          size={size} 
          variant={size === 'large' ? 'large' : 'primary'} 
        />
      )}
      {showCourseFinder && (
        <CourseFinderButton 
          title={courseTitle} 
          size={size} 
          variant={size === 'large' ? 'white' : 'primary'} 
        />
      )}
      {showBookSession && (
        <BookSessionButton 
          title={bookTitle} 
          size={size} 
          variant={size === 'large' ? 'large' : 'primary'} 
        />
      )}
    </div>
  )
}

// Link versions for navbar usage
export const AIAssistantLink = ({ 
  title = "AI Assistant", 
  className = "", 
  size = "medium",
  variant = "primary",
  onClick,
  ...props 
}) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-fes-blue to-fes-deep text-white hover:shadow-lg",
    outline: "border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white"
  }
  
  return (
    <Link
      to="/recommendations"
      onClick={onClick}
      className={`inline-flex items-center rounded-full transform transition-all duration-300 text-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      <span>{title}</span>
    </Link>
  )
}

export const BookSessionLink = ({ 
  title = "Book Session", 
  className = "", 
  size = "medium",
  variant = "primary",
  onClick,
  ...props 
}) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl",
    outline: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
  }
  
  return (
    <Link
      to="/book-session"
      onClick={onClick}
      className={`inline-flex items-center rounded-full transform hover:scale-105 transition-all duration-300 text-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <Sparkles className="w-4 h-4 mr-2" />
      <span>{title}</span>
    </Link>
  )
}

export const CourseFinderLink = ({ 
  title = "Course Finder", 
  className = "", 
  size = "medium",
  variant = "outline",
  onClick,
  ...props 
}) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-3 py-1.5",
    large: "px-6 py-3 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-fes-deep text-white hover:bg-blue-900",
    outline: "border border-fes-blue text-fes-blue hover:bg-fes-blue hover:text-white"
  }
  
  return (
    <Link
      to="/course-finder"
      onClick={onClick}
      className={`inline-flex items-center rounded-full font-medium transform transition-all duration-300 text-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <Search className="w-4 h-4 mr-2" />
      <span>{title}</span>
    </Link>
  )
}
