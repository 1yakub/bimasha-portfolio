import Container from '@/components/ui/container'

export default function Loading() {
  return (
    <div className="py-24 relative overflow-hidden modern-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      
      <Container>
        <div className="space-y-16 relative z-10">
          {/* Back to Home Link - Skeleton */}
          <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
          
          {/* Page Header - Skeleton */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-12 h-3 bg-gray-200 animate-pulse"></span>
              <span className="w-32 h-4 bg-gray-200 animate-pulse rounded"></span>
            </div>
            
            <div className="w-64 h-12 bg-gray-200 animate-pulse rounded"></div>
            
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded"></div>
          </div>

          {/* Case Studies - Skeleton */}
          <div className="space-y-16">
            {[...Array(3)].map((_, index) => (
              <CaseStudyCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudyCardSkeleton() {
  return (
    <div className="brutalist-container">
      <div className="brutalist-offset"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section - Skeleton */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden border-b-3 md:border-b-0 md:border-r-3 border-black">
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          
          {/* Category Tag - Skeleton */}
          <div className="absolute top-4 left-4 w-24 h-6 bg-gray-300 animate-pulse"></div>
          
          {/* Date Tag - Skeleton */}
          <div className="absolute bottom-4 right-4 w-24 h-6 bg-white animate-pulse border-2 border-black"></div>
        </div>

        {/* Content Section - Skeleton */}
        <div className="p-8 space-y-6 flex flex-col">
          <div className="space-y-3">
            <div className="w-48 h-8 bg-gray-200 animate-pulse rounded"></div>
            <div className="w-full h-20 bg-gray-200 animate-pulse rounded"></div>
          </div>

          {/* Metrics - Skeleton */}
          <div className="space-y-4">
            <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button - Skeleton */}
          <div className="mt-auto pt-4">
            <div className="w-40 h-10 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 