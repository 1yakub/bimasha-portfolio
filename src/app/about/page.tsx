import { Metadata } from 'next'
import AboutClient from './about-client'

export const metadata: Metadata = {
  title: 'About | Bimasha Zaman - Full-Stack Developer',
  description: 'Learn more about Bimasha Zaman, a Full-Stack Developer with over 10 years of experience delivering secure, scalable solutions across FinTech, SaaS, and E-commerce.',
}

export default function About() {
  return <AboutClient />
} 