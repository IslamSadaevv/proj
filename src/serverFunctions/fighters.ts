'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
import { getSessionFromCookie } from '@/lib/sessionUtils';
import { CreateFighterSchema, UpdateFighterSchema } from '@/schemas/fighterSchemas';
import type { CreateFighterInput, UpdateFighterInput } from '@/schemas/fighterSchemas';

/**
 * CREATE Fighter Action
 */
export async function createFighter(data: CreateFighterInput) {
  const logger = await getLogger();
  const start = Date.now();
  
  // 1. Logging Start
  logger.info({ action: 'createFighter', data }, 'Started createFighter operation');

  // 2. Auth Check (Lecture 5: Security)
  const session = await getSessionFromCookie();
  if (!session) {
    const errorMsg = 'Unauthorized: You must be logged in to create a fighter.';
    logger.warn({ action: 'createFighter' }, errorMsg);
    throw new Error(errorMsg);
  }

  // 3. Validation (Server-side)
  const parsed = CreateFighterSchema.safeParse(data);
  if (!parsed.success) {
    const errorMsg = 'Validation failed';
    logger.error({ action: 'createFighter', errors: parsed.error }, errorMsg);
    // In een echte form handler zou je de errors teruggeven, hier gooien we een error voor eenvoud
    throw new Error(errorMsg);
  }

  try {
    // 4. Database Operation
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
        // Connecties alleen leggen als ID aanwezig is
        weightClass: weightClassId ? { connect: { id: weightClassId } } : undefined,
        gym: gymId ? { connect: { id: gymId } } : undefined,
      },
    });

    // 5. Logging End
    const duration = Date.now() - start;
    logger.info(
      { action: 'createFighter', fighterId: newFighter.id, duration }, 
      'Successfully created fighter'
    );

  } catch (error) {
    logger.error({ action: 'createFighter', error }, 'Failed to create fighter');
    throw new Error('Failed to create fighter');
  }

  // 6. Revalidate & Redirect
  revalidatePath('/dashboard/fighters');
  redirect('/dashboard/fighters');
}

/**
 * UPDATE Fighter Action
 */
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
        // Disconnect als er geen waarde is, anders connect
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

  revalidatePath('/dashboard/fighters');
  redirect('/dashboard/fighters');
}

/**
 * DELETE Fighter Action
 */
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

  revalidatePath('/dashboard/fighters');
}