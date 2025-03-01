import React from 'react'
import Container from '@/components/ui/container'

export default function Loading() {
  return (
    <div className="modern-pattern dark:bg-navy-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-repeat opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent dark:bg-accent-dark opacity-10 blur-[100px]"></div>
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <Container className="py-16">
        {/* Page Header Skeleton */}
        <div className="mb-16 text-center">
          <div className="h-12 w-48 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-full max-w-2xl bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mx-auto"></div>
        </div>

        {/* Profile Section Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Profile Image Skeleton */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative background elements */}
              <div className="absolute -right-4 top-4 w-full h-full border-[3px] border-black/10 dark:border-white/10"></div>
              <div className="absolute -right-8 top-8 w-full h-full border-[3px] border-black/5 dark:border-white/5"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-white/10 dark:bg-navy-800/30 animate-pulse border-[3px] border-black/20 dark:border-white/20">
                {/* Terminal-like top bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/20 dark:bg-navy-900/50 flex items-center px-3 gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Skeleton */}
          <div className="md:col-span-7">
            <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              <div className="h-4 w-3/4 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Achievements Skeleton */}
            <div className="flex flex-wrap gap-5 mt-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 w-40 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              ))}
            </div>
            
            {/* Social Links Skeleton */}
            <div className="mt-6 flex gap-4">
              <div className="h-6 w-6 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
              <div className="h-6 w-6 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
              <div className="h-6 w-6 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
              <div className="h-6 w-6 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Competitive Programming Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-8 mx-auto"></div>
          <div className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
                      <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-24 h-24 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-8 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                <div className="h-6 w-48 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-4"></div>
                <div className="space-y-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
                      <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-8 mx-auto"></div>
          <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-white/10">
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-white/10 dark:bg-white/5 animate-pulse"></div>
                <div className="mb-1">
                  <div className="h-6 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-2"></div>
                  <div className="h-4 w-48 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
                </div>
                <div className="h-3 w-32 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-8 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                <div className="h-6 w-48 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-2"></div>
                <div className="h-4 w-32 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-3"></div>
                <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience Skeleton */}
        <div className="mb-20">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-8 mx-auto"></div>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-white/10">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-white/10 dark:bg-white/5 animate-pulse"></div>
              <div className="mb-1">
                <div className="h-6 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-2"></div>
                <div className="h-4 w-48 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
              </div>
              <div className="h-3 w-32 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-white/10 dark:bg-white/5 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Call to Action Skeleton */}
        <div className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/10">
          <div className="h-8 w-64 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mb-4 mx-auto"></div>
          <div className="h-4 w-full max-w-2xl bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mx-auto mb-6"></div>
          <div className="h-10 w-32 bg-white/10 dark:bg-white/5 rounded-lg animate-pulse mx-auto"></div>
        </div>
      </Container>
    </div>
  )
} 