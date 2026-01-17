'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
// FIX: Importeer extendSessionAndSetCookie
import { getSessionFromCookie, extendSessionAndSetCookie } from '@/lib/sessionUtils';
import { CreateNewsSchema, UpdateNewsSchema } from '@/schemas/newsSchemas';
import type { CreateNewsInput, UpdateNewsInput } from '@/schemas/newsSchemas';

export async function createNewsItem(data: CreateNewsInput) {
  const logger = await getLogger();
  const start = Date.now();
  
  logger.info({ action: 'createNewsItem', title: data.title }, 'Started createNewsItem');

  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = CreateNewsSchema.safeParse(data);
  if (!parsed.success) {
    logger.error({ errors: parsed.error }, 'Validation failed');
    throw new Error('Validation failed');
  }

  try {
    const news = await prismaClient.newsItem.create({
      data: {
        ...parsed.data,
        publishedAt: new Date(),
      },
    });

    const duration = Date.now() - start;
    logger.info({ action: 'createNewsItem', id: news.id, duration }, 'Successfully created news item');

  } catch (error) {
    logger.error({ action: 'createNewsItem', error }, 'Failed to create news item');
    throw new Error('Failed to create news item');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/news');
  redirect('/dashboard/news');
}

export async function updateNewsItem(data: UpdateNewsInput) {
  const logger = await getLogger();
  const start = Date.now();

  logger.info({ action: 'updateNewsItem', id: data.id }, 'Started updateNewsItem');

  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = UpdateNewsSchema.safeParse(data);
  if (!parsed.success) throw new Error('Validation failed');

  try {
    await prismaClient.newsItem.update({
      where: { id: data.id },
      data: parsed.data,
    });

    const duration = Date.now() - start;
    logger.info({ action: 'updateNewsItem', id: data.id, duration }, 'Successfully updated news item');

  } catch (error) {
    logger.error({ action: 'updateNewsItem', error }, 'Failed to update news item');
    throw new Error('Failed to update news item');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/news');
  redirect('/dashboard/news');
}

export async function deleteNewsItem(id: string) {
  const logger = await getLogger();
  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  try {
    await prismaClient.newsItem.delete({ where: { id } });
    logger.info({ action: 'deleteNewsItem', id }, 'Successfully deleted news item');
  } catch (error) {
    logger.error({ action: 'deleteNewsItem', error }, 'Failed to delete news item');
    throw new Error('Failed to delete news item');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/news');
}