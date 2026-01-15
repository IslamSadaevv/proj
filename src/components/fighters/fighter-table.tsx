"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star } from "lucide-react"

const fighters = [
  {
    id: "1",
    rank: 1,
    name: "Jon Jones",
    nickname: "Bones",
    weightClass: "Heavyweight",
    record: "27-1-0",
    height: "193 cm",
    reach: "215 cm",
    status: "Active",
    avatar: "/jon-jones-fighter.jpg",
  },
  {
    id: "2",
    rank: 2,
    name: "Islam Makhachev",
    nickname: "The Finisher",
    weightClass: "Lightweight",
    record: "26-1-0",
    height: "180 cm",
    reach: "178 cm",
    status: "Active",
    avatar: "/islam-makhachev-fighter.jpg",
  },
  {
    id: "3",
    rank: 3,
    name: "Alex Pereira",
    nickname: "Poatan",
    weightClass: "Light Heavyweight",
    record: "11-2-0",
    height: "193 cm",
    reach: "201 cm",
    status: "Active",
    avatar: "/alex-pereira-fighter.jpg",
  },
  {
    id: "4",
    rank: 4,
    name: "Ilia Topuria",
    nickname: "El Matador",
    weightClass: "Featherweight",
    record: "15-0-0",
    height: "170 cm",
    reach: "172 cm",
    status: "Active",
    avatar: "/ilia-topuria-fighter.jpg",
  },
  {
    id: "5",
    rank: 5,
    name: "Dricus Du Plessis",
    nickname: "Stillknocks",
    weightClass: "Middleweight",
    record: "22-2-0",
    height: "185 cm",
    reach: "193 cm",
    status: "Active",
    avatar: "/dricus-du-plessis-fighter.jpg",
  },
  {
    id: "6",
    rank: 6,
    name: "Conor McGregor",
    nickname: "The Notorious",
    weightClass: "Lightweight",
    record: "22-6-0",
    height: "175 cm",
    reach: "188 cm",
    status: "Injured",
    avatar: "/conor-mcgregor-fighter.jpg",
  },
]

export function FighterTable() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-800/50 border-slate-800">
            <TableHead className="text-slate-400">Rank</TableHead>
            <TableHead className="text-slate-400">Fighter</TableHead>
            <TableHead className="text-slate-400">Weight Class</TableHead>
            <TableHead className="text-slate-400">Record</TableHead>
            <TableHead className="text-slate-400">Height</TableHead>
            <TableHead className="text-slate-400">Reach</TableHead>
            <TableHead className="text-slate-400">Status</TableHead>
            <TableHead className="text-slate-400"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fighters.map((fighter) => (
            <TableRow key={fighter.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell className="font-medium text-white">#{fighter.rank}</TableCell>
              <TableCell>
                <Link
                  href={`/dashboard/fighters/${fighter.id}`}
                  className="flex items-center gap-3 hover:text-red-400 transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={fighter.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-red-600 text-white">
                      {fighter.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{fighter.name}</div>
                    <div className="text-sm text-slate-400">"{fighter.nickname}"</div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="border-slate-700 text-slate-300">
                  {fighter.weightClass}
                </Badge>
              </TableCell>
              <TableCell className="text-white font-mono">{fighter.record}</TableCell>
              <TableCell className="text-slate-300">{fighter.height}</TableCell>
              <TableCell className="text-slate-300">{fighter.reach}</TableCell>
              <TableCell>
                <Badge
                  variant={fighter.status === "Active" ? "default" : "destructive"}
                  className={fighter.status === "Active" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {fighter.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-red-400">
                  <Star className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
