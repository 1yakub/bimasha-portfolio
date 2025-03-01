'use client'

import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  fadeIn, 
  slideUp, 
  slideDown, 
  slideLeft, 
  slideRight, 
  scale, 
  premiumTransition 
} from './motion-div'

interface MotionSpanProps extends MotionProps {
  className?: string
  children: ReactNode
  onClick?: () => void
  variant?: 'default' | 'highlight' | 'gradient' | 'accent' | 'muted'
  preset?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none'
  delay?: number
  duration?: number
}

export default function MotionSpan({
  className,
  children,
  onClick,
  variant = 'default',
  preset = 'none',
  delay = 0,
  duration = 0.3,
  ...motionProps
}: MotionSpanProps) {
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
    default:
      variants = {}
  }
  
  // Default transition
  const defaultTransition = {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1]
  }
  
  // Variant styles
  const variantStyles = {
    default: '',
    highlight: 'bg-accent/10 text-accent px-1 py-0.5 rounded',
    gradient: 'bg-gradient-to-r from-accent to-vibrant-500 bg-clip-text text-transparent',
    accent: 'text-accent',
    muted: 'text-secondary/60 dark:text-secondary-dark/60'
  }
  
  return (
    <motion.span
      className={cn(variantStyles[variant], className)}
      onClick={onClick}
      initial={preset !== 'none' ? 'hidden' : undefined}
      animate={preset !== 'none' ? 'visible' : undefined}
      variants={Object.keys(variants).length > 0 ? variants : undefined}
      transition={motionProps.transition || defaultTransition}
      {...motionProps}
    >
      {children}
    </motion.span>
  )
} 