'use client'

import { ReactNode } from 'react'
import { motion, MotionProps, Variant } from 'framer-motion'
import { cn } from '@/lib/utils'

// Premium animation presets
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const slideDown = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export const slideLeft = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

export const slideRight = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

export const scale = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
}

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } }
})

export const premiumTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17
}

interface MotionDivProps extends MotionProps {
  children: ReactNode
  className?: string
  preset?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger' | 'none'
  delay?: number
  duration?: number
  staggerChildren?: number
  delayChildren?: number
}

export default function MotionDiv({ 
  children, 
  className, 
  preset = 'none',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
  delayChildren = 0,
  ...motionProps 
}: MotionDivProps) {
  
  // Select animation preset
  let variants = {}
  
  switch (preset) {
    case 'fadeIn':
      variants = fadeIn
      break
    case 'slideUp':
      variants = slideUp
      break
    case 'slideDown':
      variants = slideDown
      break
    case 'slideLeft':
      variants = slideLeft
      break
    case 'slideRight':
      variants = slideRight
      break
    case 'scale':
      variants = scale
      break
    case 'stagger':
      variants = stagger(staggerChildren, delayChildren)
      break
    default:
      variants = {}
  }
  
  // Default transition
  const defaultTransition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1]
  }
  
  return (
    <motion.div 
      className={cn(className)}
      initial={preset !== 'none' ? 'hidden' : undefined}
      animate={preset !== 'none' ? 'visible' : undefined}
      variants={Object.keys(variants).length > 0 ? variants : undefined}
      transition={motionProps.transition || defaultTransition}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
} 