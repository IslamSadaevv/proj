import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users } from "lucide-react"

const gyms = [
  {
    id: 1,
    name: "Jackson Wink MMA",
    location: "Albuquerque, New Mexico",
    fighters: 23,
    champions: 3,
    image: "/mma-gym-training-facility.jpg",
    notable: ["Jon Jones", "Holly Holm", "Diego Sanchez"],
  },
  {
    id: 2,
    name: "American Top Team",
    location: "Coconut Creek, Florida",
    fighters: 35,
    champions: 5,
    image: "/mma-gym-octagon-training.jpg",
    notable: ["Amanda Nunes", "Dustin Poirier", "Joanna Jedrzejczyk"],
  },
  {
    id: 3,
    name: "AKA (American Kickboxing Academy)",
    location: "San Jose, California",
    fighters: 28,
    champions: 4,
    image: "/kickboxing-gym-training.jpg",
    notable: ["Khabib Nurmagomedov", "Daniel Cormier", "Islam Makhachev"],
  },
  {
    id: 4,
    name: "Tristar Gym",
    location: "Montreal, Canada",
    fighters: 19,
    champions: 2,
    image: "/placeholder.svg?height=200&width=400",
    notable: ["Georges St-Pierre", "Rory MacDonald"],
  },
  {
    id: 5,
    name: "City Kickboxing",
    location: "Auckland, New Zealand",
    fighters: 15,
    champions: 2,
    image: "/placeholder.svg?height=200&width=400",
    notable: ["Israel Adesanya", "Alexander Volkanovski"],
  },
  {
    id: 6,
    name: "Tiger Muay Thai",
    location: "Phuket, Thailand",
    fighters: 31,
    champions: 1,
    image: "/placeholder.svg?height=200&width=400",
    notable: ["Valentina Shevchenko", "Antonina Shevchenko"],
  },
]

export function GymsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gyms.map((gym) => (
        <Card
          key={gym.id}
          className="bg-slate-900 border-slate-800 overflow-hidden hover:border-red-600 transition-colors cursor-pointer"
        >
          <div className="h-40 overflow-hidden">
            <img
              src={gym.image || "/placeholder.svg"}
              alt={gym.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="text-white">{gym.name}</CardTitle>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="h-4 w-4" />
              {gym.location}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-300">{gym.fighters} Fighters</span>
              </div>
              <Badge className="bg-red-600 text-white">{gym.champions} Champions</Badge>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-2">Notable Fighters:</p>
              <div className="flex flex-wrap gap-2">
                {gym.notable.map((fighter) => (
                  <Badge key={fighter} variant="outline" className="border-slate-700 text-slate-400 text-xs">
                    {fighter}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
