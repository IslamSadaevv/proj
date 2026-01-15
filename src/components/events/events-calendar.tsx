import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const events = [
  {
    id: 1,
    name: "UFC 311",
    date: "January 18, 2025",
    location: "Las Vegas, NV",
    venue: "T-Mobile Arena",
    mainCard: [
      { fighter1: "Islam Makhachev", fighter2: "Arman Tsarukyan", weightClass: "Lightweight Championship" },
      { fighter1: "Merab Dvalishvili", fighter2: "Umar Nurmagomedov", weightClass: "Bantamweight" },
      { fighter1: "Jiri Prochazka", fighter2: "Jamahal Hill", weightClass: "Light Heavyweight" },
    ],
    status: "Upcoming",
  },
  {
    id: 2,
    name: "UFC Fight Night",
    date: "January 25, 2025",
    location: "Abu Dhabi, UAE",
    venue: "Etihad Arena",
    mainCard: [
      { fighter1: "Max Holloway", fighter2: "Arnold Allen", weightClass: "Featherweight" },
      { fighter1: "Sean Strickland", fighter2: "Paulo Costa", weightClass: "Middleweight" },
      { fighter1: "Khamzat Chimaev", fighter2: "Robert Whittaker", weightClass: "Middleweight" },
    ],
    status: "Upcoming",
  },
  {
    id: 3,
    name: "UFC 312",
    date: "February 8, 2025",
    location: "Sydney, Australia",
    venue: "Qudos Bank Arena",
    mainCard: [
      { fighter1: "Alex Volkanovski", fighter2: "Movsar Evloev", weightClass: "Featherweight" },
      { fighter1: "Tai Tuivasa", fighter2: "Jailton Almeida", weightClass: "Heavyweight" },
    ],
    status: "Upcoming",
  },
]

export function EventsCalendar() {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <Card key={event.id} className="bg-slate-900 border-slate-800">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl text-white">{event.name}</CardTitle>
                  <Badge className="bg-red-600 text-white">{event.status}</Badge>
                </div>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <p className="text-sm text-slate-500">{event.venue}</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">View Details</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Users className="h-4 w-4" />
                <span>Main Card ({event.mainCard.length} fights)</span>
              </div>
              {event.mainCard.map((fight, index) => (
                <div key={index} className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/.jpg?height=40&width=40&query=${fight.fighter1}`} />
                        <AvatarFallback className="bg-red-600 text-white text-sm">
                          {fight.fighter1
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-white">{fight.fighter1}</span>
                    </div>
                    <span className="text-red-500 font-bold mx-4">VS</span>
                    <div className="flex items-center gap-3 flex-row-reverse">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/.jpg?height=40&width=40&query=${fight.fighter2}`} />
                        <AvatarFallback className="bg-red-600 text-white text-sm">
                          {fight.fighter2
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-white">{fight.fighter2}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="border-slate-700 text-slate-400">
                      {fight.weightClass}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
