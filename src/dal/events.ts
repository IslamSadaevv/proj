import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { cache } from 'react';

export const getAllEvents = cache(async () => {
  return await prismaClient.event.findMany({
    orderBy: { date: 'asc' }, // Oudste eerst (of 'desc' voor nieuwste eerst)
    include: {
      _count: { select: { fights: true } } // Tel hoeveel gevechten er zijn
    }
  });
});