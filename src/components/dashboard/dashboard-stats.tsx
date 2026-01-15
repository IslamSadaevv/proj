import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Trophy } from "lucide-react"

const stats = [
  {
    title: "Tracked Fighters",
    value: "24",
    icon: Users,
    change: "+3 this month",
    changeType: "positive" as const,
  },
  {
    title: "Upcoming Events",
    value: "7",
    icon: Calendar,
    change: "Next: UFC 310",
    changeType: "neutral" as const,
  },
  {
    title: "Fantasy Points",
    value: "1,284",
    icon: Trophy,
    change: "+156 this week",
    changeType: "positive" as const,
  },
]

export function DashboardStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
