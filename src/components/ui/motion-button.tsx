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

interface MotionButtonProps extends MotionProps {
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'premium'
  size?: 'sm' | 'md' | 'lg'
  preset?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none'
  delay?: number
  duration?: number
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function MotionButton({
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  preset = 'none',
  delay = 0,
  duration = 0.3,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ...motionProps
}: MotionButtonProps) {
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
    primary: 'bg-accent hover:bg-accent-dark text-white shadow-sm',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white shadow-sm',
    outline: 'bg-transparent border border-accent text-accent hover:bg-accent/10',
    ghost: 'bg-transparent hover:bg-background-dark/10 dark:hover:bg-background/10 text-secondary dark:text-secondary-dark',
    link: 'bg-transparent text-accent hover:underline p-0 h-auto',
    premium: 'bg-gradient-to-r from-accent to-vibrant-500 hover:from-accent-dark hover:to-vibrant-600 text-white shadow-luxury'
  }
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 rounded-md',
    md: 'text-base px-4 py-2 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-lg'
  }
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Disabled style
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20';
  
  return (
    <motion.button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyle,
        disabledStyle,
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      initial={preset !== 'none' ? 'hidden' : undefined}
      animate={preset !== 'none' ? 'visible' : undefined}
      variants={Object.keys(variants).length > 0 ? variants : undefined}
      transition={motionProps.transition || defaultTransition}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...motionProps}
    >
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </motion.button>
  )
} 