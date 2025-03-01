'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

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
    bgPattern: 'elegant-pattern'
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
    bgPattern: 'modern-pattern'
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
    bgPattern: 'subtle-dots'
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
    bgPattern: 'elegant-pattern'
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
    bgPattern: 'modern-pattern'
  }
]

export default function ProjectsGrid() {
  // Filter featured projects for the top section
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden elegant-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      
      <Container>
        <div className="space-y-16 relative z-10">
          {/* Section Header */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-12 h-3 bg-accent"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-widest">PORTFOLIO</span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Featured <span className="modern-gradient-text">Projects</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Explore a selection of my most impactful work, showcasing expertise in creating elegant, 
              scalable solutions across various industries and technologies.
            </motion.p>
          </div>

          {/* Featured Projects - Larger Cards */}
          <div className="grid grid-cols-1 gap-16">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          {/* Other Projects - Grid Layout */}
          {otherProjects.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">More Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project, index) => (
                  <CompactProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
          
          {/* View All Projects Button */}
          <div className="flex justify-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href="/projects" 
                className="luxury-button-accent inline-flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">View All Projects</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                <ArrowUpRight size={16} />
                </motion.div>
                <span className="absolute inset-0 bg-accent/20 dark:bg-accent-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Featured project card with large image and detailed info
function FeaturedProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className={`relative group ${project.bgPattern || 'elegant-pattern'}`}
    >
      <div className="relative brutalist-container overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className={index % 2 === 0 ? "brutalist-offset" : "brutalist-offset-vibrant"}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Project Image */}
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-black order-1 md:order-none">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.img 
                        src={project.image}
                        alt={project.title}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            
            {/* Project Links */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 bg-black/70 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {project.demoUrl && (
                <motion.div
                  whileHover={{ scale: 1.05, x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white text-xs font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </motion.div>
              )}
              {project.githubUrl && (
                <motion.div
                  whileHover={{ scale: 1.05, x: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white text-xs font-medium hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-4 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{project.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag: string, idx: number) => (
                <motion.span 
                  key={idx} 
                  className="px-2 py-1 bg-white border border-black text-xs font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  whileHover={{ y: -2, backgroundColor: "#f8f8f8" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* View Project Button */}
            <div className="mt-4">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1 text-accent hover:opacity-80 font-bold text-sm transition-colors duration-300 relative group/link"
                >
                  <span>View Project Details</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut", 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </motion.div>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/link:w-full transition-all duration-300"></span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Compact project card for the grid layout
function CompactProjectCard({ project, index }: { project: any; index: number }) {
  const tagClass = project.accentColor === "vibrant" ? "premium-tag premium-tag-vibrant" : "premium-tag premium-tag-accent";
  const buttonClass = project.accentColor === "vibrant" ? "luxury-button-vibrant" : "luxury-button-accent";
  const gradientClass = project.accentColor === "vibrant" ? "bg-gradient-to-tr from-vibrant-500/20 to-transparent" : "bg-gradient-to-tr from-accent/20 to-transparent";
  const accentColor = project.accentColor === "vibrant" ? "bg-vibrant-500" : "bg-accent";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative"
    >
      <div className="bg-white border-3 border-black h-full flex flex-col hover:shadow-brutalist transition-shadow duration-300 transform transition-transform duration-300 hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden border-b-3 border-black">
          <div className={`absolute inset-0 ${gradientClass} z-10`}></div>
          {project.image ? (
            <div className="relative w-full h-full group">
              {project.image.endsWith('.svg') ? (
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <object 
                    data={project.image}
                    type="image/svg+xml"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    aria-label={project.title}
                  >
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </object>
                </div>
              ) : (
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          {/* Project Title */}
          <h3 className="text-xl font-bold mb-3">{project.title}</h3>
          
          {/* Project Description */}
          <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 3).map((tag: string, i: number) => (
              <motion.span 
                key={i} 
                className={`${tagClass} inline-block text-xs`}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-auto pt-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <a 
              href={project.demoUrl} 
                className={`${buttonClass} inline-flex items-center gap-1 text-xs py-1 px-3 relative overflow-hidden group/btn`}
              target="_blank"
              rel="noopener noreferrer"
            >
                <span className="relative z-10">Demo</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
              <ExternalLink size={12} />
                </motion.div>
                <span className="absolute inset-0 bg-black/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            </motion.div>
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <a 
              href={project.githubUrl} 
                className="inline-flex items-center gap-1 text-xs font-bold hover:opacity-80 transition-opacity relative group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Code</span>
              <Github size={12} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover/link:w-full transition-all duration-300"></span>
            </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}