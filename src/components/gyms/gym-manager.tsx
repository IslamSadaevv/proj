'use client';

import { useState } from 'react';
import { GymTable, GymData } from './gym-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { GymForm } from './gym-form';

export function GymManager({ gyms }: { gyms: GymData[] }) {
  const [editingGym, setEditingGym] = useState<GymData | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Gyms Beheer</h1>
        <Button onClick={() => { setEditingGym(null); setIsSheetOpen(true); }} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Gym Toevoegen
        </Button>
      </div>

      <GymTable data={gyms} onEdit={(gym) => { setEditingGym(gym); setIsSheetOpen(true); }} />

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editingGym ? 'Gym Bewerken' : 'Nieuwe Gym'}</SheetTitle>
            <SheetDescription>Beheer de gegevens van de sportschool.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <GymForm 
              key={editingGym ? editingGym.id : 'new'}
              initialData={editingGym ? { id: editingGym.id, name: editingGym.name, location: editingGym.location || undefined } : undefined}
              onSuccess={() => setIsSheetOpen(false)} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}