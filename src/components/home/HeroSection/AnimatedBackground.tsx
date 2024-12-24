'use client'

import { motion } from 'framer-motion'

const codeSnippets = [
  'const future = await buildScalableSolution();',
  'export class Innovation implements Success',
  'function optimizePerformance(): Promise<Result>',
  'interface ScalableSolution extends Reliable',
  'type Experience = Expertise & Innovation;'
]

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [-20, 0, 0, 20]
          }}
          transition={{
            duration: 10,
            delay: i * 2,
            repeat: Infinity,
            repeatDelay: codeSnippets.length * 2
          }}
          className={`absolute font-mono text-sm ${
            i % 2 === 0 ? 'left-1/4' : 'right-1/4'
          } ${
            i % 3 === 0 ? 'top-1/4' : i % 3 === 1 ? 'top-1/2' : 'top-3/4'
          }`}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
}