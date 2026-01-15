import { getAllFighters } from '@/dal/fighters';
import { getFormOptions } from '@/dal/options';
import { FighterTable } from '@/components/fighters/fighter-table';
import { AddFighterSheet } from '@/components/fighters/add-fighter-sheet';

export default async function FightersPage() {
  // 1. Data Fetching (Parallel voor snelheid)
  const fightersData = getAllFighters();
  const optionsData = getFormOptions();

  const [fighters, { gyms, weightClasses }] = await Promise.all([
    fightersData,
    optionsData
  ]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vechters Beheer</h1>
        {/* We geven de opties door aan de Sheet voor het formulier */}
        <AddFighterSheet gyms={gyms} weightClasses={weightClasses} />
      </div>

      {/* Tabel met vechters */}
      <FighterTable data={fighters} />
    </div>
  );
}