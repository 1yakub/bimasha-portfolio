'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import MotionLink from '@/components/ui/motion-link'
import MotionDiv from '@/components/ui/motion-div'
import Container from '@/components/ui/container'

interface CaseStudy {
  title: string
  description: string
  metrics: string[]
  slug: string
  date: string
  icon: string
  category: string
  accentType?: "accent" | "vibrant"
  image?: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Scaling Microservices Architecture',
    description: 'Redesigned the architecture of a high-traffic SaaS platform to handle 10x growth, resulting in improved system performance and significant cost reduction.',
    metrics: ['300% performance increase', '50% cost reduction', '99.99% uptime'],
    slug: 'scaling-microservices',
    date: 'January 2024',
    icon: '📊',
    category: 'System Architecture',
    accentType: "accent",
    image: "/images/case-microservices.svg"
  },
  {
    title: 'FinTech Payment Gateway Integration',
    description: 'Developed a secure, compliant payment processing system for a financial services company, handling millions in transactions with robust error handling.',
    metrics: ['$2M+ monthly transactions', 'PCI DSS compliant', '99.9% success rate'],
    slug: 'fintech-payment-gateway',
    date: 'November 2023',
    icon: '💳',
    category: 'Financial Technology',
    accentType: "vibrant",
    image: "/images/case-fintech.svg"
  },
  {
    title: 'E-commerce Platform Optimization',
    description: 'Optimized the performance and user experience of a major e-commerce platform, resulting in improved conversion rates and customer satisfaction. Implemented advanced caching strategies, image optimization, and code splitting to enhance loading speeds across all devices.',
    metrics: ['42% faster page loads', '27% conversion increase', '35% lower bounce rate'],
    slug: 'ecommerce-optimization',
    date: 'August 2023',
    icon: '🛒',
    category: 'Performance Optimization',
    accentType: "accent",
    image: "/images/case-ecommerce.svg"
  }
]

export default function CaseStudies() {
  return (
    <section className="py-24 relative overflow-hidden elegant-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-white opacity-80"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      
      <Container>
        <div className="relative z-10 space-y-16">
          {/* Section Header */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-12 h-3 bg-accent"></span>
              <span className="text-sm font-bold text-accent uppercase tracking-widest">CASE STUDIES</span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Real-World <span className="modern-gradient-text">Impact</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Detailed examinations of complex challenges I've solved, showcasing my approach to 
              problem-solving and the measurable results achieved for clients.
            </motion.p>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
          
          {/* View All Case Studies Button */}
          <div className="flex justify-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MotionLink
                href="/case-studies"
                className="luxury-button-accent inline-flex items-center gap-2 relative overflow-hidden group"
                whileHover={{ x: 5 }}
              >
                <span className="relative z-10">Explore All Case Studies</span>
                <ArrowUpRight size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-accent/20 dark:bg-accent-dark/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const accentType = study.accentType || (index % 2 === 0 ? "accent" : "vibrant");
  const offsetClass = accentType === "vibrant" ? "brutalist-offset-vibrant" : "brutalist-offset";
  const accentColor = accentType === "vibrant" ? "bg-vibrant-500" : "bg-accent";
  const textColor = accentType === "vibrant" ? "text-vibrant-500" : "text-accent";
  const gradientClass = accentType === "vibrant" ? "bg-gradient-to-tr from-vibrant-500/20 to-transparent" : "bg-gradient-to-tr from-accent/20 to-transparent";
  
  return (
    <MotionLink
      href={`/case-studies/${study.slug}`}
      className={`block p-6 bg-white dark:bg-navy-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group ${
        accentType === 'vibrant' ? 'hover:shadow-vibrant/20' : 'hover:shadow-accent/20'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat"></div>
      
      {/* Case Study Image */}
      {study.image && (
        <div className="relative aspect-[16/9] overflow-hidden border-2 border-black mb-4 -mt-2 -mx-2 group-hover:shadow-lg transition-all duration-300">
          <div className={`absolute inset-0 ${gradientClass} z-10`}></div>
          <motion.img 
            src={study.image}
            alt={study.title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute top-2 right-2 px-2 py-1 bg-white border border-black text-xs font-bold">
            {study.date}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{study.icon}</span>
            <div>
              <span className={`text-xs font-bold ${textColor} uppercase tracking-wider`}>{study.category}</span>
              <h3 className="text-xl font-bold">{study.title}</h3>
            </div>
          </div>
          {!study.image && (
            <span className="text-xs font-bold text-gray-500 border-2 border-black px-2 py-1">{study.date}</span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{study.description}</p>
        
        <div className="space-y-3 mb-6">
          <h4 className={`text-sm font-bold ${textColor} uppercase tracking-wider`}>Key Results:</h4>
          <ul className="space-y-2">
            {study.metrics.map((metric, idx) => (
              <li 
                key={idx} 
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                <span className={`w-3 h-3 ${accentColor} border border-black`}></span>
                {metric}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hover Arrow */}
        <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity ${
          accentType === 'vibrant'
            ? 'text-vibrant-500 dark:text-vibrant-400'
            : 'text-accent dark:text-accent-dark'
        }`}>
          <ArrowUpRight size={20} />
        </div>
      </div>
    </MotionLink>
  )
}