'use client'

import { motion } from 'framer-motion'
import { apiResponse } from './constants'

export default function ApiIntroduction() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-mono text-sm bg-white dark:bg-navy-800 p-4 rounded-lg border border-gray-200 dark:border-navy-600
                shadow-luxury dark:shadow-luxury-dark overflow-hidden relative
                group hover:shadow-luxury-hover dark:hover:shadow-luxury-hover-dark
                transition-all duration-300"
    >
      {/* Terminal Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-cadet dark:bg-cadet-dark flex items-center px-2 gap-1">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-white text-xs ml-2">api.bimasha.dev</span>
      </div>
      
      <div className="mt-6 space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-persimmon dark:text-persimmon-light">fetch</span>
          <span className="text-gray-600 dark:text-gray-400">(</span>
          <span className="text-forest dark:text-forest-light">'https://api.bimasha.dev/info'</span>
          <span className="text-gray-600 dark:text-gray-400">)</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 dark:text-gray-400"
        >
          {".then(response => response.json())"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 dark:bg-navy-700 p-3 rounded-md"
        >
          <span className="text-gray-400 dark:text-gray-500">// Response</span>
          <div className="space-y-1">
            <div className="text-gray-700 dark:text-gray-300">{"{"}</div>
            <div className="ml-4 text-gray-700 dark:text-gray-300">
              "name": <span className="text-forest dark:text-forest-light">"{apiResponse.dev.name}"</span>,
            </div>
            <div className="ml-4 text-gray-700 dark:text-gray-300">
              "role": <span className="text-forest dark:text-forest-light">"{apiResponse.dev.role}"</span>,
            </div>
            <div className="ml-4 text-gray-700 dark:text-gray-300">
              "status": <span className="text-mandarin dark:text-mandarin-light">{apiResponse.dev.status}</span>,
            </div>
            <div className="ml-4 text-gray-700 dark:text-gray-300">
              "message": <span className="text-forest dark:text-forest-light">"{apiResponse.dev.message}"</span>
            </div>
            <div className="text-gray-700 dark:text-gray-300">{"}"}</div>
          </div>
        </motion.div>
      </div>

      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-8 right-4 px-2 py-0.5 bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light
                   text-xs rounded-md border border-cadet/20 dark:border-cadet-light/20"
      >
        200 OK
      </motion.div>
    </motion.div>
  )
}