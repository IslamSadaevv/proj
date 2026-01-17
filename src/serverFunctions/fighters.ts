'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
// FIX: Importeer de sessie-verleng functie
import { getSessionFromCookie, extendSessionAndSetCookie } from '@/lib/sessionUtils';
import { CreateFighterSchema, UpdateFighterSchema } from '@/schemas/fighterSchemas';
import type { CreateFighterInput, UpdateFighterInput } from '@/schemas/fighterSchemas';

export async function createFighter(data: CreateFighterInput) {
  const logger = await getLogger();
  const start = Date.now();
  
  logger.info({ action: 'createFighter', data }, 'Started createFighter operation');

  const session = await getSessionFromCookie();
  if (!session) {
    const errorMsg = 'Unauthorized: You must be logged in to create a fighter.';
    logger.warn({ action: 'createFighter' }, errorMsg);
    throw new Error(errorMsg);
  }

  const parsed = CreateFighterSchema.safeParse(data);
  if (!parsed.success) {
    const errorMsg = 'Validation failed';
    logger.error({ action: 'createFighter', errors: parsed.error }, errorMsg);
    throw new Error(errorMsg);
  }

  try {
    const { 
      firstName, lastName, nickname, wins, losses, draws, 
      heightCm, reachCm, dob, bio, imageUrl, weightClassId, gymId 
    } = parsed.data;

    const newFighter = await prismaClient.fighter.create({
      data: {
        firstName,
        lastName,
        nickname,
        wins,
        losses,
        draws,
        heightCm,
        reachCm,
        dob,
        bio,
        imageUrl,
        weightClass: weightClassId ? { connect: { id: weightClassId } } : undefined,
        gym: gymId ? { connect: { id: gymId } } : undefined,
      },
    });

    const duration = Date.now() - start;
    logger.info(
      { action: 'createFighter', fighterId: newFighter.id, duration }, 
      'Successfully created fighter'
    );

  } catch (error) {
    logger.error({ action: 'createFighter', error }, 'Failed to create fighter');
    throw new Error('Failed to create fighter');
  }

  // FIX: Ververs de sessie cookie expliciet voor de redirect
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/fighters');
  redirect('/dashboard/fighters');
}

export async function updateFighter(data: UpdateFighterInput) {
  const logger = await getLogger();
  const start = Date.now();

  logger.info({ action: 'updateFighter', fighterId: data.id }, 'Started updateFighter operation');

  const session = await getSessionFromCookie();
  if (!session) {
    logger.warn({ action: 'updateFighter' }, 'Unauthorized update attempt');
    throw new Error('Unauthorized');
  }

  const parsed = UpdateFighterSchema.safeParse(data);
  if (!parsed.success) {
    logger.error({ action: 'updateFighter', errors: parsed.error }, 'Validation failed');
    throw new Error('Validation failed');
  }

  try {
    const { 
      id, firstName, lastName, nickname, wins, losses, draws, 
      heightCm, reachCm, dob, bio, imageUrl, weightClassId, gymId 
    } = parsed.data;

    await prismaClient.fighter.update({
      where: { id },
      data: {
        firstName,
        lastName,
        nickname,
        wins,
        losses,
        draws,
        heightCm,
        reachCm,
        dob,
        bio,
        imageUrl,
        weightClass: weightClassId ? { connect: { id: weightClassId } } : { disconnect: true },
        gym: gymId ? { connect: { id: gymId } } : { disconnect: true },
      },
    });

    const duration = Date.now() - start;
    logger.info({ action: 'updateFighter', fighterId: id, duration }, 'Successfully updated fighter');

  } catch (error) {
    logger.error({ action: 'updateFighter', error }, 'Failed to update fighter');
    throw new Error('Failed to update fighter');
  }

  // FIX: Ververs de sessie cookie expliciet voor de redirect
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/fighters');
  redirect('/dashboard/fighters');
}

export async function deleteFighter(id: string) {
  const logger = await getLogger();
  const start = Date.now();

  logger.info({ action: 'deleteFighter', fighterId: id }, 'Started deleteFighter operation');

  const session = await getSessionFromCookie();
  if (!session) {
    logger.warn({ action: 'deleteFighter' }, 'Unauthorized delete attempt');
    throw new Error('Unauthorized');
  }

  try {
    await prismaClient.fighter.delete({
      where: { id },
    });

    const duration = Date.now() - start;
    logger.info({ action: 'deleteFighter', fighterId: id, duration }, 'Successfully deleted fighter');

  } catch (error) {
    logger.error({ action: 'deleteFighter', error }, 'Failed to delete fighter');
    throw new Error('Failed to delete fighter');
  }

  // FIX: Ververs de sessie cookie ook bij delete
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/fighters');
}