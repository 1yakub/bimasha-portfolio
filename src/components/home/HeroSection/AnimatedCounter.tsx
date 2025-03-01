'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedCounter() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const animation = animate(count, 10, {
      duration: 1,
      onComplete: () => {
        setIsAnimationComplete(true)
      },
    })

    return animation.stop
  }, [count])

  return (
    <div className="inline-block relative group">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />
      
      {/* Main content */}
      <div className="relative bg-cadet dark:bg-cadet-dark text-white
                    rounded-md shadow-premium hover:shadow-premium-hover
                    transition-all duration-300 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="font-mono font-semibold tracking-wide">
            <motion.span className="text-lg">{rounded}</motion.span>
            {isAnimationComplete && '+'}
          </span>
          <span className="text-sm font-medium">Years of Experience</span>
        </div>
      </div>
    </div>
  )
}