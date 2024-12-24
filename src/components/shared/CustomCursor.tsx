'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Direct position update without animation for native feel
      const cursor = document.getElementById('custom-cursor')
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`
      }
    }

    const updateCursorType = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousemove', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousemove', updateCursorType)
    }
  }, [])

  return (
    <div 
      id="custom-cursor"
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <motion.div
        className="w-full h-full bg-blue-600 rounded-full"
        animate={{
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 25
          }
        }}
      />
    </div>
  )
}