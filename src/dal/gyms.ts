import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { cache } from 'react';

export const getAllGyms = cache(async () => {
  return await prismaClient.gym.findMany({
    orderBy: { name: 'asc' },
    include: {
      _count: {
        select: { fighters: true }
      }
    }
  });
});