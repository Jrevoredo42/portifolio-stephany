import React from 'react'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Skeleton({ className = '', ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-white/10 ${className}`}
      {...props}
    />
  )
}

export function PageHeaderSkeleton({ tagWidth = 'w-24', titleWidth = 'w-72' }: { tagWidth?: string; titleWidth?: string }) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Skeleton className={`h-4 ${tagWidth} mb-4 bg-yellow/20`} />
        <Skeleton className={`h-12 md:h-16 ${titleWidth} mb-6 bg-white/15`} />
        <div className="space-y-3 max-w-2xl">
          <Skeleton className="h-4 w-full bg-white/10" />
          <Skeleton className="h-4 w-4/5 bg-white/10" />
        </div>
      </div>
    </section>
  )
}
