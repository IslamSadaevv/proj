import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { cache } from 'react';

export const getDashboardStats = cache(async () => {
  // We halen alle totalen parallel op voor maximale performance
  const [fighterCount, gymCount, eventCount, newsCount, nextEvent, latestNews] = await Promise.all([
    prismaClient.fighter.count(),
    prismaClient.gym.count(),
    prismaClient.event.count(),
    prismaClient.newsItem.count(),
    // Haal het eerstvolgende event op
    prismaClient.event.findFirst({
      where: { date: { gte: new Date() } },
      orderBy: { date: 'asc' },
    }),
    // Haal het laatste nieuwsbericht op
    prismaClient.newsItem.findFirst({
      orderBy: { publishedAt: 'desc' },
    }),
  ]);

  return {
    counts: {
      fighters: fighterCount,
      gyms: gymCount,
      events: eventCount,
      news: newsCount,
    },
    featured: {
      nextEvent,
      latestNews,
    },
  };
});