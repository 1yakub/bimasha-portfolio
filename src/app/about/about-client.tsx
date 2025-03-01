'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '@/components/ui/container'

const AboutClient = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'profile', offset: 0 },
        { id: 'skills', offset: 800 },
        { id: 'experience', offset: 1600 },
        { id: 'projects', offset: 2400 },
        { id: 'competitive', offset: 3200 },
        { id: 'volunteer', offset: 3800 },
      ];
      
      const scrollPosition = window.scrollY;
      
      // Show back to top button after scrolling down 500px
      setShowBackToTop(scrollPosition > 500);
      
      // Calculate scroll progress percentage
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / windowHeight) * 100;
      setScrollProgress(scrolled);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="modern-pattern dark:bg-navy-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary/10 dark:bg-primary-dark/10 z-50">
        <motion.div 
          className="h-full bg-accent dark:bg-accent-dark"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-accent dark:bg-accent-dark text-white shadow-brutalist dark:shadow-brutalist-dark flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.button>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent dark:bg-accent-dark opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      {/* Floating Navigation */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        style={{ opacity }}
      >
        <div className="bg-white dark:bg-navy-800 shadow-brutalist dark:shadow-brutalist-dark p-3 rounded-full">
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => scrollToSection('profile')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'profile' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Profile section"
            />
            <button 
              onClick={() => scrollToSection('skills')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'skills' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Skills section"
            />
            <button 
              onClick={() => scrollToSection('experience')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'experience' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Experience section"
            />
            <button 
              onClick={() => scrollToSection('projects')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'projects' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Projects section"
            />
            <button 
              onClick={() => scrollToSection('competitive')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'competitive' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Competitive Programming section"
            />
            <button 
              onClick={() => scrollToSection('volunteer')}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'volunteer' ? 'bg-accent dark:bg-accent-dark scale-150' : 'bg-primary/30 dark:bg-primary-dark/30'}`}
              aria-label="Go to Volunteer section"
            />
          </div>
        </div>
      </motion.div>
      
      <Container className="py-20">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center relative z-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3 px-4 py-1 bg-accent/10 dark:bg-accent-dark/20 rounded-full"
          >
            <span className="text-accent dark:text-accent-dark font-medium">Full-Stack Developer</span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent"
            >
              About Me
            </motion.h1>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-[2px] w-24 bg-accent dark:bg-accent-dark mx-auto mb-6 origin-left"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lead max-w-3xl mx-auto text-lg md:text-xl"
          >
            Full-Stack Developer with over 10 years of experience delivering 
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="premium-gradient-text font-semibold"
            > elegant</motion.span>, 
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              className="vibrant-gradient-text font-semibold"
            > scalable</motion.span>, and 
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="modern-gradient-text font-semibold"
            > user-centric</motion.span> applications
          </motion.p>
          
          {/* Animated decorative elements */}
          <div className="absolute -left-4 -bottom-8 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="w-16 h-16 border-2 border-accent dark:border-accent-dark rounded-lg"
            />
          </div>
          <div className="absolute -right-4 -top-8 hidden md:block">
            <motion.div 
              initial={{ opacity: 0, rotate: 20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="w-16 h-16 border-2 border-primary dark:border-primary-dark rounded-full"
            />
          </div>
        </motion.div>

        {/* Profile Section */}
        <div id="profile" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative background elements */}
              <div className="absolute -right-4 top-4 w-full h-full border-[3px] border-black dark:border-white dark:opacity-20 opacity-10" />
              <div className="absolute -right-8 top-8 w-full h-full border-[3px] border-black dark:border-white dark:opacity-10 opacity-5" />
              
              {/* Code snippets in background */}
              <div className="absolute -left-16 -bottom-8 w-32 h-32 bg-white dark:bg-navy-800 rounded-lg shadow-brutalist dark:shadow-brutalist-dark p-3 rotate-[-8deg] z-10 hidden md:block">
                <div className="w-full h-full overflow-hidden">
                  <pre className="text-[8px] text-primary/70 dark:text-primary-dark/70 font-mono">
                    {`function optimizePerformance() {
  const start = performance.now();
  // Complex operations
  const results = processData();
  const end = performance.now();
  console.log(\`Execution: \${end-start}ms\`);
  return results;
}`}
                  </pre>
                </div>
              </div>
              
              {/* Main image container */}
              <motion.div
                className="relative w-full h-full bg-white dark:bg-navy-800 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {/* Border frame */}
                <div className="absolute inset-0 border-[3px] border-black dark:border-white dark:border-opacity-80 z-20">
                  {/* Terminal-like top bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black dark:bg-navy-900 flex items-center px-3 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-white text-[10px] ml-2 opacity-60 font-mono">viewing: bimasha.png</span>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/bimasha.png" 
                    alt="Bimasha" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 16rem, 20rem"
                    priority
                  />
                  
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-vibrant-500/5 dark:from-accent-dark/15 dark:to-vibrant-400/10 z-10"></div>
                  
                  {/* Status badge */}
                  <motion.div 
                    className="absolute bottom-4 right-4 bg-white dark:bg-navy-700 text-primary dark:text-white px-3 py-1 
                              font-mono text-sm shadow-brutalist dark:shadow-brutalist-dark border-2 border-black dark:border-white
                              flex items-center gap-2 z-30"
                    whileHover={{ y: -2, x: -2 }}
                  >
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full animate-pulse" />
                    <span>Available for Work</span>
                  </motion.div>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-10 z-10"></div>
                </div>
              </motion.div>
              
              {/* Tech stack floating elements */}
              <motion.div 
                className="absolute -right-12 top-0 w-16 h-16 bg-white dark:bg-navy-800 rounded-full shadow-brutalist dark:shadow-brutalist-dark flex items-center justify-center z-10 hidden md:flex"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {/* Fallback for missing React image */}
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                  </svg>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-8 top-12 w-14 h-14 bg-white dark:bg-navy-800 rounded-full shadow-brutalist dark:shadow-brutalist-dark flex items-center justify-center z-10 hidden md:flex"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                {/* Fallback for missing Node.js image */}
                <div className="w-7 h-7 rounded-full bg-cadet/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cadet">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary-dark/20 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-primary-dark"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
              <span className="text-sm font-medium text-primary dark:text-primary-dark">Full-Stack Developer</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary dark:text-primary-dark">
              Hello, I'm Bimasha
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                I'm a Full-Stack Developer with over 10 years of experience specializing in building scalable web applications and solutions. Currently leading development at Varygen Corp Limited, I focus on delivering secure, high-performance applications across FinTech, SaaS, and E-commerce sectors.
              </p>
              <p>
                Throughout my career, I've worked with diverse teams to deliver impactful projects for global clients. I'm passionate about clean code, performance optimization, and creating intuitive user experiences with robust architectures.
              </p>
              <p>
                When I'm not coding, you can find me solving algorithmic challenges, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-5 text-sm mt-6">
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 glass-panel px-4 py-2"
              >
                <span className="w-1.5 h-1.5 bg-cadet dark:bg-cadet-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">15+ Custom Applications</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 glass-panel px-4 py-2"
              >
                <span className="w-1.5 h-1.5 bg-mandarin dark:bg-mandarin-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">Global Client Portfolio</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 glass-panel px-4 py-2"
              >
                <span className="w-1.5 h-1.5 bg-persimmon dark:bg-persimmon-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">Team Leadership</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://github.com/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://linkedin.com/in/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://twitter.com/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                href="mailto:contact@bimasha.com" 
                className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                aria-label="Email Contact"
              >
                <MdEmail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-6 border-t-4 border-accent dark:border-accent-dark"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 dark:bg-accent-dark/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-dark">Frontend Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>React, Next.js, Vue.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>TypeScript, JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Tailwind CSS, SCSS, Styled Components</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Redux, Context API, Zustand</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Responsive Design, Accessibility</span>
                </li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-6 border-t-4 border-cadet dark:border-cadet-light"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-cadet/20 dark:bg-cadet-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cadet dark:text-cadet-light"><path d="M18 10h-4V4h-4v6H6l6 6 6-6zm-8 8v2h8v-2h-8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-dark">Backend Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full"></span>
                  <span>Node.js, Express, NestJS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full"></span>
                  <span>Python, Django, FastAPI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full"></span>
                  <span>RESTful APIs, GraphQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full"></span>
                  <span>MongoDB, PostgreSQL, MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full"></span>
                  <span>Authentication, Authorization</span>
                </li>
              </ul>
            </motion.div>

            {/* DevOps & Tools */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-6 border-t-4 border-mandarin dark:border-mandarin-light"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mandarin/20 dark:bg-mandarin-light/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mandarin dark:text-mandarin-light"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-primary-dark">DevOps & Tools</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mandarin dark:bg-mandarin-light rounded-full"></span>
                  <span>Git, GitHub, GitLab</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mandarin dark:bg-mandarin-light rounded-full"></span>
                  <span>Docker, Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mandarin dark:bg-mandarin-light rounded-full"></span>
                  <span>AWS, Azure, Google Cloud</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mandarin dark:bg-mandarin-light rounded-full"></span>
                  <span>CI/CD, GitHub Actions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-mandarin dark:bg-mandarin-light rounded-full"></span>
                  <span>Testing (Jest, Cypress, Playwright)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20 hover:border-primary dark:hover:border-primary-dark transition-colors duration-300"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Lead Full-Stack Developer</h3>
                  <p className="text-primary/80 dark:text-primary-dark/80 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    Varygen Corp Limited
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    Jan 2020 - Present
                  </span>
                </div>
              </div>
              <p className="text-secondary/80 dark:text-secondary-dark/80 mt-3">
                Leading development of enterprise-level applications using React, Node.js, and AWS. Managing a team of developers, implementing CI/CD pipelines, and ensuring code quality and security standards.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-2 py-1 text-xs rounded-full">React</span>
                <span className="bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-2 py-1 text-xs rounded-full">Node.js</span>
                <span className="bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-2 py-1 text-xs rounded-full">AWS</span>
                <span className="bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-2 py-1 text-xs rounded-full">Team Leadership</span>
              </div>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20 hover:border-primary dark:hover:border-primary-dark transition-colors duration-300"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Senior Full-Stack Developer</h3>
                  <p className="text-primary/80 dark:text-primary-dark/80 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    Life Coach Hub
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    Mar 2018 - Dec 2019
                  </span>
                </div>
              </div>
              <p className="text-secondary/80 dark:text-secondary-dark/80 mt-3">
                Developed and maintained a SaaS platform for life coaches using Vue.js, Laravel, and AWS. Implemented payment processing systems and optimized database performance for scalability.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">Vue.js</span>
                <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">Laravel</span>
                <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">AWS</span>
                <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">Payment Systems</span>
              </div>
            </motion.div>

            {/* Experience Item 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20 hover:border-primary dark:hover:border-primary-dark transition-colors duration-300"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <p className="text-primary/80 dark:text-primary-dark/80 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    MY SAAS TEAM
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    Jun 2016 - Feb 2018
                  </span>
                </div>
              </div>
              <p className="text-secondary/80 dark:text-secondary-dark/80 mt-3">
                Built custom web applications for clients across various industries using JavaScript, PHP, and MySQL. Collaborated with design teams to implement responsive and accessible user interfaces.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">JavaScript</span>
                <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">PHP</span>
                <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">MySQL</span>
                <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">UI/UX</span>
              </div>
            </motion.div>

            {/* Experience Item 4 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20 hover:border-primary dark:hover:border-primary-dark transition-colors duration-300"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Web Developer</h3>
                  <p className="text-primary/80 dark:text-primary-dark/80 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                    Gjiganti
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    Jan 2014 - May 2016
                  </span>
                </div>
              </div>
              <p className="text-secondary/80 dark:text-secondary-dark/80 mt-3">
                Developed e-commerce solutions and content management systems using WordPress, WooCommerce, and custom PHP development. Implemented SEO best practices and performance optimizations.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">WordPress</span>
                <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">WooCommerce</span>
                <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">PHP</span>
                <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">SEO</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Projects Section */}
        <motion.div 
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-0 overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-accent to-primary dark:from-accent-dark dark:to-primary-dark relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white dark:bg-navy-800 text-primary dark:text-primary-dark px-3 py-1 text-sm font-medium">SaaS Platform</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary-dark">Life Coach Hub</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  A comprehensive platform for life coaches to manage clients, schedule sessions, and process payments. Built with Vue.js, Laravel, and integrated with Stripe for payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark px-2 py-1 text-xs rounded-full">Vue.js</span>
                  <span className="bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark px-2 py-1 text-xs rounded-full">Laravel</span>
                  <span className="bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark px-2 py-1 text-xs rounded-full">Stripe</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-0 overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-cadet to-accent dark:from-cadet-light dark:to-accent-dark relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white dark:bg-navy-800 text-primary dark:text-primary-dark px-3 py-1 text-sm font-medium">FinTech Solution</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary-dark">Fineas</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  A secure financial management system for small businesses with features for invoicing, expense tracking, and financial reporting. Implemented with React, Node.js, and MongoDB.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">React</span>
                  <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">Node.js</span>
                  <span className="bg-cadet/10 dark:bg-cadet-light/20 text-cadet dark:text-cadet-light px-2 py-1 text-xs rounded-full">MongoDB</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-0 overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-mandarin to-cadet dark:from-mandarin-light dark:to-cadet-light relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white dark:bg-navy-800 text-primary dark:text-primary-dark px-3 py-1 text-sm font-medium">Retail Solution</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary-dark">E-Commerce Platform</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  A scalable e-commerce platform with inventory management, order processing, and customer relationship management. Built with Next.js, Express, and PostgreSQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">Next.js</span>
                  <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">Express</span>
                  <span className="bg-mandarin/10 dark:bg-mandarin-light/20 text-mandarin dark:text-mandarin-light px-2 py-1 text-xs rounded-full">PostgreSQL</span>
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="brutalist-container p-0 overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-persimmon to-mandarin dark:from-persimmon-light dark:to-mandarin-light relative">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white dark:bg-navy-800 text-primary dark:text-primary-dark px-3 py-1 text-sm font-medium">Healthcare Solution</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-primary-dark">Healthcare Management System</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  A HIPAA-compliant patient management system for healthcare providers with appointment scheduling, medical records, and billing features. Developed with Angular, Django, and MySQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Angular</span>
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Django</span>
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">MySQL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div 
          id="competitive"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Competitive Programming
          </h2>
          <div className="brutalist-container p-8 relative overflow-hidden">
            {/* Background code pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden">
              <pre className="text-[10px] text-primary dark:text-primary-dark font-mono leading-tight">
                {`function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 dark:bg-accent-dark/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M14 16H9m10 0h2v-4h-2M3 12h2v4H3m6 0V8h4v8m-4-4h4"></path><path d="M17 8v8"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark">Problem Solving Journey</h3>
                </div>
                <p className="text-lg">
                  I am passionate about algorithmic problem-solving and regularly participate in coding competitions.
                </p>
                <p>
                  My competitive programming journey has helped me develop strong analytical thinking and efficient coding practices.
                </p>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 p-2 bg-accent/5 dark:bg-accent-dark/10 rounded-md">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Solved 500+ algorithmic problems across various platforms</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 dark:bg-accent-dark/10 rounded-md">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Ranked in the top 5% on LeetCode</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 dark:bg-accent-dark/10 rounded-md">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Expert rating on Codeforces</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-accent/5 dark:bg-accent-dark/10 rounded-md">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>5-star coder on GeeksForGeeks</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-32 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-brutalist dark:shadow-brutalist-dark flex flex-col items-center justify-center"
                >
                  {/* Using existing image */}
                  <Image 
                    src="/images/cp/codeforces.jpg" 
                    alt="Codeforces" 
                    width={60} 
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-xs font-medium text-center">Codeforces</span>
                  <span className="text-xs text-accent dark:text-accent-dark">Expert</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-32 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-brutalist dark:shadow-brutalist-dark flex flex-col items-center justify-center"
                >
                  {/* Using existing image */}
                  <Image 
                    src="/images/cp/leetcode.png" 
                    alt="LeetCode" 
                    width={60} 
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-xs font-medium text-center">LeetCode</span>
                  <span className="text-xs text-accent dark:text-accent-dark">Top 5%</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-32 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-brutalist dark:shadow-brutalist-dark flex flex-col items-center justify-center"
                >
                  {/* Using existing image */}
                  <Image 
                    src="/images/cp/gfg.png" 
                    alt="GeeksForGeeks" 
                    width={60} 
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-xs font-medium text-center">GeeksForGeeks</span>
                  <span className="text-xs text-accent dark:text-accent-dark">5-Star</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-32 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-brutalist dark:shadow-brutalist-dark flex flex-col items-center justify-center"
                >
                  {/* Using existing image */}
                  <Image 
                    src="/images/cp/cp.png" 
                    alt="Competitive Programming" 
                    width={60} 
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-xs font-medium text-center">HackerRank</span>
                  <span className="text-xs text-accent dark:text-accent-dark">6-Star</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Volunteer Experience Section */}
        <motion.div 
          id="volunteer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mb-24"
        >
          <h2 className="section-heading text-center mb-8">
            Volunteer Experience
          </h2>
          <div className="brutalist-container p-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-full max-w-xs">
                  {/* Fallback for missing volunteer.jpg */}
                  <div className="w-full h-[300px] bg-gradient-to-br from-persimmon/20 to-persimmon/40 dark:from-persimmon-light/20 dark:to-persimmon-light/40 rounded-lg shadow-brutalist dark:shadow-brutalist-dark flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-persimmon dark:text-persimmon-light">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white dark:bg-navy-800 text-primary dark:text-primary-dark px-3 py-1 text-sm font-medium rounded-full">
                      Since 2018
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-persimmon/20 dark:bg-persimmon-light/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-persimmon dark:text-persimmon-light"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m7 10 2 2 6-6"></path><path d="m7 16 2 2 6-6"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-primary-dark">Volunteer Developer</h3>
                </div>
                
                <p className="text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  Contributing development skills to various non-profit organizations, helping them build and maintain websites and web applications. Providing technical guidance and mentoring to aspiring developers in underserved communities.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-persimmon dark:bg-persimmon-light rounded-full"></span>
                    <span>Built responsive websites for 5+ local non-profit organizations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-persimmon dark:bg-persimmon-light rounded-full"></span>
                    <span>Mentored 20+ aspiring developers from underrepresented communities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-persimmon dark:bg-persimmon-light rounded-full"></span>
                    <span>Conducted free web development workshops for community centers</span>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Web Development</span>
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Mentoring</span>
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Community Outreach</span>
                  <span className="bg-persimmon/10 dark:bg-persimmon-light/20 text-persimmon dark:text-persimmon-light px-2 py-1 text-xs rounded-full">Technical Workshops</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="brutalist-offset p-10 mt-28 relative z-10 border-4 border-black dark:border-white dark:border-opacity-80"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent dark:bg-accent-dark opacity-20 rounded-full blur-[50px]"></div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary dark:bg-primary-dark opacity-20 rounded-full blur-[50px]"></div>
          </div>
          
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-navy-900 px-6 py-2 border-2 border-black dark:border-white">
            <h2 className="text-xl md:text-2xl font-bold font-display text-center flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-accent dark:text-accent-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
              </motion.span>
              Let's Work Together
            </h2>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="md:w-2/3">
                <p className="text-base md:text-lg text-secondary/80 dark:text-secondary-dark/80 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M22 16.92v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span>Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>Quick response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span>Secure and confidential discussions</span>
                  </div>
                </div>
                
                {/* Contact form teaser */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-6 p-4 bg-white/50 dark:bg-navy-800/50 border border-black/10 dark:border-white/10 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-accent-dark/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
                    </div>
                    <span className="font-medium">Let's schedule a discovery call</span>
                  </div>
                  <p className="text-sm text-secondary/70 dark:text-secondary-dark/70">
                    Book a 30-minute consultation to discuss your project requirements and explore how we can work together.
                  </p>
                </motion.div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Fallback for missing collaboration.png */}
                  <div className="w-[200px] h-[200px] bg-gradient-to-br from-accent/20 to-accent/40 dark:from-accent-dark/20 dark:to-accent-dark/40 rounded-lg shadow-brutalist dark:shadow-brutalist-dark flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark">
                      <path d="M17 5H7v10h10V5Z"/>
                      <path d="M8 2v3"/>
                      <path d="M16 2v3"/>
                      <path d="M7 10h10"/>
                      <path d="M2 12v6a2 2 0 0 0 2 2h4"/>
                      <path d="M22 12v6a2 2 0 0 1-2 2h-4"/>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <a 
                  href="mailto:contact@bimasha.com" 
                  className="mc-button-primary inline-flex items-center gap-2 px-8 py-3 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  
                  {/* Button animation overlay */}
                  <span className="absolute inset-0 bg-accent dark:bg-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </motion.div>
            </div>
            
            {/* Social proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-3">Trusted by companies worldwide</p>
              <div className="flex flex-wrap justify-center gap-6 opacity-60">
                {/* Fallback for missing logo images */}
                <div className="w-[80px] h-[30px] bg-white/80 dark:bg-navy-800/80 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-secondary/70 dark:text-secondary-dark/70">Company 1</span>
                </div>
                <div className="w-[80px] h-[30px] bg-white/80 dark:bg-navy-800/80 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-secondary/70 dark:text-secondary-dark/70">Company 2</span>
                </div>
                <div className="w-[80px] h-[30px] bg-white/80 dark:bg-navy-800/80 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-secondary/70 dark:text-secondary-dark/70">Company 3</span>
                </div>
                <div className="w-[80px] h-[30px] bg-white/80 dark:bg-navy-800/80 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-secondary/70 dark:text-secondary-dark/70">Company 4</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default AboutClient 