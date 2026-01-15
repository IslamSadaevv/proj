import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
import { cache } from 'react';

// Cache zorgt voor deduplicatie van requests binnen 1 render cycle (Lecture 4)
export const getAllFighters = cache(async () => {
  const logger = await getLogger();
  logger.info({ action: 'getAllFighters' }, 'Fetching all fighters');

  try {
    const fighters = await prismaClient.fighter.findMany({
      orderBy: { lastName: 'asc' },
      include: {
        weightClass: true,
        gym: true,
      },
    });
    return fighters;
  } catch (error) {
    logger.error({ action: 'getAllFighters', error }, 'Failed to fetch fighters');
    return [];
  }
});

export const getFighterById = cache(async (id: string) => {
  const logger = await getLogger();
  logger.info({ action: 'getFighterById', id }, 'Fetching fighter details');

  try {
    const fighter = await prismaClient.fighter.findUnique({
      where: { id },
      include: {
        weightClass: true,
        gym: true,
        fightsA: { include: { fighterB: true, event: true } }, // Gevechten waar hij A is
        fightsB: { include: { fighterA: true, event: true } }, // Gevechten waar hij B is
      },
    });
    return fighter;
  } catch (error) {
    logger.error({ action: 'getFighterById', error }, 'Failed to fetch fighter');
    return null;
  }
});