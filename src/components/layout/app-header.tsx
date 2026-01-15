"use client"

import Link from "next/link"
import { Search, Bell, ChevronDown, LogOut, User, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutAction } from "@/serverFunctions/auth"

export function AppHeader() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search fighters, events, gyms..."
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback className="bg-red-600 text-white">JD</AvatarFallback>
              </Avatar>
              <span className="text-white font-medium">John Doe</span>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-700" />
            
            {/* Profile Link */}
            <DropdownMenuItem asChild>
              <Link 
                href="/dashboard" 
                className="text-slate-300 focus:bg-slate-700 focus:text-white cursor-pointer w-full flex items-center"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>

            {/* Settings Link */}
            <DropdownMenuItem asChild>
              <Link 
                href="/dashboard" 
                className="text-slate-300 focus:bg-slate-700 focus:text-white cursor-pointer w-full flex items-center"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-slate-700" />
            
            {/* Logout Action */}
            <DropdownMenuItem
              className="text-red-400 focus:bg-slate-700 focus:text-red-400 cursor-pointer"
              onClick={async () => {
                await logoutAction()
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}