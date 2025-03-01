'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Home, User, Briefcase, BookOpen, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import MotionLink from '@/components/ui/motion-link'
import MotionDiv from '@/components/ui/motion-div'
import MotionButton from '@/components/ui/motion-button'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Handle initial mount animation
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const isActive = (path: string) => {
    return pathname === path
  }
  
  // Animation settings based on user preference
  const getAnimationProps = (type: 'hover' | 'initial') => {
    if (prefersReducedMotion) {
      return type === 'hover' 
        ? { 
            whileHover: { scale: 1.02 },
            transition: { duration: 0.1 }
          }
        : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2 }
          };
    }
    
    return type === 'hover'
      ? {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }
      : {
          initial: { y: -10, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.3, type: "spring", stiffness: 260, damping: 20 }
        };
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-screen-xl relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <MotionDiv
            className="flex items-center"
            {...getAnimationProps('initial')}
          >
            <Link href="/" className="flex items-center">
              <MotionDiv
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
                className="w-10 h-10 bg-white flex items-center justify-center rounded-md border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="text-black font-bold text-xl">B</span>
              </MotionDiv>
            </Link>
          </MotionDiv>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center justify-center px-6 py-3 rounded-xl border-3 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MotionLink
                href="/"
                className={`transition-all duration-200 px-4 py-1 rounded-md ${
                  isActive('/') 
                  ? 'bg-black text-white font-medium' 
                  : 'text-black hover:bg-black/10'
                }`}
                {...getAnimationProps('hover')}
              >
                <div className="flex flex-row items-center">
                  <Home size={18} />
                  <span className="text-sm ml-1.5 font-medium">Home</span>
                </div>
              </MotionLink>
              
              <MotionLink
                href="/about"
                className={`transition-all duration-200 px-4 py-1 rounded-md mx-1 ${
                  isActive('/about') 
                  ? 'bg-black text-white font-medium' 
                  : 'text-black hover:bg-black/10'
                }`}
                {...getAnimationProps('hover')}
              >
                <div className="flex flex-row items-center">
                  <User size={18} />
                  <span className="text-sm ml-1.5 font-medium">About</span>
                </div>
              </MotionLink>
              
              <MotionLink
                href="/projects"
                className={`transition-all duration-200 px-4 py-1 rounded-md mx-1 ${
                  isActive('/projects') 
                  ? 'bg-black text-white font-medium' 
                  : 'text-black hover:bg-black/10'
                }`}
                {...getAnimationProps('hover')}
              >
                <div className="flex flex-row items-center">
                  <Briefcase size={18} />
                  <span className="text-sm ml-1.5 font-medium">Work</span>
                </div>
              </MotionLink>
              
              <MotionLink
                href="/case-studies"
                className={`transition-all duration-200 px-4 py-1 rounded-md mx-1 ${
                  isActive('/case-studies') 
                  ? 'bg-black text-white font-medium' 
                  : 'text-black hover:bg-black/10'
                }`}
                {...getAnimationProps('hover')}
              >
                <div className="flex flex-row items-center">
                  <BookOpen size={18} />
                  <span className="text-sm ml-1.5 font-medium">Blog</span>
                </div>
              </MotionLink>
              
              <div className="h-6 w-px bg-black/20 mx-3"></div>
              
              {/* Social links integrated in navbar */}
              <div className="flex items-center gap-3">
                <MotionLink
                  href="https://github.com/bimasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </MotionLink>
                <MotionLink
                  href="https://linkedin.com/in/bimasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </MotionLink>
                <MotionLink
                  href="https://twitter.com/bimasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </MotionLink>
              </div>
            </div>
          </nav>
          
          {/* Newsletter button */}
          <div className="flex items-center gap-3 justify-end">
            <MotionButton
              variant="premium"
              size="sm"
              className="hidden md:flex items-center gap-1.5 bg-[#FFD700] text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md px-4 py-2 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              onClick={() => window.open('/newsletter', '_self')}
              aria-label="Subscribe to newsletter"
            >
              <Mail size={16} />
              <span className="text-sm font-bold">Newsletter</span>
            </MotionButton>
              
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col items-center justify-center gap-1">
                  <span 
                    className={`h-0.5 bg-black block transition-all duration-300 ${
                    isOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'
                    }`}
                  ></span>
                  <span 
                    className={`h-0.5 bg-black block transition-all duration-300 ${
                    isOpen ? 'w-0 opacity-0' : 'w-3.5'
                    }`}
                  ></span>
                  <span 
                    className={`h-0.5 bg-black block transition-all duration-300 ${
                    isOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-2'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col space-y-4 items-center">
            <MotionLink
              href="/"
              className={`transition-all duration-200 w-64 ${
                isActive('/') 
                  ? 'bg-black text-white border-3 border-black' 
                  : 'text-black border-3 border-black hover:bg-black/5'
              }`}
              onClick={() => setIsOpen(false)}
              {...getAnimationProps('hover')}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex flex-row items-center justify-center gap-2.5 px-5 py-2.5 rounded-md">
                <Home size={18} />
                <span className="text-sm font-medium">Home</span>
              </div>
            </MotionLink>
            
            <MotionLink
              href="/about"
              className={`transition-all duration-200 w-64 ${
                isActive('/about') 
                  ? 'bg-black text-white border-3 border-black' 
                  : 'text-black border-3 border-black hover:bg-black/5'
              }`}
              onClick={() => setIsOpen(false)}
              {...getAnimationProps('hover')}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex flex-row items-center justify-center gap-2.5 px-5 py-2.5 rounded-md">
                <User size={18} />
                <span className="text-sm font-medium">About</span>
              </div>
            </MotionLink>
            
            <MotionLink
              href="/projects"
              className={`transition-all duration-200 w-64 ${
                isActive('/projects') 
                  ? 'bg-black text-white border-3 border-black' 
                  : 'text-black border-3 border-black hover:bg-black/5'
              }`}
              onClick={() => setIsOpen(false)}
              {...getAnimationProps('hover')}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex flex-row items-center justify-center gap-2.5 px-5 py-2.5 rounded-md">
                <Briefcase size={18} />
                <span className="text-sm font-medium">Work</span>
              </div>
            </MotionLink>
            
            <MotionLink
              href="/case-studies" 
              className={`transition-all duration-200 w-64 ${
                isActive('/case-studies') 
                  ? 'bg-black text-white border-3 border-black' 
                  : 'text-black border-3 border-black hover:bg-black/5'
              }`}
              onClick={() => setIsOpen(false)}
              {...getAnimationProps('hover')}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex flex-row items-center justify-center gap-2.5 px-5 py-2.5 rounded-md">
                <BookOpen size={18} />
                <span className="text-sm font-medium">Blog</span>
              </div>
            </MotionLink>
            
            <MotionLink
              href="/newsletter" 
              className="transition-all duration-200 mt-2 w-64"
              onClick={() => setIsOpen(false)}
              {...getAnimationProps('hover')}
              tabIndex={isOpen ? 0 : -1}
            >
              <div className="flex flex-row items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#FFD700] text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Mail size={18} />
                <span className="text-sm font-bold">Newsletter</span>
              </div>
            </MotionLink>
            
            {/* Social links in mobile menu */}
            <div className="flex items-center gap-5 mt-8 border-3 border-black rounded-xl p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MotionLink
                href="https://github.com/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/70 transition-colors duration-300"
                whileHover={{ y: -2 }}
                aria-label="GitHub Profile"
                tabIndex={isOpen ? 0 : -1}
              >
                <Github size={20} />
              </MotionLink>
              <MotionLink
                href="https://linkedin.com/in/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/70 transition-colors duration-300"
                whileHover={{ y: -2 }}
                aria-label="LinkedIn Profile"
                tabIndex={isOpen ? 0 : -1}
              >
                <Linkedin size={20} />
              </MotionLink>
              <MotionLink
                href="https://twitter.com/bimasha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black/70 transition-colors duration-300"
                whileHover={{ y: -2 }}
                aria-label="Twitter Profile"
                tabIndex={isOpen ? 0 : -1}
              >
                <Twitter size={20} />
              </MotionLink>
            </div>
          </nav>
          
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-md bg-white text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}