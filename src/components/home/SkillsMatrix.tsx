'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'

interface Skill {
  category: string
  icon: string
  items: {
    name: string
    level: number // 1-5
    color?: string
  }[]
  certifications?: {
    name: string
    issuer?: string
    date?: string
  }[]
}

const skills: Skill[] = [
  {
    category: 'Frontend Development',
    icon: '🎨',
    items: [
      { name: 'React/Next.js', level: 5, color: '#3B82F6' },
      { name: 'TypeScript', level: 5, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 4, color: '#38B2AC' },
      { name: 'UI/UX Design', level: 4, color: '#F43F5E' }
    ]
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 4, color: '#339933' },
      { name: 'Laravel', level: 5, color: '#F43F5E' },
      { name: 'REST APIs', level: 5, color: '#3B82F6' },
      { name: 'GraphQL', level: 4, color: '#E535AB' }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    icon: '🚀',
    items: [
      { name: 'AWS', level: 4, color: '#FF9900' },
      { name: 'Docker', level: 4, color: '#2496ED' },
      { name: 'CI/CD', level: 4, color: '#4CAF50' },
      { name: 'Kubernetes', level: 3, color: '#326CE5' }
    ]
  },
  {
    category: 'Database & Storage',
    icon: '💾',
    items: [
      { name: 'MySQL', level: 5, color: '#4479A1' },
      { name: 'MongoDB', level: 4, color: '#47A248' },
      { name: 'Redis', level: 4, color: '#DC382D' },
      { name: 'PostgreSQL', level: 4, color: '#336791' }
    ]
  }
]

export default function SkillsMatrix() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div 
              key={category.category}
              className="brutalist-container overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className={index % 3 === 0 ? "brutalist-offset" : index % 3 === 1 ? "brutalist-offset-vibrant" : "brutalist-offset-dark"}></div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * skillIndex }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${getSkillColor(index)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (0.1 * skillIndex) }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {category.certifications && (
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 mb-3">Certifications</h4>
                    <div className="space-y-2">
                      {category.certifications.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-md text-sm flex items-center gap-2 group"
                          >
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <span>{cert.name}</span>
                            <motion.svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="14" 
                              height="14" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ x: -5 }}
                              whileHover={{ x: 0, rotate: 45 }}
                            >
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                            </motion.svg>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="luxury-button-accent inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Download Full Resume</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="relative z-10"
                whileHover={{ y: 2 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </motion.svg>
              <span className="absolute inset-0 bg-accent/20 dark:bg-accent-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to get skill color based on index
function getSkillColor(index: number) {
  switch (index % 3) {
    case 0:
      return 'bg-accent';
    case 1:
      return 'bg-vibrant-500';
    case 2:
      return 'bg-gray-800 dark:bg-gray-200';
    default:
      return 'bg-accent';
  }
}

// Helper function to convert hex color to RGB
function hexToRgb(hex: string): string {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}