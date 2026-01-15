import { GymsGrid } from "@/components/gyms/gyms-grid"

export default function GymsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Gyms & Teams</h1>
        <p className="text-slate-400">Top MMA training facilities</p>
      </div>

      <GymsGrid />
    </div>
  )
}
