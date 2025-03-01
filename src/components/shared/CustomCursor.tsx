'use client'

import { useEffect, useState } from 'react'
import { Settings } from 'lucide-react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check if user has disabled the cursor in localStorage
    try {
      const cursorDisabled = localStorage.getItem('cursor-disabled') === 'true'
      setIsEnabled(!cursorDisabled)
      
      // Apply cursor style to body
      if (cursorDisabled) {
        document.body.style.cursor = 'auto'
      } else {
        document.body.style.cursor = 'none'
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }

    // Set initial position to center of screen
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    })

    // Direct event handler for better performance
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over a clickable element
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        setIsPointer(computedStyle.cursor === 'pointer')
      }
    }
    
    // Add event listeners
    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.body.style.cursor = 'auto'
    }
  }, [])

  const toggleCursor = () => {
    const newState = !isEnabled
    setIsEnabled(newState)
    
    try {
      localStorage.setItem('cursor-disabled', (!newState).toString())
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
    
    if (newState) {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'auto'
    }
  }

  // Don't render anything during SSR
  if (!isMounted) return null;

  if (!isEnabled) {
    return (
      <button 
        onClick={toggleCursor}
        className="fixed bottom-4 right-4 z-[9999] p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        title="Enable custom cursor"
      >
        <Settings size={16} className="text-gray-600" />
      </button>
    )
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ 
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          transition: 'transform 0.05s ease-out'
        }}
      >
        <div 
          className={`w-4 h-4 rounded-full border border-accent ${isPointer ? 'bg-accent/20' : 'bg-accent/10'}`}
          style={{
            transition: 'background-color 0.2s ease'
          }}
        />
      </div>
      
      <button 
        onClick={toggleCursor}
        className="fixed bottom-4 right-4 z-[9999] p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
        title="Disable custom cursor"
      >
        <Settings size={16} className="text-gray-600" />
      </button>
    </>
  )
}