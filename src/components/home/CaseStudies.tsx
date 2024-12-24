'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface CaseStudy {
  title: string
  description: string
  metrics: string[]
  slug: string
  date: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Scaling Microservices Architecture',
    description: 'How we improved system performance by 300%',
    metrics: ['300% performance increase', '50% cost reduction', '99.99% uptime'],
    slug: 'scaling-microservices',
    date: '2024-01'
  }
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{study.description}</p>
                  <ul className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}