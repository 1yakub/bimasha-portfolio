'use client'

import { motion } from 'framer-motion'

const techStack = [
  // First row - Primary skills
  { 
    name: 'Laravel',
    color: '#FF2D20',
    icon: '🔸',
    years: 6,
    bgColor: '#FFF5F5',
    primary: true
  },
  { 
    name: 'Next.js',
    color: '#000000',
    icon: '▲',
    years: 3,
    bgColor: '#F8F9FA',
    primary: true
  },
  { 
    name: 'React',
    color: '#61DAFB',
    icon: '⚛️',
    years: 5,
    bgColor: '#F0FBFF',
    primary: true
  },
  // Second row - Supporting skills
  { 
    name: 'TypeScript',
    color: '#3178C6',
    icon: '📘',
    years: 4,
    bgColor: '#EDF2FF'
  },
  { 
    name: 'Node.js',
    color: '#339933',
    icon: '🟢',
    years: 5,
    bgColor: '#F0FFF4'
  },
  { 
    name: 'AWS',
    color: '#FF9900',
    icon: '☁️',
    years: 4,
    bgColor: '#FFFAF0'
  }
]

export default function TechStack() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="space-y-2" // Gap between rows
    >
      {/* Main skills row */}
      <div className="flex gap-2">
        {techStack.filter(tech => tech.primary).map((tech, i) => (
          <TechBadge key={i} tech={tech} />
        ))}
      </div>

      {/* Supporting skills row */}
      <div className="flex gap-2">
        {techStack.filter(tech => !tech.primary).map((tech, i) => (
          <TechBadge key={i} tech={tech} />
        ))}
      </div>
    </motion.div>
  )
}

// Separated TechBadge component for cleaner code
function TechBadge({ tech }: { tech: any }) {
  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {/* Neo-brutalist tooltip */}
      <motion.div 
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
      >
        <div className="relative bg-white border-2 border-black px-3 py-1 text-xs font-medium
                       shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {tech.years}+ years experience
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                         w-4 h-4 bg-white border-b-2 border-r-2 border-black 
                         rotate-45 -z-10" />
        </div>
      </motion.div>

      {/* Tech badge */}
      <div 
        className="group px-3 py-1 rounded-full text-sm transition-all duration-300
                   hover:ring-2 hover:ring-opacity-50 relative overflow-hidden"
        style={{
          backgroundColor: tech.bgColor,
          ringColor: tech.color,
          color: tech.color
        }}
      >
        <div className="relative z-10 flex items-center gap-2">
          <span className="text-lg">{tech.icon}</span>
          <span>{tech.name}</span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            background: tech.color
          }}
        />
      </div>
    </motion.div>
  )
}