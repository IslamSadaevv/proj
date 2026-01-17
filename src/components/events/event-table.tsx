"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Pencil, Calendar, MapPin, Swords } from "lucide-react" 
import { useToast } from "@/hooks/use-toast"
import { deleteEvent } from "@/serverFunctions/events"
import { format } from "date-fns"

// Het type data dat we van de server krijgen
export type EventData = {
  id: string;
  name: string;
  date: Date | string; // Kan string zijn na JSON serialisatie van server naar client
  location?: string | null;
  _count?: { fights: number };
}

interface EventTableProps {
  data: EventData[]
  onEdit: (event: EventData) => void
}

export function EventTable({ data, onEdit }: EventTableProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = (id: string) => {
    if (!confirm("Weet je zeker dat je dit event wilt verwijderen?")) return

    startTransition(async () => {
      try {
        await deleteEvent(id)
        toast({ title: "Verwijderd", description: "Event succesvol verwijderd." })
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
            <TableHead className="text-slate-400">Datum</TableHead>
            <TableHead className="text-slate-400">Naam</TableHead>
            <TableHead className="text-slate-400">Locatie</TableHead>
            <TableHead className="text-slate-400">Fights</TableHead>
            <TableHead className="text-right text-slate-400">Acties</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
                <TableCell colSpan={5} className="text-center h-24 text-slate-400">
                    Geen events gevonden.
                </TableCell>
            </TableRow>
          ) : (
            data.map((event) => (
            <TableRow key={event.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell className="text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    {/* new Date() is nodig omdat data over de lijn soms strings worden */}
                    {format(new Date(event.date), 'dd MMM yyyy')}
                </div>
              </TableCell>
              
              <TableCell className="font-medium text-white text-lg">
                {event.name}
              </TableCell>

              <TableCell className="text-slate-300">
                 <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    {event.location || "TBA"}
                 </div>
              </TableCell>
              
              <TableCell className="text-slate-300">
                <div className="flex items-center gap-2">
                    <Swords className="h-4 w-4 text-slate-500" />
                    {event._count?.fights || 0}
                </div>
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                    <Button 
                        size="sm" variant="ghost" 
                        className="text-slate-400 hover:text-blue-400" 
                        onClick={() => onEdit(event)}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                        size="sm" variant="ghost" 
                        className="text-slate-400 hover:text-red-500" 
                        disabled={isPending} 
                        onClick={() => handleDelete(event.id)}
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