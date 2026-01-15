import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Activity } from "lucide-react"

interface FighterProfileProps {
  fighterId: string
}

const fighterData = {
  name: "Jon Jones",
  nickname: "Bones",
  country: "🇺🇸",
  avatar: "/jon-jones-ufc-fighter-portrait.jpg",
  hero: "/jon-jones-ufc-octagon-champion.jpg",
  weightClass: "Heavyweight",
  record: "27-1-0",
  height: "193 cm",
  weight: "111 kg",
  reach: "215 cm",
  legReach: "107 cm",
  status: "Active",
  gym: "Jackson Wink MMA",
  styles: ["BJJ Black Belt", "Muay Thai", "Wrestling", "Boxing"],
  bio: "Widely regarded as one of the greatest mixed martial artists of all time, Jon Jones is known for his exceptional reach, creative striking, and dominant wrestling. Former UFC Light Heavyweight Champion and current UFC Heavyweight Champion.",
  fightHistory: [
    { opponent: "Stipe Miocic", result: "Win", method: "TKO", round: 3, date: "Nov 2024", event: "UFC 309" },
    { opponent: "Ciryl Gane", result: "Win", method: "Submission", round: 1, date: "Mar 2023", event: "UFC 285" },
    { opponent: "Dominick Reyes", result: "Win", method: "Decision", round: 5, date: "Feb 2020", event: "UFC 247" },
    {
      opponent: "Thiago Santos",
      result: "Win",
      method: "Split Decision",
      round: 5,
      date: "Jul 2019",
      event: "UFC 239",
    },
  ],
}

export function FighterProfile({ fighterId }: FighterProfileProps) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img
          src={fighterData.hero || "/placeholder.svg"}
          alt={fighterData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute bottom-6 left-6 flex items-end gap-6">
          <Avatar className="h-32 w-32 border-4 border-slate-900">
            <AvatarImage src={fighterData.avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-red-600 text-white text-3xl">
              {fighterData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="pb-2">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-white">{fighterData.name}</h1>
              <span className="text-2xl">{fighterData.country}</span>
            </div>
            <p className="text-xl text-slate-300">"{fighterData.nickname}"</p>
          </div>
        </div>
        <div className="absolute top-6 right-6">
          <Button className="bg-red-600 hover:bg-red-700">
            <Star className="h-4 w-4 mr-2" />
            Track Fighter
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-400">Record</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{fighterData.record}</div>
            <p className="text-xs text-slate-500">Win-Loss-Draw</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-400">Height / Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{fighterData.height}</div>
            <p className="text-xs text-slate-500">{fighterData.weight}</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-400">Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{fighterData.reach}</div>
            <p className="text-xs text-slate-500">Leg: {fighterData.legReach}</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-slate-400">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-600 text-white">{fighterData.status}</Badge>
            <p className="text-xs text-slate-500 mt-2">{fighterData.weightClass}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Fighting Styles */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-500" />
              Fighting Styles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {fighterData.styles.map((style) => (
              <Badge key={style} variant="outline" className="border-red-600 text-red-400 mr-2">
                {style}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Gym/Team */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Trophy className="h-5 w-5 text-red-500" />
              Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer">
              <div className="font-semibold text-white">{fighterData.gym}</div>
              <p className="text-sm text-slate-400">Albuquerque, New Mexico</p>
            </div>
          </CardContent>
        </Card>

        {/* Biography */}
        <Card className="bg-slate-900 border-slate-800 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-white">Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm leading-relaxed">{fighterData.bio}</p>
          </CardContent>
        </Card>
      </div>

      {/* Fight History */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Fight History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {fighterData.fightHistory.map((fight, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Badge className={fight.result === "Win" ? "bg-green-600" : "bg-red-600"}>{fight.result}</Badge>
                  <div>
                    <div className="font-semibold text-white">vs {fight.opponent}</div>
                    <div className="text-sm text-slate-400">
                      {fight.method} • Round {fight.round}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white">{fight.event}</div>
                  <div className="text-xs text-slate-400">{fight.date}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
