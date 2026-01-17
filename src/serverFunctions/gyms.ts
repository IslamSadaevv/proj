'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
// FIX: Importeer extendSessionAndSetCookie
import { getSessionFromCookie, extendSessionAndSetCookie } from '@/lib/sessionUtils';
import { CreateGymSchema, UpdateGymSchema } from '@/schemas/gymSchemas';
import type { CreateGymInput, UpdateGymInput } from '@/schemas/gymSchemas';

export async function createGym(data: CreateGymInput) {
  const logger = await getLogger();
  const start = Date.now();
  
  logger.info({ action: 'createGym', data }, 'Started createGym');

  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = CreateGymSchema.safeParse(data);
  if (!parsed.success) {
    logger.error({ errors: parsed.error }, 'Validation failed');
    throw new Error('Validation failed');
  }

  try {
    const gym = await prismaClient.gym.create({
      data: parsed.data,
    });

    const duration = Date.now() - start;
    logger.info({ action: 'createGym', gymId: gym.id, duration }, 'Successfully created gym');

  } catch (error) {
    logger.error({ action: 'createGym', error }, 'Failed to create gym');
    throw new Error('Failed to create gym');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/gyms');
  redirect('/dashboard/gyms');
}

export async function updateGym(data: UpdateGymInput) {
  const logger = await getLogger();
  const start = Date.now();

  logger.info({ action: 'updateGym', gymId: data.id }, 'Started updateGym');

  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = UpdateGymSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error('Validation failed');
  }

  try {
    await prismaClient.gym.update({
      where: { id: data.id },
      data: {
        name: data.name,
        location: data.location,
      },
    });

    const duration = Date.now() - start;
    logger.info({ action: 'updateGym', gymId: data.id, duration }, 'Successfully updated gym');

  } catch (error) {
    logger.error({ action: 'updateGym', error }, 'Failed to update gym');
    throw new Error('Failed to update gym');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/gyms');
  redirect('/dashboard/gyms');
}

export async function deleteGym(id: string) {
  const logger = await getLogger();
  const start = Date.now();

  logger.info({ action: 'deleteGym', gymId: id }, 'Started deleteGym');

  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  try {
    await prismaClient.gym.delete({
      where: { id },
    });

    const duration = Date.now() - start;
    logger.info({ action: 'deleteGym', gymId: id, duration }, 'Successfully deleted gym');

  } catch (error) {
    logger.error({ action: 'deleteGym', error }, 'Failed to delete gym');
    throw new Error('Failed to delete gym');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/gyms');
}