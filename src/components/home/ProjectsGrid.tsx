'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/container'

const projects = [
  {
    title: "Life Coach Hub",
    description: "Online platform connecting life coaches with clients",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/api/placeholder/600/400"
  }
  // Add more projects here
]

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-[#FFECEC]">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black"
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                           hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] bg-gray-100 border-[3px] border-black overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-lg text-gray-600">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-black text-white text-sm font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a 
                        href={project.demoUrl}
                        className="px-6 py-2 bg-blue-600 text-white font-bold border-2 border-black
                                 hover:bg-blue-700 transition-colors"
                      >
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="px-6 py-2 bg-black text-white font-bold border-2 border-black
                                 hover:bg-gray-800 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}