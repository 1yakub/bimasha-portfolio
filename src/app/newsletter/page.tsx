import { Metadata } from 'next'
import NewsletterClient from './newsletter-client'

export const metadata: Metadata = {
  title: 'Newsletter | Bimasha - Senior Software Engineer',
  description: 'Subscribe to my newsletter for updates on software engineering, web development, and tech insights.',
}

export default function Newsletter() {
  return <NewsletterClient />
} 