import Container from '@/components/ui/container'

export default function Loading() {
  return (
    <div className="py-24 relative overflow-hidden brutalist-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background opacity-80"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-vibrant-500 opacity-10 rounded-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent opacity-10 rounded-none"></div>
      
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

          {/* Newsletter Form - Skeleton */}
          <div className="max-w-2xl">
            <div className="brutalist-container p-8">
              <div className="brutalist-offset-vibrant"></div>
              
              <div className="w-48 h-8 bg-gray-200 animate-pulse rounded mb-6"></div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
                  <div className="w-full h-12 bg-gray-200 animate-pulse rounded"></div>
                </div>
                
                <div className="w-full h-12 bg-gray-200 animate-pulse rounded"></div>
                
                <div className="mt-8 pt-6 border-t-2 border-gray-200">
                  <div className="w-40 h-6 bg-gray-200 animate-pulse rounded mb-4"></div>
                  <div className="space-y-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-200"></div>
                        <div className="w-full h-5 bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 