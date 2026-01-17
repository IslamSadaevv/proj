import { getAllEvents } from '@/dal/events';
import { EventManager } from '@/components/events/event-manager';


export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <div className="p-4">
      <EventManager events={events} />
    </div>
  );
}