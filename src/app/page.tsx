import HeroSection from '@/components/home/HeroSection'  // Changed from '@/components/home/HeroSection.tsx'
import ProjectsGrid from '@/components/home/ProjectsGrid'
import SkillsMatrix from '@/components/home/SkillsMatrix'
import CaseStudies from '@/components/home/CaseStudies'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsGrid />
      <SkillsMatrix />
      <CaseStudies />
    </main>
  )
}