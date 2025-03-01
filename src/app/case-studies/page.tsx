import { Metadata } from 'next'
import CaseStudiesClient from './case-studies-client'

export const metadata: Metadata = {
  title: 'Case Studies | Bimasha - Senior Software Engineer',
  description: 'Detailed case studies of software engineering projects, including architecture decisions, technical challenges, and outcomes.',
}

export default function CaseStudies() {
  return <CaseStudiesClient />
} 