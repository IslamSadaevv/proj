'use client';

import { useState } from 'react';
import { NewsTable, NewsData } from './news-table';
import { NewsForm } from './news-form';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export function NewsManager({ news }: { news: NewsData[] }) {
  const [editingItem, setEditingItem] = useState<NewsData | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Nieuwsbeheer</h1>
        <Button onClick={() => { setEditingItem(null); setIsSheetOpen(true); }} className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" /> Nieuws Toevoegen
        </Button>
      </div>

      <NewsTable data={news} onEdit={(item) => { setEditingItem(item); setIsSheetOpen(true); }} />

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{editingItem ? 'Artikel Bewerken' : 'Nieuw Artikel'}</SheetTitle>
          </SheetHeader>
          <div className="py-4">
            <NewsForm 
              key={editingItem ? editingItem.id : 'new'}
              initialData={editingItem ? { ...editingItem, author: editingItem.author || undefined } : undefined}
              onSuccess={() => setIsSheetOpen(false)} 
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}