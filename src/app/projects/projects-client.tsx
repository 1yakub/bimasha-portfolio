'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import { ArrowUpRight, Github, ExternalLink, ArrowLeft, Code } from 'lucide-react'
import Link from 'next/link'
import MotionLink from '@/components/ui/motion-link'
import MotionDiv from '@/components/ui/motion-div'

// Project data - same as in ProjectsGrid component
const projects = [
  {
    title: 'Life Coach Hub',
    description: 'A premium platform connecting life coaches with clients seeking personal development guidance. Features include coach profiles, session booking, and secure payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://lifecoachhub.vercel.app',
    githubUrl: 'https://github.com/bimasha/lifecoachhub',
    image: '/images/project-lifecoach.svg',
    accentColor: 'bg-blue-500',
    featured: true,
  },
  {
    title: 'AI Assistant Platform',
    description: 'An intelligent conversation interface powered by advanced language models. Provides contextual responses, memory of past interactions, and multi-modal capabilities.',
    tags: ['Next.js', 'OpenAI API', 'TailwindCSS', 'TypeScript'],
    demoUrl: 'https://ai-assistant-platform.vercel.app',
    githubUrl: 'https://github.com/bimasha/ai-assistant',
    image: '/images/project-ai-assistant.svg',
    accentColor: 'bg-rose-500',
    featured: true,
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Business intelligence platform with real-time data visualization and reporting. Includes customizable widgets, data filtering, and export capabilities.',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
    demoUrl: 'https://data-analytics-dashboard.vercel.app',
    githubUrl: 'https://github.com/bimasha/data-analytics',
    image: '/images/project-analytics.svg',
    accentColor: 'bg-blue-500',
    featured: true,
  },
  {
    title: "FinTech Dashboard",
    description: "Comprehensive financial analytics dashboard with real-time data visualization, portfolio management, and investment tracking. Includes market trends and predictive analytics.",
    tags: ["React", "Node.js", "Chart.js", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/images/fintech-vector.svg",
    accentColor: "vibrant",
    featured: false,
  },
  {
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with advanced product filtering, payment processing, inventory management, and analytics. Features responsive design and SEO optimization.",
    tags: ["Laravel", "Vue.js", "MySQL", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/images/ecommerce-vector.svg",
    accentColor: "accent",
    featured: false,
  }
]

export default function ProjectsClient() {
  return (
    <div className="py-24 relative overflow-hidden elegant-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      
      <Container>
        <div className="space-y-16 relative z-10">
          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="premium-link"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
          </motion.div>
          
          {/* Page Header */}
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-12 h-3 bg-accent"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-widest">PORTFOLIO</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              My <span className="modern-gradient-text">Projects</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              A comprehensive collection of my work across various technologies and industries. 
              Each project represents a unique challenge and solution.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  // Determine which classes to use based on the accent color
  const offsetClass = project.accentColor === "vibrant" ? "brutalist-offset-vibrant" : "brutalist-offset";
  const tagClass = project.accentColor === "vibrant" ? "premium-tag premium-tag-vibrant" : "premium-tag premium-tag-accent";
  const buttonClass = project.accentColor === "vibrant" ? "bg-gradient-vibrant" : "bg-gradient-accent";
  const gradientClass = project.accentColor === "vibrant" ? "bg-gradient-to-tr from-vibrant-500/20 to-transparent" : "bg-gradient-to-tr from-accent/20 to-transparent";
  const borderColor = project.accentColor === "vibrant" ? "border-vibrant-500" : "border-accent";
  const textColor = project.accentColor === "vibrant" ? "text-vibrant-500" : "text-accent";
  const linkClass = project.accentColor === "vibrant" ? "premium-link-vibrant" : "premium-link";
  
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden group"
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 text-sm bg-gray-100 dark:bg-navy-700 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.demoUrl && (
            <MotionLink
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent dark:text-accent-dark hover:opacity-80 transition-opacity"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </MotionLink>
          )}
          {project.githubUrl && (
            <MotionLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              whileHover={{ x: 5 }}
            >
              <Github size={16} />
              <span>View Code</span>
            </MotionLink>
          )}
        </div>
      </div>
    </MotionDiv>
  )
} 