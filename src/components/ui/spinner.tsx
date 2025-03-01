'use client'

import { motion } from 'framer-motion'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'accent' | 'vibrant' | 'white'
  className?: string
}

export default function Spinner({ 
  size = 'md', 
  color = 'accent',
  className = ''
}: SpinnerProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  const colorMap = {
    accent: 'border-accent dark:border-accent-dark',
    vibrant: 'border-vibrant-500 dark:border-vibrant-400',
    white: 'border-white'
  }
  
  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
      <motion.div 
        className={`absolute inset-0 rounded-full border-2 border-t-transparent ${colorMap[color]}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className={`absolute inset-0 rounded-full border-2 border-l-transparent border-r-transparent opacity-30 ${colorMap[color]}`}
        animate={{ rotate: -180 }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 