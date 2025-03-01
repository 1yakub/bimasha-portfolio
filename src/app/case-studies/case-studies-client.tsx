'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Case studies data
const caseStudies = [
  {
    title: 'Microservices Architecture',
    description: 'Redesigned a monolithic application into a scalable microservices architecture, improving performance and maintainability.',
    slug: 'microservices-architecture',
    image: '/images/case-microservices.svg',
    metrics: [
      '40% reduction in deployment time',
      '99.9% system availability',
      '3x improvement in scalability',
      '50% reduction in bug resolution time'
    ],
    category: 'System Architecture',
    date: 'January 2023',
    accentType: 'accent' as const
  },
  {
    title: 'FinTech Payment Gateway',
    description: 'Developed a secure, high-performance payment processing system handling millions of transactions monthly.',
    slug: 'fintech-payment-gateway',
    image: '/images/case-fintech.svg',
    metrics: [
      '$2M+ monthly transaction volume',
      '99.99% uptime',
      '150ms average processing time',
      'PCI DSS Level 1 compliant'
    ],
    category: 'Financial Technology',
    date: 'June 2023',
    accentType: 'vibrant' as const
  },
  {
    title: 'E-commerce Platform Optimization',
    description: 'Optimized a high-traffic e-commerce platform to improve performance, user experience, and conversion rates.',
    slug: 'ecommerce-optimization',
    image: '/images/case-ecommerce.svg',
    metrics: [
      '75% reduction in page load time',
      '128% increase in conversion rate',
      '45% decrease in bounce rate',
      '3x improvement in search performance'
    ],
    category: 'Performance Optimization',
    date: 'October 2023',
    accentType: 'accent' as const
  }
]

export default function CaseStudiesClient() {
  return (
    <div className="py-24 relative overflow-hidden modern-pattern">
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
              <span className="text-sm font-bold text-accent uppercase tracking-widest">CASE STUDIES</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Detailed <span className="premium-gradient-text">Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              In-depth analysis of complex technical challenges and their solutions.
              Each case study provides insights into architecture decisions, implementation details,
              and measurable outcomes.
            </motion.p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudyCard({ study, index }: { study: any; index: number }) {
  const isEven = index % 2 === 0;
  const offsetClass = study.accentType === "vibrant" ? "brutalist-offset-vibrant" : "brutalist-offset";
  const tagClass = study.accentType === "vibrant" ? "premium-tag premium-tag-vibrant" : "premium-tag premium-tag-accent";
  const buttonClass = study.accentType === "vibrant" ? "bg-gradient-vibrant" : "bg-gradient-accent";
  const linkClass = study.accentType === "vibrant" ? "premium-link-vibrant" : "premium-link";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
    >
      <div className="brutalist-container">
        <div className={offsetClass}></div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden border-b-3 md:border-b-0 md:border-r-3 border-black">
            {study.image ? (
              <div className="relative w-full h-full group">
                {study.image.endsWith('.svg') ? (
                  <div className="w-full h-full flex items-center justify-center bg-white">
                    <object 
                      data={study.image}
                      type="image/svg+xml"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      aria-label={study.title}
                    >
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-contain"
                      />
                    </object>
                  </div>
                ) : (
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Image not available</span>
              </div>
            )}
            
            {/* Category Tag */}
            <div className={`absolute top-4 left-4 ${tagClass} z-20`}>
              {study.category}
            </div>
            
            {/* Date Tag */}
            <div className="absolute bottom-4 right-4 bg-white text-secondary px-3 py-1 text-sm border-2 border-black">
              {study.date}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-6 flex flex-col">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">{study.title}</h3>
              <p className="text-gray-600 leading-relaxed">{study.description}</p>
            </div>

            {/* Metrics */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Key Metrics:</h4>
              <ul className="space-y-2">
                {study.metrics.map((metric: string, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 ${study.accentType === "vibrant" ? "bg-vibrant-500" : "bg-accent"}`}></div>
                    <span>{metric}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="mt-auto pt-4">
              <Link 
                href={`/case-studies/${study.slug}`}
                className={`inline-flex items-center gap-2 px-5 py-2 ${buttonClass} text-white font-medium rounded-md border-2 border-black shadow-brutalist-sm transition-all duration-300 hover:shadow-brutalist hover:-translate-y-1 hover:-translate-x-1`}
              >
                <span>View Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 