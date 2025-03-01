'use client'

import { ArrowRight, ArrowDown, Github, Linkedin } from 'lucide-react';
import MotionLink from '@/components/ui/motion-link';
import MotionSpan from '@/components/ui/motion-span';
import MotionDiv from '@/components/ui/motion-div';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Full-Stack Developer</span>
                <span className="block mt-2 premium-gradient-text">& UI/UX Designer</span>
              </h1>
            </MotionDiv>
            
            <MotionDiv 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>I build modern web applications with a focus on performance, accessibility, and beautiful user experiences.</p>
            </MotionDiv>
            
            <MotionDiv 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MotionLink
                href="/projects"
                className="luxury-button-accent relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <MotionSpan
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut", 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <ArrowRight size={16} />
                  </MotionSpan>
                </span>
                <span className="absolute inset-0 bg-accent/20 dark:bg-accent-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </MotionLink>
              
              <MotionLink
                href="/contact"
                className="luxury-button-outline relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </MotionLink>
            </MotionDiv>
            
            <MotionDiv
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MotionLink
                href="https://github.com/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#f3f4f6", 
                  color: "#6366f1" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </MotionLink>
              
              <MotionLink
                href="https://linkedin.com/in/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#f3f4f6", 
                  color: "#6366f1" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </MotionLink>
            </MotionDiv>
          </div>
          
          {/* Profile Image */}
          <MotionDiv 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative brutalist-container overflow-hidden">
              <div className="brutalist-offset"></div>
              <div className="relative z-10">
                <img 
                  src="/images/profile.jpg" 
                  alt="Bimasha - Full Stack Developer" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <MotionDiv 
              className="absolute -bottom-10 -left-10 p-4 bg-white dark:bg-navy-800 shadow-lg rounded-lg max-w-[180px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">Available for work</p>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              className="absolute -top-5 -right-5 p-4 bg-white dark:bg-navy-800 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex flex-col items-center">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Experience</p>
                <p className="text-2xl font-bold premium-gradient-text">5+ Years</p>
              </div>
            </MotionDiv>
            
            <MotionDiv
              className="absolute bottom-20 right-0 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <MotionDiv
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut", 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                className="p-3 bg-white dark:bg-navy-800 shadow-lg rounded-full"
              >
                <ArrowDown className="text-accent dark:text-accent-dark" size={20} />
              </MotionDiv>
              <div className="ml-3 p-2 bg-white dark:bg-navy-800 shadow-lg rounded-lg">
                <p className="text-sm font-medium">Scroll to explore</p>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
} 