'use client'

import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import Link from 'next/link'
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

interface MotionLinkProps extends MotionProps {
  href: string
  className?: string
  children: ReactNode
  target?: string
  rel?: string
  onClick?: () => void
  useNextLink?: boolean
  variant?: 'default' | 'underline' | 'highlight' | 'button' | 'ghost'
  preset?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'none'
  delay?: number
  duration?: number
  tabIndex?: number
}

export default function MotionLink({
  href,
  className,
  children,
  target,
  rel,
  onClick,
  useNextLink = true,
  variant = 'default',
  preset = 'none',
  delay = 0,
  duration = 0.3,
  tabIndex,
  ...motionProps
}: MotionLinkProps) {
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
    underline: 'relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300',
    highlight: 'relative px-2 py-1 rounded-md hover:bg-accent/10 transition-colors duration-200',
    button: 'px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-dark transition-colors duration-200 shadow-sm',
    ghost: 'px-4 py-2 rounded-md hover:bg-background-dark/10 dark:hover:bg-background/10 transition-colors duration-200'
  }
  
  const linkContent = (
    <motion.span
      className="inline-block"
      initial={preset !== 'none' ? 'hidden' : undefined}
      animate={preset !== 'none' ? 'visible' : undefined}
      variants={Object.keys(variants).length > 0 ? variants : undefined}
      transition={motionProps.transition || defaultTransition}
      {...motionProps}
    >
      {children}
    </motion.span>
  )
  
  if (useNextLink) {
    return (
      <Link
        href={href}
        className={cn(variantStyles[variant], className)}
        target={target}
        rel={rel}
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {linkContent}
      </Link>
    )
  }
  
  return (
    <a
      href={href}
      className={cn(variantStyles[variant], className)}
      target={target}
      rel={rel}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {linkContent}
    </a>
  )
} 