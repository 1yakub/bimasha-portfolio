import Container from '@/components/ui/container'
import Spinner from '@/components/ui/spinner'

export default function Loading() {
  return (
    <div className="py-24 relative overflow-hidden elegant-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background dark:from-background-dark dark:via-navy-800 dark:to-background-dark opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent dark:bg-accent-dark opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-vibrant-500 dark:bg-vibrant-400 opacity-10 rounded-none"></div>
      
      <Container>
        <div className="space-y-16 relative z-10">
          {/* Loading Indicator */}
          <div className="flex flex-col items-center justify-center py-12">
            <Spinner size="lg" />
            <p className="mt-4 text-secondary dark:text-secondary-dark font-medium">Loading projects...</p>
          </div>
          
          {/* Back to Home Link - Skeleton */}
          <div className="w-32 h-6 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
          
          {/* Page Header - Skeleton */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-12 h-3 bg-gray-200 dark:bg-navy-600 animate-pulse"></span>
              <span className="w-32 h-4 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></span>
            </div>
            
            <div className="w-64 h-12 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
            
            <div className="w-full h-20 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
          </div>

          {/* Projects Grid - Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[...Array(4)].map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ProjectCardSkeleton() {
  return (
    <div className="relative">
      <div className="brutalist-container">
        <div className="brutalist-offset"></div>
        <div className="flex flex-col h-full">
          {/* Project Image - Skeleton */}
          <div className="relative aspect-video overflow-hidden border-b-3 border-black dark:border-white dark:border-opacity-80">
            <div className="w-full h-full bg-gray-200 dark:bg-navy-600 animate-pulse"></div>
          </div>

          {/* Project Info - Skeleton */}
          <div className="p-6 space-y-6 flex flex-col flex-grow">
            <div className="space-y-3">
              <div className="w-48 h-8 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
              <div className="w-full h-20 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
            </div>

            {/* Tech Stack - Skeleton */}
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-16 h-6 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
              ))}
            </div>

            {/* Action Buttons - Skeleton */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-24 h-8 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
              <div className="w-24 h-8 bg-gray-200 dark:bg-navy-600 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 