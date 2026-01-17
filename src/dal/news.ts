import 'server-only';
import { prismaClient } from '@/dal/prismaClient';
import { cache } from 'react';

export const getAllNews = cache(async () => {
  return await prismaClient.newsItem.findMany({
    orderBy: { publishedAt: 'desc' }, 
  });
});