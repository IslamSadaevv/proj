'use client';

import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { z } from 'zod';

// UI Components
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Backend Logic & Schemas
import { createFighter, updateFighter } from '@/serverFunctions/fighters';
import { CreateFighterSchema } from '@/schemas/fighterSchemas';
import type { UpdateFighterInput } from '@/schemas/fighterSchemas';

// Type afleiden
type FormData = z.infer<typeof CreateFighterSchema>;

type FighterFormProps = {
  gyms: { id: string; name: string }[];
  weightClasses: { id: string; name: string }[];
  initialData?: UpdateFighterInput; 
  onSuccess?: () => void;
};

export function FighterForm({ gyms, weightClasses, initialData, onSuccess }: FighterFormProps) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(CreateFighterSchema),
    defaultValues: initialData ? {
      firstName: initialData.firstName,
      lastName: initialData.lastName,
      nickname: initialData.nickname || '',
      wins: initialData.wins,
      losses: initialData.losses,
      draws: initialData.draws,
      heightCm: initialData.heightCm,
      reachCm: initialData.reachCm,
      dob: new Date(initialData.dob), 
      bio: initialData.bio || '',
      imageUrl: initialData.imageUrl || '',
      gymId: initialData.gymId || '',
      weightClassId: initialData.weightClassId || '',
    } : {
      firstName: '',
      lastName: '',
      nickname: '',
      wins: 0,
      losses: 0,
      draws: 0,
      heightCm: 0,
      reachCm: 0,
      dob: new Date(), 
      bio: '',
      imageUrl: '',
      gymId: '',
      weightClassId: '',
    },
  });

  async function onSubmit(data: FormData) {
    startTransition(async () => {
      try {
        if (initialData) {
          // UPDATE
          await updateFighter({ ...data, id: initialData.id });
          toast({ title: 'Succes', description: 'Vechter is bijgewerkt.' });
        } else {
          // CREATE
          await createFighter(data);
          toast({ title: 'Succes', description: 'Nieuwe vechter aangemaakt.' });
        }

        if (!initialData) form.reset();
        if (onSuccess) onSuccess();
        
      } catch (error) {
        console.error(error);
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
        
        {/* Sectie: Algemene Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voornaam</FormLabel>
                <FormControl><Input placeholder="Jon" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Achternaam</FormLabel>
                <FormControl><Input placeholder="Jones" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bijnaam</FormLabel>
              <FormControl><Input placeholder="Bones" {...field} value={field.value || ''} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Sectie: Stats (Nummers) - AANGEPAST VOOR STRICT NUMBERS */}
        <div className="grid grid-cols-3 gap-2">
          <FormField
            control={form.control}
            name="wins"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wins</FormLabel>
                <FormControl>
                    {/* e.target.valueAsNumber zorgt voor conversie naar number */}
                    <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(e.target.valueAsNumber)} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="losses"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Losses</FormLabel>
                <FormControl>
                    <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(e.target.valueAsNumber)} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="draws"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Draws</FormLabel>
                <FormControl>
                    <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(e.target.valueAsNumber)} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Sectie: Fysiek (Nummers) - AANGEPAST */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="heightCm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lengte (cm)</FormLabel>
                <FormControl>
                    <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(e.target.valueAsNumber)} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reachCm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reikwijdte (cm)</FormLabel>
                <FormControl>
                    <Input 
                        type="number" 
                        {...field} 
                        onChange={e => field.onChange(e.target.valueAsNumber)} 
                    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Sectie: Datum & Selects */}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geboortedatum</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  value={field.value ? format(new Date(field.value), 'yyyy-MM-dd') : ''}
                  onChange={(e) => {
                     const date = new Date(e.target.value);
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="weightClassId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Gewichtsklasse</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecteer klasse" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {weightClasses.map((wc) => (
                        <SelectItem key={wc.id} value={wc.id}>{wc.name}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="gymId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Gym</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecteer gym" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {gyms.map((gym) => (
                        <SelectItem key={gym.id} value={gym.id}>{gym.name}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Afbeelding URL</FormLabel>
                <FormControl><Input placeholder="https://..." {...field} value={field.value || ''} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Bezig met opslaan..." : (initialData ? "Vechter Bijwerken" : "Vechter Aanmaken")}
        </Button>
      </form>
    </Form>
  );
}