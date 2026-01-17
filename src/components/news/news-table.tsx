"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Pencil } from "lucide-react" 
import { useToast } from "@/hooks/use-toast"
import { deleteNewsItem } from "@/serverFunctions/news"
import { format } from "date-fns"

export type NewsData = {
  id: string;
  title: string;
  snippet: string;
  content: string;
  publishedAt: Date;
  author?: string | null;
}

interface NewsTableProps {
  data: NewsData[];
  onEdit: (item: NewsData) => void;
}

export function NewsTable({ data, onEdit }: NewsTableProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = (id: string) => {
    if (!confirm("Zeker weten?")) return
    startTransition(async () => {
      try {
        await deleteNewsItem(id)
        toast({ title: "Verwijderd", description: "Item verwijderd." })
      } catch (e) {
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
            <TableHead className="text-slate-400">Titel</TableHead>
            <TableHead className="text-slate-400">Auteur</TableHead>
            <TableHead className="text-right text-slate-400">Acties</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow><TableCell colSpan={4} className="text-center h-24 text-slate-400">Geen nieuws.</TableCell></TableRow>
          ) : (
            data.map((item) => (
            <TableRow key={item.id} className="hover:bg-slate-800/50 border-slate-800">
              <TableCell className="text-slate-300">
                {format(new Date(item.publishedAt), 'dd/MM/yyyy')}
              </TableCell>
              <TableCell className="font-medium text-white">
                {item.title}
                <div className="text-xs text-slate-500 truncate max-w-[300px]">{item.snippet}</div>
              </TableCell>
              <TableCell className="text-slate-300">{item.author || "Redactie"}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button size="sm" variant="ghost" className="hover:text-blue-400" onClick={() => onEdit(item)}>
                    <Pencil className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="hover:text-red-500" disabled={isPending} onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </div>
  )
}