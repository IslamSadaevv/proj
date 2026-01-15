import { FighterProfile } from "@/components/fighters/fighter-profile"

export default async function FighterDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  
  return <FighterProfile fighterId={resolvedParams.id} />
}