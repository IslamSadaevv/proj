import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const events = [
  { name: "UFC 311", date: "Jan 18, 2025", location: "Las Vegas", fights: 12 },
  { name: "UFC Fight Night", date: "Jan 25, 2025", location: "Abu Dhabi", fights: 10 },
  { name: "UFC 312", date: "Feb 8, 2025", location: "Sydney", fights: 13 },
]

export function UpcomingEvents() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="flex items-start justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
          >
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <div className="font-semibold text-white">{event.name}</div>
                <div className="text-sm text-slate-400">{event.date}</div>
                <div className="text-xs text-slate-500">{event.location}</div>
              </div>
            </div>
            <Badge variant="outline" className="border-slate-700 text-slate-400">
              {event.fights} fights
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
