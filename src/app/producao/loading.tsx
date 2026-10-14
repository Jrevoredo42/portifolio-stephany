import { Skeleton, PageHeaderSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-ink min-h-screen">
      <PageHeaderSkeleton tagWidth="w-28" titleWidth="w-72" />

      {/* Grid de Serviços / Áreas */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-4"
            >
              <Skeleton className="h-8 w-8 rounded-full bg-gold/20" />
              <Skeleton className="h-6 w-3/4 bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="h-3.5 w-full bg-white/10" />
                <Skeleton className="h-3.5 w-full bg-white/10" />
                <Skeleton className="h-3.5 w-4/5 bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Produzidos */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <Skeleton className="h-8 w-56 mb-8 bg-white/15" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Skeleton className="h-72 w-full bg-white/10" />
              <div className="p-6 space-y-2">
                <Skeleton className="h-6 w-48 bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
