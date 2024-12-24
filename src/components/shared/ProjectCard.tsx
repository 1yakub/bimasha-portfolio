interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    demoUrl: string
    githubUrl: string
  }
  
  export function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="bg-card rounded-lg overflow-hidden shadow-lg">
        <div className="aspect-video relative bg-muted">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Image placeholder */}
            <span className="text-muted-foreground">Project Image</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-secondary rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.demoUrl} className="text-primary hover:underline">Demo</a>
            <a href={project.githubUrl} className="text-primary hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    )
  }