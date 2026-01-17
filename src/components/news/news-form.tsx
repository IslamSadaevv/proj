'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { createNewsItem, updateNewsItem } from '@/serverFunctions/news';
import { CreateNewsSchema } from '@/schemas/newsSchemas';
import type { UpdateNewsInput } from '@/schemas/newsSchemas';

type FormData = z.infer<typeof CreateNewsSchema>;

type NewsFormProps = {
  initialData?: UpdateNewsInput;
  onSuccess?: () => void;
};

export function NewsForm({ initialData, onSuccess }: NewsFormProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(CreateNewsSchema),
    defaultValues: initialData || {
      title: '',
      snippet: '',
      content: '',
      author: '',
    },
  });

  async function onSubmit(data: FormData) {
    startTransition(async () => {
      try {
        if (initialData) {
          await updateNewsItem({ ...data, id: initialData.id });
          toast({ title: 'Succes', description: 'Nieuwsbericht bijgewerkt.' });
        } else {
          await createNewsItem(data);
          toast({ title: 'Succes', description: 'Nieuwsbericht aangemaakt.' });
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titel</FormLabel>
              <FormControl><Input placeholder="Belangrijk nieuws..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Auteur</FormLabel>
              <FormControl><Input placeholder="Dana White" {...field} value={field.value || ''} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="snippet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Korte Samenvatting</FormLabel>
              <FormControl><Textarea placeholder="Korte intro..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Volledig Artikel</FormLabel>
              <FormControl><Textarea className="min-h-[150px]" placeholder="De details..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Opslaan..." : (initialData ? "Bijwerken" : "Publiceren")}
        </Button>
      </form>
    </Form>
  );
}