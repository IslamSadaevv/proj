import { getAllFighters } from '@/dal/fighters';
import { getFormOptions } from '@/dal/options';
import { FighterManager } from '@/components/fighters/fighter-manager';

export default async function FightersPage() {
  // 1. Data ophalen op de server (Parallel)
  const [fighters, { gyms, weightClasses }] = await Promise.all([
    getAllFighters(),
    getFormOptions()
  ]);

  return (
    <div className="p-4">
      {/* We geven alle data door aan de client manager */}
      <FighterManager 
        fighters={fighters} 
        gyms={gyms} 
        weightClasses={weightClasses} 
      />
    </div>
  );
}