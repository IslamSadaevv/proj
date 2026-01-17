'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prismaClient } from '@/dal/prismaClient';
import { getLogger } from '@/lib/logger';
// FIX: Importeer extendSessionAndSetCookie
import { getSessionFromCookie, extendSessionAndSetCookie } from '@/lib/sessionUtils';
import { CreateEventSchema, UpdateEventSchema } from '@/schemas/eventSchemas';
import type { CreateEventInput, UpdateEventInput } from '@/schemas/eventSchemas';

export async function createEvent(data: CreateEventInput) {
  const logger = await getLogger();
  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = CreateEventSchema.safeParse(data);
  if (!parsed.success) throw new Error('Validation failed');

  try {
    await prismaClient.event.create({ data: parsed.data });
    logger.info({ action: 'createEvent', name: data.name }, 'Event created');
  } catch (error) {
    logger.error({ action: 'createEvent', error }, 'Failed to create event');
    throw new Error('Failed to create event');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/events');
  redirect('/dashboard/events');
}

export async function updateEvent(data: UpdateEventInput) {
  const logger = await getLogger();
  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  const parsed = UpdateEventSchema.safeParse(data);
  if (!parsed.success) throw new Error('Validation failed');

  try {
    await prismaClient.event.update({
      where: { id: data.id },
      data: parsed.data,
    });
    logger.info({ action: 'updateEvent', id: data.id }, 'Event updated');
  } catch (error) {
    logger.error({ action: 'updateEvent', error }, 'Failed to update event');
    throw new Error('Failed to update event');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/events');
  redirect('/dashboard/events');
}

export async function deleteEvent(id: string) {
  const logger = await getLogger();
  const session = await getSessionFromCookie();
  if (!session) throw new Error('Unauthorized');

  try {
    await prismaClient.event.delete({ where: { id } });
    logger.info({ action: 'deleteEvent', id }, 'Event deleted');
  } catch (error) {
    logger.error({ action: 'deleteEvent', error }, 'Failed to delete event');
    throw new Error('Failed to delete event');
  }

  // FIX: Sessie verlengen
  await extendSessionAndSetCookie(session.id, session.user.role);

  revalidatePath('/dashboard/events');
}