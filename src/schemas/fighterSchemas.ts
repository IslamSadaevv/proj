import { z } from "zod";

// 1. BASE SCHEMA
// Bevat alle velden en validatieregels (Lecture 3: Validation)
const FighterBaseSchema = z.object({
  firstName: z
    .string()
    .min(2, "Voornaam moet minstens 2 karakters zijn")
    .max(255),
  lastName: z
    .string()
    .min(2, "Achternaam moet minstens 2 karakters zijn")
    .max(255),
  nickname: z.string().max(255).optional().or(z.literal("")),
  

  wins: z.number().int().min(0),
  losses: z.number().int().min(0),
  draws: z.number().int().min(0),
  
  heightCm: z.number().int().positive("Lengte moet positief zijn"),
  reachCm: z.number().int().positive("Reikwijdte moet positief zijn"),
  
  // Datum validatie: mag niet in de toekomst liggen
  dob: z.date().refine((date) => date < new Date(), {
    message: "Geboortedatum moet in het verleden liggen",
  }),
  
  bio: z.string().optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),

  // Relaties: UUID validatie voor koppelingen
  weightClassId: z.string().uuid("Selecteer een geldige gewichtsklasse").optional().or(z.literal("")),
  gymId: z.string().uuid("Selecteer een geldige gym").optional().or(z.literal("")),
});

// 2. CREATE SCHEMA
// Opgave eis: Hergebruik de base. Bij create is ID niet nodig.
export const CreateFighterSchema = FighterBaseSchema;

// 3. UPDATE SCHEMA
// Opgave eis: Hergebruik via 'extend'. Bij update is ID verplicht.
export const UpdateFighterSchema = FighterBaseSchema.extend({
  id: z.string().uuid(),
});

// 4. TYPES
// Voor gebruik in TypeScript componenten (Lecture 6)
export type CreateFighterInput = z.infer<typeof CreateFighterSchema>;
export type UpdateFighterInput = z.infer<typeof UpdateFighterSchema>;