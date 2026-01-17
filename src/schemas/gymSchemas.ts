import { z } from "zod";

// 1. FULL SCHEMA (Zoals in de database)
const GymSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, "Naam moet minstens 2 karakters zijn").max(255),
  location: z.string().min(2, "Locatie moet minstens 2 karakters zijn").optional().or(z.literal("")),
});

// 2. CREATE SCHEMA
// EIS: Gebruik van 'omit'. We laten 'id' weg omdat de database die maakt.
export const CreateGymSchema = GymSchema.omit({ 
  id: true 
});

// 3. UPDATE SCHEMA
// Hier gebruiken we het volledige schema (want we hebben een ID nodig om te weten wie we updaten)
export const UpdateGymSchema = GymSchema;

// 4. TYPES
export type CreateGymInput = z.infer<typeof CreateGymSchema>;
export type UpdateGymInput = z.infer<typeof UpdateGymSchema>;