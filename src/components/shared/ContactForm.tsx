'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <Input 
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="border-2 focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input 
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="border-2 focus:border-accent focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <Textarea 
            id="message"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
            required
            className="min-h-[120px] border-2 focus:border-accent focus:ring-accent"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent-600 text-white font-medium py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {formStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm"
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        )}
        
        {formStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm"
          >
            There was an error sending your message. Please try again.
          </motion.div>
        )}
      </form>
      
      <div className="pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-4">Or reach out directly via:</p>
        <div className="flex gap-4">
          <motion.a 
            whileHover={{ y: -3 }}
            href="https://github.com/bimasha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-accent hover:bg-gray-200 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/bimasha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-accent hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3 }}
            href="https://twitter.com/bimasha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-accent hover:bg-gray-200 transition-colors"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3 }}
            href="mailto:contact@bimasha.com" 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-accent hover:bg-gray-200 transition-colors"
            aria-label="Email Contact"
          >
            <MdEmail size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  )
}