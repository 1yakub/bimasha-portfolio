'use client'

import { motion } from 'framer-motion'
import { apiResponse } from './constants'

export default function ApiIntroduction() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-mono text-sm bg-gray-50 p-4 rounded-lg border-2 border-black 
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative
                group hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                transition-all duration-300"
    >
      {/* Terminal Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center px-2 gap-1">
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
          <span className="text-purple-600">fetch</span>
          <span className="text-gray-600">(</span>
          <span className="text-green-600">'https://api.bimasha.dev/info'</span>
          <span className="text-gray-600">)</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500"
        >
          .then(response => response.json())
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-100 p-3 rounded-md"
        >
          <span className="text-gray-400">// Response</span>
          <div className="space-y-1">
            <div>{"{"}</div>
            <div className="ml-4">
              "name": <span className="text-green-600">"{apiResponse.dev.name}"</span>,
            </div>
            <div className="ml-4">
              "role": <span className="text-green-600">"{apiResponse.dev.role}"</span>,
            </div>
            <div className="ml-4">
              "status": <span className="text-orange-600">{apiResponse.dev.status}</span>,
            </div>
            <div className="ml-4">
              "message": <span className="text-green-600">"{apiResponse.dev.message}"</span>
            </div>
            <div>{"}"}</div>
          </div>
        </motion.div>
      </div>

      {/* Status Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-8 right-4 px-2 py-0.5 bg-green-100 text-green-800 
                   text-xs rounded-full border border-green-300"
      >
        200 OK
      </motion.div>
    </motion.div>
  )
}