import { Skeleton, PageHeaderSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-ink min-h-screen">
      <PageHeaderSkeleton tagWidth="w-24" titleWidth="w-80" />

      {/* Grid de Projetos Skeleton */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        {/* Filtros Skeleton */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full bg-white/10" />
          ))}
        </div>

        {/* Cards de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col"
            >
              <Skeleton className="h-64 w-full bg-white/10" />
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <Skeleton className="h-4 w-20 rounded-full bg-gold/20" />
                  <Skeleton className="h-6 w-3/4 bg-white/15" />
                  <Skeleton className="h-4 w-full bg-white/10" />
                  <Skeleton className="h-4 w-4/5 bg-white/10" />
                </div>
                <div className="pt-2">
                  <Skeleton className="h-8 w-28 rounded-lg bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
