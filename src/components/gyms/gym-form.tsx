'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { createGym, updateGym } from '@/serverFunctions/gyms';
import { CreateGymSchema } from '@/schemas/gymSchemas';
import type { UpdateGymInput } from '@/schemas/gymSchemas';

type FormData = z.infer<typeof CreateGymSchema>;

type GymFormProps = {
  initialData?: UpdateGymInput;
  onSuccess?: () => void;
};

export function GymForm({ initialData, onSuccess }: GymFormProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(CreateGymSchema),
    defaultValues: initialData ? {
      name: initialData.name,
      location: initialData.location || '',
    } : {
      name: '',
      location: '',
    },
  });

  async function onSubmit(data: FormData) {
    startTransition(async () => {
      try {
        if (initialData) {
          await updateGym({ ...data, id: initialData.id });
          toast({ title: 'Succes', description: 'Gym bijgewerkt.' });
        } else {
          await createGym(data);
          toast({ title: 'Succes', description: 'Gym aangemaakt.' });
        }
        if (!initialData) form.reset();
        if (onSuccess) onSuccess();
      } catch (error) {
        toast({ variant: 'destructive', title: 'Fout', description: 'Er ging iets mis.' });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Naam Gym</FormLabel>
              <FormControl><Input placeholder="American Top Team" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Locatie</FormLabel>
              <FormControl><Input placeholder="Florida, USA" {...field} value={field.value || ''} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Opslaan..." : (initialData ? "Bijwerken" : "Aanmaken")}
        </Button>
      </form>
    </Form>
  );
}