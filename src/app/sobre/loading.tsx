import { Skeleton, PageHeaderSkeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-terracota min-h-screen">
      <PageHeaderSkeleton tagWidth="w-20" titleWidth="w-64" />

      {/* Grid de Conteúdo e Foto */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Skeleton className="w-full aspect-3/4 rounded-3xl bg-white/10" />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Skeleton className="h-8 w-1/2 bg-white/15" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-5/6 bg-white/10" />
            </div>
            <div className="space-y-3 pt-4">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-4/5 bg-white/10" />
            </div>

            {/* Badges / Áreas de Atuação */}
            <div className="pt-6">
              <Skeleton className="h-5 w-40 mb-4 bg-white/15" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <Skeleton key={i} className="h-8 w-28 rounded-full bg-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
