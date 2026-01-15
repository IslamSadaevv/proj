import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { LiveFightCard } from "@/components/dashboard/live-fight-card"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400">Welcome back to FightCamp</p>
      </div>

      <DashboardStats />

      <div className="grid lg:grid-cols-2 gap-6">
        <LiveFightCard />
        <UpcomingEvents />
      </div>
    </div>
  )
}
