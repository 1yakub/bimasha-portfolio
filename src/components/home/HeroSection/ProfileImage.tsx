'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="hidden lg:block relative w-[400px] h-[400px] justify-self-center"
    >
      {/* Decorative background elements */}
      <div className="absolute -right-4 top-4 w-full h-full border-[3px] border-black opacity-10" />
      <div className="absolute -right-8 top-8 w-full h-full border-[3px] border-black opacity-5" />

      {/* Main image container */}
      <motion.div
        className="relative w-full h-full bg-white"
        whileHover={{ scale: 1.02 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        {/* Border frame */}
        <div className="absolute inset-0 border-[3px] border-black">
          {/* Terminal-like top bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center px-3 gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-white text-[10px] ml-2 opacity-60 font-mono">viewing: bimasha.jpg</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/bimasha.jpg"
            alt="Bimasha - Senior Software Engineer"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Status badge */}
          <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 
                       font-mono text-sm shadow-lg border-2 border-black
                       flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Open to Work</span>
          </div>

          {/* Image size indicator */}
          <div className="absolute top-8 left-3 px-2 py-1 bg-black/80 text-white 
                       font-mono text-[10px] rounded">
            400 x 400
          </div>

          {/* File info */}
          <div className="absolute top-8 right-3 px-2 py-1 bg-black/80 text-white 
                       font-mono text-[10px] rounded flex items-center gap-1">
            <span className="w-1 h-1 bg-blue-400 rounded-full" />
            JPG
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}