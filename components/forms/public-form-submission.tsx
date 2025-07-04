'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataType, FormField } from '@/types';
import { submitFormResponse } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Form, FormControl, FormDescription, FormField as FormFieldComponent, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

interface PublicFormSubmissionProps {
  form: FormDataType;
}

export function PublicFormSubmission({ form }: PublicFormSubmissionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create dynamic schema for the form
  const responseSchema = z.object({
    ...(form.settings.requireName && { respondentName: z.string().min(1, 'Le nom est requis') }),
    ...(form.settings.requireEmail && { respondentEmail: z.string().email('Email invalide') }),
    ...Object.fromEntries(
      form.schema.sections.flatMap(section =>
        section.fields.map(field => [
          field.id,
          field.required 
            ? (field.type === 'checkbox' ? z.array(z.string()).min(1, 'Ce champ est requis') : z.any().refine(val => val !== '' && val !== undefined, 'Ce champ est requis'))
            : z.any().optional()
        ])
      )
    ),
  });

  const formHook = useForm({
    resolver: zodResolver(responseSchema),
    defaultValues: {
      ...(form.settings.requireName && { respondentName: '' }),
      ...(form.settings.requireEmail && { respondentEmail: '' }),
      ...Object.fromEntries(
        form.schema.sections.flatMap(section =>
          section.fields.map(field => [
            field.id,
            field.type === 'checkbox' ? [] : (field.defaultValue || '')
          ])
        )
      ),
    },
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    const supabase = createClient();

    const responseData = { ...data };
    delete responseData.respondentName;
    delete responseData.respondentEmail;

    const result = await submitFormResponse(supabase, {
      formId: form.id,
      respondentEmail: data.respondentEmail as string | undefined,
      respondentName: data.respondentName as string | undefined,
      responseData,
    });

    if ('error' in result) {
      toast.error(result.error);
      setIsSubmitting(false);
    } else {
      setIsSubmitted(true);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
        return (
          <FormFieldComponent
            control={formHook.control}
            name={field.id}
            render={({ field: hookField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </FormLabel>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormControl>
                  <Input {...hookField} placeholder={field.placeholder} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'number':
        return (
          <FormFieldComponent
            control={formHook.control}
            name={field.id}
            render={({ field: hookField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </FormLabel>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormControl>
                  <Input
                    type="number"
                    min={field.min}
                    max={field.max}
                    {...hookField}
                    onChange={(e) => hookField.onChange(Number(e.target.value))}
                    placeholder={field.placeholder}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'slider':
        return (
          <FormFieldComponent
            control={formHook.control}
            name={field.id}
            render={({ field: hookField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </FormLabel>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormControl>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{field.min || 0}</span>
                      <Slider
                        min={field.min || 0}
                        max={field.max || 100}
                        step={field.step || 1}
                        value={[hookField.value || (field.min || 0)]}
                        onValueChange={(value) => hookField.onChange(value[0])}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground">{field.max || 100}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-semibold">{hookField.value || (field.min || 0)}</span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'radio':
        return (
          <FormFieldComponent
            control={formHook.control}
            name={field.id}
            render={({ field: hookField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </FormLabel>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormControl>
                  <RadioGroup
                    value={hookField.value}
                    onValueChange={hookField.onChange}
                  >
                    {field.options?.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`${field.id}-${option.value}`} />
                        <Label htmlFor={`${field.id}-${option.value}`} className="font-normal">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'checkbox':
        return (
          <FormFieldComponent
            control={formHook.control}
            name={field.id}
            render={({ field: hookField }) => (
              <FormItem>
                <FormLabel>
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </FormLabel>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormControl>
                  <div className="space-y-2">
                    {field.options?.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${field.id}-${option.value}`}
                          checked={(hookField.value as string[] || []).includes(option.value)}
                          onCheckedChange={(checked) => {
                            const currentValue = (hookField.value as string[]) || [];
                            if (checked) {
                              hookField.onChange([...currentValue, option.value]);
                            } else {
                              hookField.onChange(currentValue.filter(v => v !== option.value));
                            }
                          }}
                        />
                        <Label htmlFor={`${field.id}-${option.value}`} className="font-normal">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-center">
        <CardContent className="py-12">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Merci pour votre réponse !</h2>
          <p className="text-muted-foreground">
            {form.settings.successMessage || 'Votre réponse a été enregistrée avec succès.'}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{form.name}</CardTitle>
            {form.description && (
              <CardDescription>{form.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {form.settings.requireName && (
              <FormFieldComponent
                control={formHook.control}
                name="respondentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nom <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value as string || ''} placeholder="Votre nom" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {form.settings.requireEmail && (
              <FormFieldComponent
                control={formHook.control}
                name="respondentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value as string || ''} type="email" placeholder="votre@email.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {form.schema.sections.map((section) => (
              <div key={section.id} className="space-y-6">
                <div className="border-t pt-6 first:border-t-0 first:pt-0">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  {section.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{section.subtitle}</p>
                  )}
                </div>
                <div className="space-y-6">
                  {section.fields.map((field) => (
                    <div key={field.id}>{renderField(field)}</div>
                  ))}
                </div>
              </div>
            ))}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : (form.settings.submitButtonText || 'Envoyer')}
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}