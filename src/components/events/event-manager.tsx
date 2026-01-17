'use client';

import { useState } from 'react';
import { EventTable, EventData } from './event-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { EventForm } from './event-form';

export function EventManager({ events }: { events: EventData[] }) {
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Events Beheer</h1>
        <Button onClick={() => { setEditingEvent(null); setIsSheetOpen(true); }} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Event Toevoegen
        </Button>
      </div>

      <EventTable data={events} onEdit={(evt) => { setEditingEvent(evt); setIsSheetOpen(true); }} />

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editingEvent ? 'Event Bewerken' : 'Nieuw Event'}</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <EventForm 
              key={editingEvent ? editingEvent.id : 'new'}
              initialData={editingEvent ? { 
                  id: editingEvent.id, 
                  name: editingEvent.name, 
                  location: editingEvent.location || undefined,
                  date: new Date(editingEvent.date)
              } : undefined}
              onSuccess={() => setIsSheetOpen(false)} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}