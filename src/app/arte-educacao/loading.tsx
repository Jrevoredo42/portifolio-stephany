import { Skeleton, PageHeaderSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-ink min-h-screen">
      <PageHeaderSkeleton tagWidth="w-28" titleWidth="w-80" />

      {/* Grid de Oficinas / Formações */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4"
            >
              <Skeleton className="h-5 w-28 rounded-full bg-azure/20" />
              <Skeleton className="h-6 w-4/5 bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-4 w-3/4 bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
