'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check if user has a theme preference in localStorage
    try {
      const savedTheme = localStorage.getItem('theme')
      
      // Default to light mode instead of system preference
      const initialDarkMode = savedTheme === 'dark'
      setIsDarkMode(initialDarkMode)
      
      // Apply theme to document
      applyTheme(initialDarkMode)
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    
    try {
      localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
    
    applyTheme(newDarkMode)
  }
  
  const applyTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Don't render anything during SSR
  if (!isMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {showTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-white dark:bg-navy-700 text-sm rounded-md shadow-md border border-gray-200 dark:border-navy-500 whitespace-nowrap"
        >
          {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        </motion.div>
      )}
      
      <motion.button 
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-3.5 bg-white dark:bg-navy-700 backdrop-blur-sm border-2 border-gray-200 dark:border-navy-500 rounded-full shadow-brutalist-sm dark:shadow-brutalist-dark hover:shadow-brutalist transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {isDarkMode ? (
            <Sun size={22} className="text-vibrant-500 dark:text-vibrant-400" />
          ) : (
            <Moon size={22} className="text-accent dark:text-accent-dark" />
          )}
        </motion.div>
        
        <span className="sr-only">{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</span>
      </motion.button>
    </div>
  )
} 