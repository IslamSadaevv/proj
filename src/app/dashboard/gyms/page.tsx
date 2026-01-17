import { getAllGyms } from '@/dal/gyms';
import { GymManager } from '@/components/gyms/gym-manager';

export default async function GymsPage() {
  const gyms = await getAllGyms();

  return (
    <div className="p-4">
      <GymManager gyms={gyms} />
    </div>
  );
}