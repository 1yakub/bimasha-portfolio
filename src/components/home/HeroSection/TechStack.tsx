'use client'

import { motion } from 'framer-motion'

const techStack = [
  // First row - Primary skills
  { 
    name: 'Laravel',
    color: '#FF2D20',
    icon: '🔸',
    years: 6,
    bgColor: 'rgba(255, 45, 32, 0.05)',
    primary: true
  },
  { 
    name: 'Next.js',
    color: '#000000',
    icon: '▲',
    years: 3,
    bgColor: 'rgba(0, 0, 0, 0.03)',
    primary: true
  },
  { 
    name: 'React',
    color: '#61DAFB',
    icon: '⚛️',
    years: 5,
    bgColor: 'rgba(97, 218, 251, 0.05)',
    primary: true
  },
  // Second row - Supporting skills
  { 
    name: 'TypeScript',
    color: '#3178C6',
    icon: '📘',
    years: 4,
    bgColor: 'rgba(49, 120, 198, 0.05)'
  },
  { 
    name: 'Node.js',
    color: '#339933',
    icon: '🟢',
    years: 5,
    bgColor: 'rgba(51, 153, 51, 0.05)'
  },
  { 
    name: 'AWS',
    color: '#FF9900',
    icon: '☁️',
    years: 4,
    bgColor: 'rgba(255, 153, 0, 0.05)'
  }
]

export default function TechStack() {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2">
        <span className="w-5 h-px bg-accent"></span>
        Tech Expertise
      </h4>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-3" // Gap between rows
      >
        {/* Main skills row */}
        <div className="flex flex-wrap gap-2">
          {techStack.filter(tech => tech.primary).map((tech, i) => (
            <TechBadge 
              key={i} 
              tech={tech} 
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Supporting skills row */}
        <div className="flex flex-wrap gap-2">
          {techStack.filter(tech => !tech.primary).map((tech, i) => (
            <TechBadge 
              key={i} 
              tech={tech} 
              delay={i * 0.1 + 0.3}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// Separated TechBadge component for cleaner code
function TechBadge({ tech, delay = 0 }: { tech: any; delay?: number }) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Luxury tooltip */}
      <motion.div 
        className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
      >
        <div className="relative glass-panel px-3 py-1.5 text-xs font-medium shadow-premium">
          {tech.years}+ years experience
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 
                         w-3 h-3 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20
                         rotate-45 -z-10" />
        </div>
      </motion.div>

      {/* Tech badge */}
      <div 
        className="group px-3.5 py-1.5 rounded-full text-sm transition-all duration-300
                   border border-gray-100 shadow-sm hover:shadow-md relative overflow-hidden backdrop-blur-sm"
        style={{
          backgroundColor: tech.bgColor,
        }}
      >
        <div className="relative z-10 flex items-center gap-2">
          <span className="text-lg">{tech.icon}</span>
          <span style={{ color: tech.color }} className="font-medium">{tech.name}</span>
        </div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${tech.color} 0%, transparent 100%)`
          }}
        />
        
        {/* Gold accent dot */}
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-accent opacity-40"></div>
      </div>
    </motion.div>
  )
}