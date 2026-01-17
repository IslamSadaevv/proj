import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <Skeleton className="h-8 w-48 mb-2 bg-slate-800" />
        <Skeleton className="h-4 w-64 bg-slate-800" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Genereer 4 skeleton cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-24 bg-slate-800" />
              <Skeleton className="h-4 w-4 bg-slate-800" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-8 w-12 bg-slate-800" />
              <Skeleton className="h-3 w-32 mt-1 bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
         <Skeleton className="h-40 w-full bg-slate-800 rounded-xl" />
         <Skeleton className="h-40 w-full bg-slate-800 rounded-xl" />
      </div>
    </div>
  )
}