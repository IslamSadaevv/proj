import { z } from "zod";

// 1. Full Schema (Source of Truth)
const NewsItemSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(5, "Titel moet minstens 5 karakters zijn").max(100),
  snippet: z.string().min(10, "Snippet moet minstens 10 karakters zijn").max(255),
  content: z.string().min(20, "Inhoud moet minstens 20 karakters zijn"),
  author: z.string().optional().or(z.literal("")),
  publishedAt: z.coerce.date().optional(), // Coerce zodat string -> date werkt
});

// 2. CREATE SCHEMA
// EIS: Gebruik van 'pick'.
// We kiezen expliciet welke velden de gebruiker mag invullen bij aanmaken.
export const CreateNewsSchema = NewsItemSchema.pick({
  title: true,
  snippet: true,
  content: true,
  author: true,
});

// 3. UPDATE SCHEMA
// EIS: Gebruik van 'merge'.
// We nemen een object met alleen ID en 'mergen' (samenvoegen) dat met de Create regels.
export const UpdateNewsSchema = z.object({ 
  id: z.string().uuid() 
}).merge(CreateNewsSchema);

// 4. TYPES
export type CreateNewsInput = z.infer<typeof CreateNewsSchema>;
export type UpdateNewsInput = z.infer<typeof UpdateNewsSchema>;