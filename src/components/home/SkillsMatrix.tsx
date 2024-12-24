'use client'

import { motion } from 'framer-motion'

interface Skill {
  category: string
  items: {
    name: string
    level: number // 1-5
  }[]
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React/Next.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Tailwind CSS', level: 4 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'REST APIs', level: 5 }
    ]
  }
]

export default function SkillsMatrix() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(skill.level / 5) * 100}%` }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}