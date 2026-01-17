'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Imports uit jouw project
import { createEvent, updateEvent } from '@/serverFunctions/events';
import { CreateEventSchema } from '@/schemas/eventSchemas';
import type { UpdateEventInput } from '@/schemas/eventSchemas';

type FormData = z.infer<typeof CreateEventSchema>;

type EventFormProps = {
  initialData?: UpdateEventInput;
  onSuccess?: () => void;
};

export function EventForm({ initialData, onSuccess }: EventFormProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: initialData ? {
      name: initialData.name,
      location: initialData.location || '',
      date: new Date(initialData.date), // Zorg dat het een Date object is
    } : {
      name: '',
      location: '',
      date: new Date(), // Standaard vandaag
    },
  });

  async function onSubmit(data: FormData) {
    startTransition(async () => {
      try {
        if (initialData) {
          // UPDATE
          await updateEvent({ ...data, id: initialData.id });
          toast({ title: 'Succes', description: 'Event bijgewerkt.' });
        } else {
          // CREATE
          await createEvent(data);
          toast({ title: 'Succes', description: 'Event aangemaakt.' });
        }

        if (!initialData) form.reset();
        if (onSuccess) onSuccess();
        
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Fout',
          description: 'Er ging iets mis bij het opslaan.',
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        
        {/* NAAM */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Naam Event</FormLabel>
              <FormControl>
                <Input placeholder="UFC 300: Pereira vs Hill" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* DATUM */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Datum</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  // Zod verwacht Date, Input wil string 'yyyy-MM-dd'
                  value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : ''}
                  onChange={(e) => {
                     const date = new Date(e.target.value);
                     // Check of het een geldige datum is voordat we updaten
                     if(!isNaN(date.getTime())) {
                        field.onChange(date);
                     }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LOCATIE */}
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Locatie</FormLabel>
              <FormControl>
                <Input placeholder="T-Mobile Arena, Las Vegas" {...field} value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Bezig met opslaan..." : (initialData ? "Event Bijwerken" : "Event Aanmaken")}
        </Button>
      </form>
    </Form>
  );
}