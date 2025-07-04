'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { FormField, FormSection } from '@/lib/supabase/queries';

interface FormPreviewProps {
  formData: {
    name: string;
    description?: string;
    schema: { sections: FormSection[] };
    settings: {
      submitButtonText?: string;
      successMessage?: string;
      requireEmail?: boolean;
      requireName?: boolean;
    };
  };
}

export function FormPreview({ formData }: FormPreviewProps) {
  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
        return (
          <div className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
            <Input placeholder={field.placeholder} />
          </div>
        );

      case 'number':
        return (
          <div className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
            <Input
              type="number"
              min={field.min}
              max={field.max}
              placeholder={field.placeholder}
            />
          </div>
        );

      case 'slider':
        return (
          <div className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{field.min || 0}</span>
              <Slider
                min={field.min || 0}
                max={field.max || 100}
                step={field.step || 1}
                defaultValue={[(field.min || 0) + (field.max || 100) / 2]}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">{field.max || 100}</span>
            </div>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
            <RadioGroup>
              {field.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-2">
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
            <div className="space-y-2">
              {field.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox id={option.value} />
                  <Label htmlFor={option.value} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{formData.name}</CardTitle>
        {formData.description && (
          <CardDescription>{formData.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {formData.settings.requireName && (
            <div className="space-y-2">
              <Label>
                Nom <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Votre nom" />
            </div>
          )}

          {formData.settings.requireEmail && (
            <div className="space-y-2">
              <Label>
                Email <span className="text-red-500">*</span>
              </Label>
              <Input type="email" placeholder="votre@email.com" />
            </div>
          )}

          {formData.schema.sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                )}
              </div>
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.id}>{renderField(field)}</div>
                ))}
              </div>
            </div>
          ))}

          <Button type="button" className="w-full" disabled>
            {formData.settings.submitButtonText || 'Envoyer'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}