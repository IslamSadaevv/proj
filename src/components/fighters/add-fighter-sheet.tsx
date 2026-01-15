'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FighterForm } from './fighter-form';
import { Plus } from 'lucide-react';

// Deze props moeten overeenkomen met wat page.tsx doorgeeft
interface AddFighterSheetProps {
  gyms: { id: string; name: string }[];
  weightClasses: { id: string; name: string }[];
}

export function AddFighterSheet({ gyms, weightClasses }: AddFighterSheetProps) {
  // We beheren de open/close state hier, zodat we de sheet kunnen sluiten na success
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" /> Vechter Toevoegen
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Nieuwe Vechter</SheetTitle>
          <SheetDescription>
            Vul de gegevens in. Alle velden worden gevalideerd via Zod.
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-4">
          {/* We geven de data en de close-functie door aan het formulier */}
          <FighterForm 
            gyms={gyms} 
            weightClasses={weightClasses} 
            onSuccess={() => setOpen(false)} 
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}