'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Container from '@/components/ui/container'

const AboutClient = () => {
  return (
    <div className="modern-pattern dark:bg-navy-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent dark:bg-accent-dark opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <Container className="py-16">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="lead max-w-3xl mx-auto">
            Senior Software Engineer with a passion for building 
            <span className="premium-gradient-text font-semibold"> elegant</span>, 
            <span className="vibrant-gradient-text font-semibold"> scalable</span>, and 
            <span className="modern-gradient-text font-semibold"> user-centric</span> applications
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
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
                    <span>Open to Work</span>
                  </motion.div>
                  
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-10 z-10"></div>
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
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary dark:text-primary-dark">
              Hello, I'm Bimasha
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                I'm a Senior Software Engineer with over 8 years of experience specializing in building scalable web applications and solutions. My expertise spans frontend and backend development, with a focus on creating intuitive user experiences and robust architectures.
              </p>
              <p>
                Throughout my career, I've worked with diverse teams to deliver impactful projects across various industries including fintech, e-commerce, and healthcare. I'm passionate about clean code, performance optimization, and staying at the forefront of technology trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-5 text-sm mt-6">
              <div className="flex items-center gap-2 glass-panel px-4 py-2">
                <span className="w-1.5 h-1.5 bg-cadet dark:bg-cadet-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">15+ Custom Applications</span>
              </div>
              <div className="flex items-center gap-2 glass-panel px-4 py-2">
                <span className="w-1.5 h-1.5 bg-mandarin dark:bg-mandarin-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">Global Client Portfolio</span>
              </div>
              <div className="flex items-center gap-2 glass-panel px-4 py-2">
                <span className="w-1.5 h-1.5 bg-persimmon dark:bg-persimmon-light rounded-full" />
                <span className="font-medium text-secondary dark:text-secondary-dark">Team Leadership</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4 relative z-20">
              {/* Using regular anchor tags with motion div inside for animation */}
              <a 
                href="https://github.com/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block relative z-20"
                aria-label="GitHub Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-[#333333] dark:hover:text-[#333333] hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <FaGithub size={24} />
                </motion.div>
              </a>
              <a 
                href="https://linkedin.com/in/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block relative z-20"
                aria-label="LinkedIn Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-[#0077B5] dark:hover:text-[#0077B5] hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <FaLinkedin size={24} />
                </motion.div>
              </a>
              <a 
                href="https://twitter.com/bimasha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block relative z-20"
                aria-label="Twitter Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <FaTwitter size={24} />
                </motion.div>
              </a>
              <a 
                href="mailto:contact@bimasha.com" 
                className="block relative z-20"
                aria-label="Email Contact"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center text-primary dark:text-primary-dark hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:bg-secondary/30 dark:hover:bg-secondary-dark/30 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <MdEmail size={24} />
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="brutalist-container p-6">
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-dark">Frontend Development</h3>
              <ul className="space-y-2">
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
            </div>

            {/* Backend */}
            <div className="brutalist-container p-6">
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-dark">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Node.js, Express, NestJS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Python, Django, FastAPI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>RESTful APIs, GraphQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>MongoDB, PostgreSQL, MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Authentication, Authorization</span>
                </li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="brutalist-container p-6">
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-dark">DevOps & Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Git, GitHub, GitLab</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Docker, Kubernetes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>AWS, Azure, Google Cloud</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>CI/CD, GitHub Actions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                  <span>Testing (Jest, Cypress, Playwright)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                <p className="text-primary/80 dark:text-primary-dark/80">TechInnovate Solutions</p>
              </div>
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-2">Jan 2020 - Present</p>
              <p className="text-secondary/80 dark:text-secondary-dark/80">
                Led the development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines to improve deployment efficiency.
              </p>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-primary/80 dark:text-primary-dark/80">Digital Frontiers Inc.</p>
              </div>
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-2">Mar 2017 - Dec 2019</p>
              <p className="text-secondary/80 dark:text-secondary-dark/80">
                Developed and maintained frontend applications using Vue.js and backend services with Python. Collaborated with cross-functional teams to deliver features on time and within scope.
              </p>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Junior Developer</h3>
                <p className="text-primary/80 dark:text-primary-dark/80">WebTech Solutions</p>
              </div>
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-2">Jun 2015 - Feb 2017</p>
              <p className="text-secondary/80 dark:text-secondary-dark/80">
                Built responsive websites and implemented UI components using JavaScript and CSS frameworks. Participated in code reviews and agile development processes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Education
          </h2>
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                <p className="text-primary/80 dark:text-primary-dark/80">Stanford University</p>
              </div>
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-2">2013 - 2015</p>
              <p className="text-secondary/80 dark:text-secondary-dark/80">
                Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.
              </p>
            </div>

            {/* Education Item 2 */}
            <div className="relative pl-8 border-l-2 border-primary/20 dark:border-primary-dark/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark"></div>
              <div className="mb-1">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Engineering</h3>
                <p className="text-primary/80 dark:text-primary-dark/80">University of California, Berkeley</p>
              </div>
              <p className="text-sm text-secondary/60 dark:text-secondary-dark/60 mb-2">2009 - 2013</p>
              <p className="text-secondary/80 dark:text-secondary-dark/80">
                Focused on software development and computer architecture. Participated in multiple hackathons and coding competitions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-20"
        >
          <h2 className="section-heading text-center mb-8">
            Competitive Programming
          </h2>
          <div className="brutalist-container p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                  I am passionate about algorithmic problem-solving and regularly participate in coding competitions.
                </p>
                <p>
                  My competitive programming journey has helped me develop strong analytical thinking and efficient coding practices.
                </p>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Solved 500+ algorithmic problems across various platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Ranked in the top 5% on LeetCode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>Expert rating on Codeforces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></span>
                    <span>5-star coder on GeeksForGeeks</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="relative w-24 h-24 bg-white dark:bg-navy-800 rounded-lg p-2 shadow-brutalist dark:shadow-brutalist-dark">
                  <Image 
                    src="/images/cp/codeforces.jpg" 
                    alt="Codeforces" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-24 bg-white dark:bg-navy-800 rounded-lg p-2 shadow-brutalist dark:shadow-brutalist-dark">
                  <Image 
                    src="/images/cp/leetcode.png" 
                    alt="LeetCode" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-24 bg-white dark:bg-navy-800 rounded-lg p-2 shadow-brutalist dark:shadow-brutalist-dark">
                  <Image 
                    src="/images/cp/gfg.png" 
                    alt="GeeksForGeeks" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-24 bg-white dark:bg-navy-800 rounded-lg p-2 shadow-brutalist dark:shadow-brutalist-dark">
                  <Image 
                    src="/images/cp/cp.png" 
                    alt="Competitive Programming" 
                    width={80} 
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative mt-24 mb-8 p-8 border-3 border-accent dark:border-accent-dark rounded-lg shadow-brutalist dark:shadow-brutalist-dark bg-white dark:bg-navy-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-primary dark:text-primary-dark">
                Let's Work Together
              </h2>
              <p className="text-lg text-secondary/80 dark:text-secondary-dark/80 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <a 
                    href="mailto:contact@bimasha.com" 
                    className="mc-button-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>Send Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <a 
                    href="https://calendly.com/bimasha/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-button-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>Schedule a Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  </a>
                </motion.div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent z-10"></div>
                <Image 
                  src="/images/collaboration.jpg" 
                  alt="Collaboration" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent dark:text-accent-dark opacity-20">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 15" />
                </svg>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rotate-45">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent dark:text-accent-dark opacity-20">
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 15" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Additional contact info */}
          <div className="mt-8 pt-6 border-t border-accent/20 dark:border-accent-dark/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent-dark/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold">Phone</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80">+1 (555) 123-4567</p>
              </div>
              
              <div className="p-4">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent-dark/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold">Email</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80">contact@bimasha.com</p>
              </div>
              
              <div className="p-4">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 dark:bg-accent-dark/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent dark:text-accent-dark"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold">Location</h3>
                <p className="text-secondary/80 dark:text-secondary-dark/80">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default AboutClient 