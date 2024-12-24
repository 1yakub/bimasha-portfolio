'use client'

import { motion } from 'framer-motion'

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Code-like elements */}
      <div className="absolute right-10 top-20 font-mono text-gray-200 text-6xl opacity-20">{'{ }'}</div>
      <div className="absolute left-10 bottom-20 font-mono text-gray-200 text-4xl opacity-20">{'</>'}</div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-40 w-24 h-24 border-[3px] border-blue-100 rotate-45" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-[3px] border-gray-100" />
      <div className="absolute top-40 left-40 w-16 h-16 bg-blue-100/20" />
      
      {/* Dots pattern */}
      <div className="absolute right-24 top-1/3 grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
        ))}
      </div>
      
      {/* Tech-inspired elements */}
      <div className="absolute left-1/4 top-20 text-gray-200 opacity-20 text-sm font-mono">
        {"function() { }"}
      </div>
      <div className="absolute right-1/3 bottom-32 text-gray-200 opacity-20 text-sm font-mono">
        {"<div/>"}
      </div>
      
      {/* Animated circles */}
      <motion.div
        className="absolute left-20 top-1/4 w-12 h-12 rounded-full border-2 border-gray-100 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Gradient blob */}
      <div className="absolute right-1/4 top-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-30 blur-3xl" />
      
      {/* Lines */}
      <div className="absolute left-1/3 top-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />
      <div className="absolute right-1/4 bottom-0 w-px h-40 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />
      
      {/* Small decorative elements */}
      <motion.div
        className="absolute right-40 bottom-40 text-2xl opacity-20"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        ⚡
      </motion.div>
      
      {/* Code-inspired floating elements */}
      <motion.div
        className="absolute left-1/3 bottom-20 text-gray-200 opacity-20 font-mono"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {"import { future } from 'tech'"}
      </motion.div>
    </div>
  )
}