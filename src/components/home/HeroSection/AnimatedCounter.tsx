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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main content */}
      <div className="relative bg-white border-[3px] border-black 
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
                    transition-all duration-300 px-4 py-2
                    bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]">
        <span className="font-mono text-white mix-blend-overlay">
          <motion.span>{rounded}</motion.span>
          {isAnimationComplete && '+'} Years of Experience
        </span>
      </div>
    </div>
  )
}