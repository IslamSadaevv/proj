import { EventsCalendar } from "@/components/events/events-calendar"

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Events Calendar</h1>
        <p className="text-slate-400">Upcoming and past MMA events</p>
      </div>

      <EventsCalendar />
    </div>
  )
}
