import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { cache } from 'react';

// Cache zorgt ervoor dat we niet onnodig de DB belasten als we dit op meerdere plekken gebruiken
export const getFormOptions = cache(async () => {
  const [gyms, weightClasses] = await Promise.all([
    prismaClient.gym.findMany({ orderBy: { name: 'asc' } }),
    prismaClient.weightClass.findMany({ orderBy: { limitLb: 'asc' } })
  ]);
  
  return { gyms, weightClasses };
});