"use client"

import Link from "next/link"
import { useTransition } from "react"
import { useRouter } from "next/navigation"

// UI Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Pencil } from "lucide-react" // Icons voor CRUD acties
import { useToast } from "@/hooks/use-toast"

// Backend Actions
import { deleteFighter } from "@/serverFunctions/fighters"

// Dit type matcht met de data die we ophalen in src/dal/fighters.ts
type FighterData = {
  id: string
  firstName: string
  lastName: string
  nickname?: string | null
  wins: number
  losses: number
  draws: number
  heightCm: number
  reachCm: number
  imageUrl?: string | null
  weightClass?: { name: string } | null
  gym?: { name: string } | null
}

interface FighterTableProps {
  data: FighterData[]
}

export function FighterTable({ data }: FighterTableProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()

  const handleDelete = (id: string) => {
    // Simpele client-side bevestiging
    if (!confirm("Weet je zeker dat je deze vechter wilt verwijderen? Dit kan niet ongedaan gemaakt worden.")) {
      return
    }

    startTransition(async () => {
      try {
        await deleteFighter(id)
        toast({ 
            title: "Verwijderd", 
            description: "Vechter succesvol verwijderd uit de database." 
        })
      } catch (error) {
        toast({ 
            variant: "destructive", 
            title: "Fout", 
            description: "Er ging iets mis bij het verwijderen." 
        })
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
            <TableHead className="text-slate-400">Height / Reach</TableHead>
            <TableHead className="text-right text-slate-400">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
                <TableCell colSpan={6} className="text-center h-24 text-slate-400">
                    Geen vechters gevonden in de database.
                </TableCell>
            </TableRow>
          ) : (
            data.map((fighter) => (
            <TableRow key={fighter.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell>
                <Link
                  href={`/dashboard/fighters/${fighter.id}`}
                  className="flex items-center gap-3 hover:text-red-400 transition-colors"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={fighter.imageUrl || "/placeholder.svg"} />
                    <AvatarFallback className="bg-red-600 text-white">
                      {fighter.firstName[0]}{fighter.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">
                        {fighter.firstName} {fighter.lastName}
                    </div>
                    {fighter.nickname && (
                        <div className="text-sm text-slate-400">"{fighter.nickname}"</div>
                    )}
                  </div>
                </Link>
              </TableCell>
              
              <TableCell>
                <Badge variant="outline" className="border-slate-700 text-slate-300">
                  {fighter.weightClass?.name || "No Class"}
                </Badge>
              </TableCell>

              <TableCell className="text-slate-300">
                  {fighter.gym?.name || "-"}
              </TableCell>
              
              <TableCell className="text-white font-mono">
                  {fighter.wins}-{fighter.losses}-{fighter.draws}
              </TableCell>
              
              <TableCell className="text-slate-300">
                 {fighter.heightCm}cm / {fighter.reachCm}cm
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    {/* EDIT BUTTON: Voorlopig placeholder, later kan je hier een link naar edit page zetten */}
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-slate-400 hover:text-blue-400"
                        onClick={() => {
                            // Hier zou je de AddFighterSheet kunnen openen in 'Edit' mode
                            // Voor nu even een placeholder alert
                            alert("Edit functionaliteit komt via de Sheet (klik op 'Vechter Toevoegen' en pas de logica aan als je dit wilt implementeren)")
                        }}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>

                    {/* DELETE BUTTON: Vereist voor deel 2 */}
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-slate-400 hover:text-red-500 hover:bg-red-950/30"
                        disabled={isPending}
                        onClick={() => handleDelete(fighter.id)}
                    >
                        {isPending ? (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
                        ) : (
                            <Trash2 className="h-4 w-4" />
                        )}
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