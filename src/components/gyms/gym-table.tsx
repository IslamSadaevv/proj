"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Pencil, MapPin, Dumbbell } from "lucide-react" 
import { useToast } from "@/hooks/use-toast"
import { deleteGym } from "@/serverFunctions/gyms"

export type GymData = {
  id: string;
  name: string;
  location?: string | null;
  _count?: { fighters: number };
}

interface GymTableProps {
  data: GymData[]
  onEdit: (gym: GymData) => void
}

export function GymTable({ data, onEdit }: GymTableProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = (id: string) => {
    if (!confirm("Weet je zeker dat je deze gym wilt verwijderen?")) return
    startTransition(async () => {
      try {
        await deleteGym(id)
        toast({ title: "Verwijderd", description: "Gym verwijderd." })
      } catch (error) {
        toast({ variant: "destructive", title: "Fout", description: "Kan niet verwijderen." })
      }
    })
  }

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-slate-800/50 border-slate-800">
            <TableHead className="text-slate-400">Naam</TableHead>
            <TableHead className="text-slate-400">Locatie</TableHead>
            <TableHead className="text-slate-400">Vechters</TableHead>
            <TableHead className="text-right text-slate-400">Acties</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow><TableCell colSpan={4} className="text-center h-24 text-slate-400">Geen gyms gevonden.</TableCell></TableRow>
          ) : (
            data.map((gym) => (
            <TableRow key={gym.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell className="font-medium text-white text-lg">{gym.name}</TableCell>
              <TableCell className="text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-500" />{gym.location || "-"}</div>
              </TableCell>
              <TableCell>
                 <div className="flex items-center gap-2 text-slate-300"><Dumbbell className="h-4 w-4 text-slate-500" />{gym._count?.fighters || 0}</div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost" className="hover:text-blue-400" onClick={() => onEdit(gym)}><Pencil className="h-4 w-4" /></Button>
                    <Button size="sm" variant="ghost" className="hover:text-red-500" disabled={isPending} onClick={() => handleDelete(gym.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </div>
  )
}