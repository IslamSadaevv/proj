"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Calendar, Building2, Newspaper, Settings } from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Fighters", href: "/dashboard/fighters" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: Building2, label: "Gyms", href: "/dashboard/gyms" },
  { icon: Newspaper, label: "News", href: "/dashboard/news" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">FC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">FightCamp</h1>
            <p className="text-xs text-slate-400">MMA Tracker</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive ? "bg-red-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
