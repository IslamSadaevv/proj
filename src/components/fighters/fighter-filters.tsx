"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { AddFighterSheet } from "./add-fighter-sheet"

export function FighterFilters() {
  const [showAddSheet, setShowAddSheet] = useState(false)
  const [championsOnly, setChampionsOnly] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between gap-4 bg-slate-900 p-4 rounded-lg border border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="weight-class" className="text-slate-400 text-sm whitespace-nowrap">
              Weight Class
            </Label>
            <Select defaultValue="all">
              <SelectTrigger id="weight-class" className="w-[180px] bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all" className="text-white focus:bg-slate-700 focus:text-white">
                  All Classes
                </SelectItem>
                <SelectItem value="heavyweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Heavyweight
                </SelectItem>
                <SelectItem value="light-heavyweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Light Heavyweight
                </SelectItem>
                <SelectItem value="middleweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Middleweight
                </SelectItem>
                <SelectItem value="welterweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Welterweight
                </SelectItem>
                <SelectItem value="lightweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Lightweight
                </SelectItem>
                <SelectItem value="featherweight" className="text-white focus:bg-slate-700 focus:text-white">
                  Featherweight
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="champions-only" checked={championsOnly} onCheckedChange={setChampionsOnly} />
            <Label htmlFor="champions-only" className="text-slate-400 text-sm cursor-pointer">
              Champions Only
            </Label>
          </div>
        </div>

        <Button onClick={() => setShowAddSheet(true)} className="bg-red-600 hover:bg-red-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Fighter
        </Button>
      </div>

      <AddFighterSheet open={showAddSheet} onOpenChange={setShowAddSheet} />
    </>
  )
}
