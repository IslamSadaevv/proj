import { FighterTable } from "@/components/fighters/fighter-table"
import { FighterFilters } from "@/components/fighters/fighter-filters"

export default function FightersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Fighter Roster</h1>
          <p className="text-slate-400">Browse and track your favorite fighters</p>
        </div>
      </div>

      <FighterFilters />
      <FighterTable />
    </div>
  )
}
