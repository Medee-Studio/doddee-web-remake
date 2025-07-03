'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFormSchema } from '@/lib/forms/schema';
import { createForm } from '@/lib/forms/queries';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { ButtonLoading } from '@/components/ui/button-loading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormPreview } from './form-preview';
import { SectionBuilder } from './section-builder';
import { FormSection, FormSettings } from '@/lib/forms/types';
import { nanoid } from 'nanoid';
import { toast } from 'sonner';
import { z } from 'zod';

export function FormBuilder() {
  const router = useRouter();
  const [sections, setSections] = useState<FormSection[]>([]);
  const [settings, setSettings] = useState<FormSettings>({
    submitButtonText: 'Envoyer',
    successMessage: 'Merci pour votre réponse !',
    requireEmail: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: '',
      description: '',
      schema: { sections: [] },
      settings: {},
    },
  });

  const addSection = () => {
    const newSection: FormSection = {
      id: nanoid(),
      type: 'section',
      title: `Section ${sections.length + 1}`,
      fields: [],
    };
    setSections([...sections, newSection]);
  };

  const updateSection = (sectionId: string, updatedSection: FormSection) => {
    setSections(sections.map(s => s.id === sectionId ? updatedSection : s));
  };

  const deleteSection = (sectionId: string) => {
    setSections(sections.filter(s => s.id !== sectionId));
  };

  const moveSection = (sectionId: string, direction: 'up' | 'down') => {
    const index = sections.findIndex(s => s.id === sectionId);
    if (index === -1) return;

    const newSections = [...sections];
    if (direction === 'up' && index > 0) {
      [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    } else if (direction === 'down' && index < sections.length - 1) {
      [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    }
    setSections(newSections);
  };

  const onSubmit = async (data: z.infer<typeof createFormSchema>) => {
    console.log('Form submission started', { data, sections, settings });
    
    if (sections.length === 0) {
      toast.error('Veuillez ajouter au moins une section');
      return;
    }

    // Validate that sections have fields
    const hasFields = sections.some(section => section.fields.length > 0);
    if (!hasFields) {
      toast.error('Veuillez ajouter au moins un champ à vos sections');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const supabase = createClient();

      const formData = {
        ...data,
        schema: { sections },
        settings,
        isPublic: false, // Always start as private
      };

      console.log('Creating form with data:', formData);

      const result = await createForm(supabase, formData);

      console.log('Create form result:', result);

      if ('error' in result) {
        toast.error(result.error);
        setIsSubmitting(false);
      } else {
        toast.success('Formulaire créé avec succès');
        router.push(`/dashboard/forms/${result.success}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Une erreur est survenue lors de la création du formulaire');
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informations du formulaire</CardTitle>
            <CardDescription>
              Donnez un nom et une description à votre formulaire
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du formulaire</FormLabel>
                  <FormControl>
                    <Input placeholder="Mon formulaire" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optionnelle)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez l'objectif de ce formulaire..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </CardContent>
        </Card>

        <Tabs defaultValue="builder" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="builder">Constructeur</TabsTrigger>
            <TabsTrigger value="preview">Aperçu</TabsTrigger>
          </TabsList>

          <TabsContent value="builder" className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Sections du formulaire</h3>
              <Button type="button" onClick={addSection} variant="outline">
                Ajouter une section
              </Button>
            </div>

            {sections.length === 0 ? (
              <Card>
                <CardContent className="py-8 text-center text-muted-foreground">
                  Aucune section. Cliquez sur &quot;Ajouter une section&quot; pour commencer.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <SectionBuilder
                    key={section.id}
                    section={section}
                    onUpdate={(updated) => updateSection(section.id, updated)}
                    onDelete={() => deleteSection(section.id)}
                    onMove={(direction) => moveSection(section.id, direction)}
                    canMoveUp={index > 0}
                    canMoveDown={index < sections.length - 1}
                  />
                ))}
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Paramètres du formulaire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Texte du bouton d&apos;envoi
                  </label>
                  <Input
                    value={settings.submitButtonText}
                    onChange={(e) => setSettings({ ...settings, submitButtonText: e.target.value })}
                    placeholder="Envoyer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Message de succès
                  </label>
                  <Textarea
                    value={settings.successMessage}
                    onChange={(e) => setSettings({ ...settings, successMessage: e.target.value })}
                    placeholder="Merci pour votre réponse !"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.requireEmail}
                    onCheckedChange={(checked) => setSettings({ ...settings, requireEmail: checked })}
                  />
                  <label className="text-sm font-medium">
                    Demander l&apos;email
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.requireName}
                    onCheckedChange={(checked) => setSettings({ ...settings, requireName: checked })}
                  />
                  <label className="text-sm font-medium">
                    Demander le nom
                  </label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="mt-4">
            <FormPreview
              formData={{
                name: form.watch('name') || 'Sans titre',
                description: form.watch('description'),
                schema: { sections },
                settings,
              }}
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/dashboard/forms')}
          >
            Annuler
          </Button>
          {isSubmitting ? (
            <ButtonLoading>
              Création...
            </ButtonLoading>
          ) : (
            <Button type="submit">
              Créer le formulaire
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}