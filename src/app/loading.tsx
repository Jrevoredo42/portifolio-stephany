import { Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <div className="bg-amber-100 min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-28 pb-16 bg-amber-50">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <Skeleton className="h-4 w-32 bg-gold/20" />
            <Skeleton className="h-14 md:h-20 w-4/5 bg-brown/20" />
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-full bg-brown/10" />
              <Skeleton className="h-4 w-3/4 bg-brown/10" />
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-36 rounded-full bg-gold/30" />
              <Skeleton className="h-12 w-36 rounded-full bg-brown/20" />
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <Skeleton className="w-64 h-80 md:w-80 md:h-[450px] rounded-3xl bg-brown/15" />
          </div>
        </div>
      </section>

      {/* Destaques / Seção Skeleton */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <Skeleton className="h-4 w-28 mb-3 bg-brown/20" />
          <Skeleton className="h-10 w-64 bg-brown/25" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl p-4 bg-white/40 border border-brown/10 space-y-4">
              <Skeleton className="h-56 w-full rounded-xl bg-brown/15" />
              <Skeleton className="h-6 w-3/4 bg-brown/20" />
              <Skeleton className="h-4 w-full bg-brown/10" />
              <Skeleton className="h-4 w-2/3 bg-brown/10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
