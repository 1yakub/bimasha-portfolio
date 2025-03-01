'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/container'
import { ArrowLeft, ArrowRight, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function NewsletterClient() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setStatus('success')
        setMessage('Thank you for subscribing! Check your email for confirmation.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Please enter a valid email address.')
      }
    }, 1500)
  }

  return (
    <div className="py-24 relative overflow-hidden brutalist-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      
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
              <span className="w-12 h-3 bg-vibrant-500"></span>
              <span className="text-sm font-bold text-vibrant-500 uppercase tracking-widest">NEWSLETTER</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Stay <span className="vibrant-gradient-text">Updated</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Subscribe to my newsletter for exclusive insights on software engineering, 
              web development trends, and tech industry updates. I share practical tips, 
              code snippets, and lessons learned from real-world projects.
            </motion.p>
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl"
          >
            <div className="brutalist-container p-8">
              <div className="brutalist-offset-vibrant"></div>
              
              <h2 className="text-2xl font-bold mb-6">Join the Community</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-3 border-3 border-black focus:ring-0 focus:outline-none"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-vibrant text-white font-medium border-2 border-black shadow-brutalist-sm transition-all duration-300 hover:shadow-brutalist hover:-translate-y-1 hover:-translate-x-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'loading' || status === 'success'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="animate-pulse">Processing...</span>
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
                
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 border-2 ${
                      status === 'error' 
                        ? 'border-red-500 bg-red-50 text-red-700' 
                        : 'border-green-500 bg-green-50 text-green-700'
                    } flex items-start gap-2`}
                  >
                    {status === 'error' ? (
                      <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                    )}
                    <span>{message}</span>
                  </motion.div>
                )}
              </form>
              
              <div className="mt-8 pt-6 border-t-2 border-gray-200">
                <h3 className="font-bold mb-4">What You'll Receive:</h3>
                <ul className="space-y-3">
                  {[
                    'Monthly tech insights and industry trends',
                    'Exclusive tutorials and code snippets',
                    'Early access to my new projects and articles',
                    'Productivity tips and tool recommendations'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-vibrant-500"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
} 