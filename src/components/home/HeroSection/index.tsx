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
    <section className="pt-16 pb-16 relative overflow-hidden">
      <BackgroundElements />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* API Introduction Component */}
            <ApiIntroduction />

            {/* Experience Counter & Status */}
            <div className="space-y-4">
              <div className="flex items-center flex-wrap gap-3">
                <AnimatedCounter />
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">Available for Remote Work</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-xl">
                Building scalable solutions that drive business growth, with expertise in{' '}
                <span className="text-blue-600 font-semibold">FinTech</span>,{' '}
                <span className="text-blue-600 font-semibold">SaaS</span>, and{' '}
                <span className="text-blue-600 font-semibold">E-commerce</span>.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>15+ Custom Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Global Client Portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                <span>Team Leadership</span>
              </div>
            </div>

            {/* CTAs and Tech Stack */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="#projects" 
                    className="inline-block bg-black text-white px-6 py-3 font-bold 
                             border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                             hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none
                             transition-all"
                  >
                    Explore Projects →
                  </a>
                </motion.div>
                <SocialLinks />
              </div>

              <TechStack />
            </div>
          </motion.div>

          {/* Profile Image Column */}
          <div className="lg:sticky lg:top-20">
            <ProfileImage />
          </div>
        </div>
      </Container>
    </section>
  )
}