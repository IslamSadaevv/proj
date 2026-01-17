'use client';

import { useState } from 'react';
import { FighterTable, FighterData } from './fighter-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { FighterForm } from './fighter-form';

type FighterManagerProps = {
  fighters: FighterData[];
  gyms: { id: string; name: string }[];
  weightClasses: { id: string; name: string }[];
};

export function FighterManager({ fighters, gyms, weightClasses }: FighterManagerProps) {
  // State: Welke vechter zijn we aan het bewerken? (null = nieuwe maken)
  const [editingFighter, setEditingFighter] = useState<FighterData | null>(null);
  
  // State: Is de sheet open?
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Functie om de "Nieuwe toevoegen" modus te openen
  const handleCreate = () => {
    setEditingFighter(null); // Reset formulier
    setIsSheetOpen(true);
  };

  // Functie die door de Tabel wordt aangeroepen
  const handleEdit = (fighter: FighterData) => {
    setEditingFighter(fighter); // Vul formulier met data
    setIsSheetOpen(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Vechters Beheer</h1>
        <Button onClick={handleCreate} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Vechter Toevoegen
        </Button>
      </div>

      {/* De Tabel */}
      <FighterTable data={fighters} onEdit={handleEdit} />

      {/* De Sheet (Zijbalk) met het Formulier */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="overflow-y-auto w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>{editingFighter ? 'Vechter Bewerken' : 'Nieuwe Vechter'}</SheetTitle>
            <SheetDescription>
              {editingFighter 
                ? 'Pas de gegevens van de vechter aan en sla op.' 
                : 'Vul de gegevens in om een nieuwe vechter toe te voegen.'}
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-4">
            {/* BELANGRIJK: We geven een 'key' mee die verandert. 
                Dit dwingt React om het formulier opnieuw te renderen als we wisselen 
                tussen "create" en "edit", zodat de defaultValues resetten.
            */}
            <FighterForm 
              key={editingFighter ? editingFighter.id : 'new'}
              gyms={gyms} 
              weightClasses={weightClasses} 
              // We moeten de types even casten omdat FighterData uit de DB komt en datums als Strings kan hebben na serialization
              initialData={editingFighter ? {
                ...editingFighter,
                nickname: editingFighter.nickname || undefined,
                bio: editingFighter.bio || undefined,
                imageUrl: editingFighter.imageUrl || undefined,
                weightClassId: editingFighter.weightClassId || undefined,
                gymId: editingFighter.gymId || undefined,
                // Zorg dat datum een Date object is voor het formulier
                dob: new Date(editingFighter.dob) 
              } : undefined}
              onSuccess={() => setIsSheetOpen(false)} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}