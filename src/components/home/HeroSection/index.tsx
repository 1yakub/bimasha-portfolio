'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import TechStack from './TechStack'
import ProfileImage from './ProfileImage'
import SocialLinks from './SocialLinks'
import BackgroundElements from './BackgroundElements'
import ApiIntroduction from './ApiIntroduction'
import AnimatedCounter from './AnimatedCounter'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-24 relative overflow-hidden modern-pattern dark:bg-navy-900">
      <BackgroundElements />
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent dark:bg-accent-dark opacity-10 blur-[100px]"></div>
      </div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* API Introduction Component */}
            <ApiIntroduction />

            {/* Experience Counter & Status */}
            <div className="space-y-5">
              <div className="flex items-center flex-wrap gap-4">
                <AnimatedCounter />
                <div className="flex items-center gap-2 glass-panel px-3 py-1.5">
                  <span className="inline-block w-2 h-2 bg-cadet dark:bg-cadet-light rounded-full animate-pulse" />
                  <span className="text-sm text-secondary dark:text-secondary-dark font-medium">Available for Remote Work</span>
                </div>
              </div>

              {/* Description */}
              <p className="lead max-w-xl">
                Building scalable solutions that drive business growth, with expertise in{' '}
                <span className="premium-gradient-text font-semibold">FinTech</span>,{' '}
                <span className="vibrant-gradient-text font-semibold">SaaS</span>, and{' '}
                <span className="modern-gradient-text font-semibold">E-commerce</span>.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-5 text-sm">
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

            {/* CTAs and Tech Stack */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <a 
                    href="#projects" 
                    className="mc-button-primary inline-flex items-center gap-2"
                  >
                    <span>Explore Projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <a 
                    href="/contact" 
                    className="mc-button-secondary inline-flex items-center gap-2"
                  >
                    <span>Get in Touch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </a>
                </motion.div>
                <SocialLinks />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <TechStack />
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image Column */}
          <div className="lg:sticky lg:top-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-luxury opacity-20 dark:opacity-30 blur-md rounded-2xl"></div>
              <div className="relative">
                <ProfileImage />
              </div>
              <div className="mt-4 flex justify-center">
                <div className="premium-tag-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/></svg>
                  Design & Development Expert
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}