"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface AddFighterSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddFighterSheet({ open, onOpenChange }: AddFighterSheetProps) {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    weightClass: "",
    gender: "",
    gym: "",
    height: "",
    reach: "",
    wins: "",
    losses: "",
    draws: "",
    dateOfBirth: "",
    biography: "",
  })

  const availableStyles = ["BJJ", "Boxing", "Muay Thai", "Wrestling", "Karate", "Taekwondo", "Judo", "Kickboxing"]

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) => (prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...formData, fightingStyles: selectedStyles })
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-slate-900 border-slate-800 w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-white text-2xl">Add New Fighter</SheetTitle>
          <SheetDescription className="text-slate-400">
            Enter the fighter's information. All fields marked with * are required.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-slate-200">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="Jon"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-slate-200">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="Jones"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nickname" className="text-slate-200">
              Nickname
            </Label>
            <Input
              id="nickname"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white"
              placeholder="Bones"
            />
          </div>

          {/* Weight Class and Gender */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weightClass" className="text-slate-200">
                Weight Class *
              </Label>
              <Select
                value={formData.weightClass}
                onValueChange={(value) => setFormData({ ...formData, weightClass: value })}
              >
                <SelectTrigger id="weightClass" className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
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

            <div className="space-y-2">
              <Label htmlFor="gender" className="text-slate-200">
                Gender *
              </Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <SelectTrigger id="gender" className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="male" className="text-white focus:bg-slate-700 focus:text-white">
                    Male
                  </SelectItem>
                  <SelectItem value="female" className="text-white focus:bg-slate-700 focus:text-white">
                    Female
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Gym Association */}
          <div className="space-y-2">
            <Label htmlFor="gym" className="text-slate-200">
              Gym Association
            </Label>
            <Select value={formData.gym} onValueChange={(value) => setFormData({ ...formData, gym: value })}>
              <SelectTrigger id="gym" className="bg-slate-800 border-slate-700 text-white">
                <SelectValue placeholder="Select gym" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="jackson-wink" className="text-white focus:bg-slate-700 focus:text-white">
                  Jackson Wink MMA
                </SelectItem>
                <SelectItem value="att" className="text-white focus:bg-slate-700 focus:text-white">
                  American Top Team
                </SelectItem>
                <SelectItem value="aka" className="text-white focus:bg-slate-700 focus:text-white">
                  AKA (American Kickboxing Academy)
                </SelectItem>
                <SelectItem value="tri-star" className="text-white focus:bg-slate-700 focus:text-white">
                  Tristar Gym
                </SelectItem>
                <SelectItem value="city-kickboxing" className="text-white focus:bg-slate-700 focus:text-white">
                  City Kickboxing
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Physical Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height" className="text-slate-200">
                Height (cm) *
              </Label>
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="193"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reach" className="text-slate-200">
                Reach (cm) *
              </Label>
              <Input
                id="reach"
                type="number"
                value={formData.reach}
                onChange={(e) => setFormData({ ...formData, reach: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="215"
                required
              />
            </div>
          </div>

          {/* Fight Record */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="wins" className="text-slate-200">
                Wins *
              </Label>
              <Input
                id="wins"
                type="number"
                value={formData.wins}
                onChange={(e) => setFormData({ ...formData, wins: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="27"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="losses" className="text-slate-200">
                Losses *
              </Label>
              <Input
                id="losses"
                type="number"
                value={formData.losses}
                onChange={(e) => setFormData({ ...formData, losses: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="1"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="draws" className="text-slate-200">
                Draws *
              </Label>
              <Input
                id="draws"
                type="number"
                value={formData.draws}
                onChange={(e) => setFormData({ ...formData, draws: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Fighting Styles - Multi-Select */}
          <div className="space-y-2">
            <Label className="text-slate-200">Fighting Styles *</Label>
            <div className="flex flex-wrap gap-2 p-3 bg-slate-800 rounded-lg border border-slate-700 min-h-[48px]">
              {selectedStyles.map((style) => (
                <Badge key={style} className="bg-red-600 text-white hover:bg-red-700">
                  {style}
                  <button type="button" onClick={() => toggleStyle(style)} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableStyles
                .filter((s) => !selectedStyles.includes(s))
                .map((style) => (
                  <Button
                    key={style}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => toggleStyle(style)}
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    + {style}
                  </Button>
                ))}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="text-slate-200">
              Date of Birth *
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white"
              required
            />
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <Label htmlFor="biography" className="text-slate-200">
              Biography
            </Label>
            <Textarea
              id="biography"
              value={formData.biography}
              onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white min-h-[100px]"
              placeholder="Enter fighter's biography, achievements, and background..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              Add Fighter
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
