import { z } from "zod";

// 1. FULL SCHEMA
const EventSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(5, "Naam moet minstens 5 karakters zijn").max(100),
  location: z.string().min(2, "Locatie is verplicht").optional().or(z.literal("")),
  // Belangrijk: coerce.date() zorgt dat de string input uit het formulier een Date object wordt
  date: z.coerce.date().pipe(z.date().catch(() => {
    throw new Error("Dat is geen geldige datum");
  })),
});

// 2. CREATE (Zonder ID)
export const CreateEventSchema = z.object({
  name: z.string().min(1, 'Event name is required'),
  date: z.date('Invalid date'),
  location: z.string().optional(),
});

// 3. UPDATE (Met ID)
export const UpdateEventSchema = EventSchema;

// 4. TYPES
export type CreateEventInput = z.infer<typeof CreateEventSchema>;
export type UpdateEventInput = z.infer<typeof UpdateEventSchema>;