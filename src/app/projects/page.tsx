import { Metadata } from 'next'
import ProjectsClient from './projects-client'

export const metadata: Metadata = {
  title: 'Projects | Bimasha - Senior Software Engineer',
  description: 'Explore my portfolio of software engineering projects including web applications, APIs, and more.',
}

export default function Projects() {
  return <ProjectsClient />
}
  