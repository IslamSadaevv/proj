"use client"

import Link from "next/link"
import { useTransition } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Pencil } from "lucide-react" 
import { useToast } from "@/hooks/use-toast"
import { deleteFighter } from "@/serverFunctions/fighters"

// We exporteren dit type nu zodat we het in de Manager kunnen gebruiken
export type FighterData = {
  id: string
  firstName: string
  lastName: string
  nickname?: string | null
  wins: number
  losses: number
  draws: number
  heightCm: number
  reachCm: number
  dob: Date | string // Date uit DB, string uit JSON serialization
  bio?: string | null
  imageUrl?: string | null
  weightClassId?: string | null
  gymId?: string | null
  weightClass?: { name: string; id: string } | null
  gym?: { name: string; id: string } | null
}

interface FighterTableProps {
  data: FighterData[]
  onEdit: (fighter: FighterData) => void // Nieuwe prop!
}

export function FighterTable({ data, onEdit }: FighterTableProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = (id: string) => {
    if (!confirm("Weet je zeker dat je deze vechter wilt verwijderen?")) return

    startTransition(async () => {
      try {
        await deleteFighter(id)
        toast({ title: "Verwijderd", description: "Vechter succesvol verwijderd." })
      } catch (error) {
        toast({ variant: "destructive", title: "Fout", description: "Kon niet verwijderen." })
      }
    })
  }

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-800/50 border-slate-800">
            <TableHead className="text-slate-400">Fighter</TableHead>
            <TableHead className="text-slate-400">Weight Class</TableHead>
            <TableHead className="text-slate-400">Gym</TableHead>
            <TableHead className="text-slate-400">Record</TableHead>
            <TableHead className="text-right text-slate-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
                <TableCell colSpan={5} className="text-center h-24 text-slate-400">
                    Geen vechters gevonden.
                </TableCell>
            </TableRow>
          ) : (
            data.map((fighter) => (
            <TableRow key={fighter.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell>
                <Link href={`/dashboard/fighters/${fighter.id}`} className="flex items-center gap-3 hover:text-red-400 transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={fighter.imageUrl || "/placeholder.svg"} />
                    <AvatarFallback className="bg-red-600 text-white">{fighter.firstName[0]}{fighter.lastName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{fighter.firstName} {fighter.lastName}</div>
                    {fighter.nickname && <div className="text-sm text-slate-400">"{fighter.nickname}"</div>}
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="border-slate-700 text-slate-300">
                  {fighter.weightClass?.name || "-"}
                </Badge>
              </TableCell>
              <TableCell className="text-slate-300">{fighter.gym?.name || "-"}</TableCell>
              <TableCell className="text-white font-mono">{fighter.wins}-{fighter.losses}-{fighter.draws}</TableCell>
              
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    {/* EDIT BUTTON: Roept nu de onEdit functie aan */}
                    <Button 
                        size="sm" variant="ghost" 
                        className="text-slate-400 hover:text-blue-400"
                        onClick={() => onEdit(fighter)}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>

                    <Button 
                        size="sm" variant="ghost" 
                        className="text-slate-400 hover:text-red-500"
                        disabled={isPending}
                        onClick={() => handleDelete(fighter.id)}
                    >
                        {isPending ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" /> : <Trash2 className="h-4 w-4" />}
                    </Button>
                </div>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </div>
  )
}