'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="hidden lg:block relative w-[400px] h-[400px] justify-self-center"
    >
      {/* Decorative background elements */}
      <div className="absolute -right-4 top-4 w-full h-full border-[3px] border-black dark:border-white dark:opacity-20 opacity-10" />
      <div className="absolute -right-8 top-8 w-full h-full border-[3px] border-black dark:border-white dark:opacity-10 opacity-5" />

      {/* Main image container */}
      <motion.div
        className="relative w-full h-full bg-white dark:bg-navy-800"
        whileHover={{ scale: 1.02 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Border frame */}
        <div className="absolute inset-0 border-[3px] border-black dark:border-white dark:border-opacity-80 z-20">
          {/* Terminal-like top bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black dark:bg-navy-900 flex items-center px-3 gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-white text-[10px] ml-2 opacity-60 font-mono">viewing: {imageError ? 'bimasha2.jpg' : 'bimasha.png'}</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={imageError ? "/images/bimasha2.jpg" : "/images/bimasha.png"}
            alt="Bimasha - Senior Software Engineer"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            onError={() => setImageError(true)}
          />
          
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-vibrant-500/5 dark:from-accent-dark/15 dark:to-vibrant-400/10 z-10"></div>
          
          {/* Status badge */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-white dark:bg-navy-700 text-primary dark:text-white px-3 py-1 
                       font-mono text-sm shadow-brutalist dark:shadow-brutalist-dark border-2 border-black dark:border-white
                       flex items-center gap-2 z-30"
            whileHover={{ y: -2, x: -2 }}
          >
            <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full animate-pulse" />
            <span>Open to Work</span>
          </motion.div>

          {/* Image size indicator */}
          <div className="absolute top-8 left-3 px-2 py-1 bg-black/80 dark:bg-navy-900/90 text-white 
                       font-mono text-[10px] rounded z-30">
            400 x 400
          </div>

          {/* File info */}
          <div className="absolute top-8 right-3 px-2 py-1 bg-black/80 dark:bg-navy-900/90 text-white 
                       font-mono text-[10px] rounded flex items-center gap-1 z-30">
            <span className="w-1 h-1 bg-accent dark:bg-accent-dark rounded-full" />
            {imageError ? 'JPG' : 'PNG'}
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-10 z-10"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}