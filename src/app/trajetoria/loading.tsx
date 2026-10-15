import { Skeleton, PageHeaderSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-ink min-h-screen">
      <PageHeaderSkeleton tagWidth="w-24" titleWidth="w-64" />

      {/* Linha do Tempo Skeleton */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-24">
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative space-y-3">
              {/* Marcador */}
              <div className="absolute -left-7.75 md:-left-11.75 top-1">
                <Skeleton className="w-4 h-4 rounded-full bg-gold/40" />
              </div>

              {/* Data / Ano */}
              <Skeleton className="h-5 w-20 rounded-md bg-white/10" />

              {/* Card de Evento */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 space-y-3">
                <Skeleton className="h-6 w-2/3 bg-white/20" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-white/10" />
                  <Skeleton className="h-4 w-4/5 bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
