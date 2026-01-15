import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function LiveFightCard() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Live Fight Card</CardTitle>
          <Badge className="bg-red-600 text-white">LIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-slate-400 mb-4">UFC 310 - Main Event</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/mma-fighter-1.jpg" />
              <AvatarFallback className="bg-red-600 text-white">JJ</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-white">Jon Jones</div>
              <div className="text-sm text-slate-400">27-1-0</div>
            </div>
          </div>

          <div className="text-2xl font-bold text-red-600 mx-6">VS</div>

          <div className="flex items-center gap-3 flex-1 flex-row-reverse">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/mma-fighter-2.jpg" />
              <AvatarFallback className="bg-red-600 text-white">SG</AvatarFallback>
            </Avatar>
            <div className="text-right">
              <div className="font-bold text-white">Stipe Miocic</div>
              <div className="text-sm text-slate-400">20-4-0</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-center">
          <Badge variant="outline" className="border-red-600 text-red-400">
            Heavyweight Championship
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
