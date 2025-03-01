'use client'

import { motion } from 'framer-motion'

// SVG Icons
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a 
          href="https://github.com/bimashazaman"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 rounded-full group"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 
                        group-hover:opacity-20 blur-md transition-opacity duration-300" />
          
          {/* Border container */}
          <div className="relative p-2 rounded-full border border-gray-200 dark:border-navy-600
                        overflow-hidden transition-colors duration-300 text-gray-700 dark:text-gray-300
                        group-hover:border-gray-800 dark:group-hover:border-gray-400 
                        bg-white dark:bg-navy-800 shadow-sm">
            <GithubIcon />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a 
          href="https://www.linkedin.com/in/bimasha-zaman/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 rounded-full group"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cadet to-cadet-light opacity-0 
                        group-hover:opacity-20 blur-md transition-opacity duration-300" />
          
          {/* Border container */}
          <div className="relative p-2 rounded-full border border-gray-200 dark:border-navy-600
                        overflow-hidden transition-colors duration-300 text-gray-700 dark:text-gray-300
                        group-hover:border-cadet dark:group-hover:border-cadet-light 
                        bg-white dark:bg-navy-800 shadow-sm">
            <LinkedinIcon />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cadet to-cadet-light opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </a>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a 
          href="https://twitter.com/bimashazaman"
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2 rounded-full group"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mandarin to-persimmon opacity-0 
                        group-hover:opacity-20 blur-md transition-opacity duration-300" />
          
          {/* Border container */}
          <div className="relative p-2 rounded-full border border-gray-200 dark:border-navy-600
                        overflow-hidden transition-colors duration-300 text-gray-700 dark:text-gray-300
                        group-hover:border-mandarin dark:group-hover:border-mandarin-light 
                        bg-white dark:bg-navy-800 shadow-sm">
            <TwitterIcon />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-mandarin to-persimmon opacity-0 
                          group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </a>
      </motion.div>
    </div>
  )
}