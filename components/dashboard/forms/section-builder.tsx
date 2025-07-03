'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormSection, FormField } from '@/lib/forms/types';
import { ChevronUp, ChevronDown, Trash2, Plus } from 'lucide-react';
import { FieldBuilder } from './field-builder';
import { nanoid } from 'nanoid';

interface SectionBuilderProps {
  section: FormSection;
  onUpdate: (section: FormSection) => void;
  onDelete: () => void;
  onMove: (direction: 'up' | 'down') => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export function SectionBuilder({
  section,
  onUpdate,
  onDelete,
  onMove,
  canMoveUp,
  canMoveDown,
}: SectionBuilderProps) {
  const [isEditing, setIsEditing] = useState(false);

  const addField = (type: FormField['type']) => {
    if (type === 'section') return;

    const newField: FormField = {
      id: nanoid(),
      type,
      label: `Nouveau champ ${type}`,
      required: false,
    };

    if (type === 'radio' || type === 'checkbox') {
      newField.options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ];
    }

    if (type === 'number' || type === 'slider') {
      newField.min = 0;
      newField.max = 100;
      if (type === 'slider') {
        newField.step = 1;
      }
    }

    onUpdate({
      ...section,
      fields: [...section.fields, newField],
    });
  };

  const updateField = (fieldId: string, updatedField: FormField) => {
    onUpdate({
      ...section,
      fields: section.fields.map(f => f.id === fieldId ? updatedField : f),
    });
  };

  const deleteField = (fieldId: string) => {
    onUpdate({
      ...section,
      fields: section.fields.filter(f => f.id !== fieldId),
    });
  };

  const moveField = (fieldId: string, direction: 'up' | 'down') => {
    const index = section.fields.findIndex(f => f.id === fieldId);
    if (index === -1) return;

    const newFields = [...section.fields];
    if (direction === 'up' && index > 0) {
      [newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]];
    } else if (direction === 'down' && index < section.fields.length - 1) {
      [newFields[index], newFields[index + 1]] = [newFields[index + 1], newFields[index]];
    }

    onUpdate({
      ...section,
      fields: newFields,
    });
  };

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-2">
            {isEditing ? (
              <>
                <Input
                  value={section.title}
                  onChange={(e) => onUpdate({ ...section, title: e.target.value })}
                  placeholder="Titre de la section"
                  className="text-lg font-semibold"
                />
                <Textarea
                  value={section.subtitle || ''}
                  onChange={(e) => onUpdate({ ...section, subtitle: e.target.value })}
                  placeholder="Sous-titre de la section (optionnel)"
                  className="min-h-[60px]"
                />
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                {section.subtitle && (
                  <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Terminé' : 'Modifier'}
            </Button>
            <div className="flex items-center">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => onMove('up')}
                disabled={!canMoveUp}
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => onMove('down')}
                disabled={!canMoveDown}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={onDelete}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {section.fields.map((field, index) => (
          <FieldBuilder
            key={field.id}
            field={field}
            onUpdate={(updated) => updateField(field.id, updated)}
            onDelete={() => deleteField(field.id)}
            onMove={(direction) => moveField(field.id, direction)}
            canMoveUp={index > 0}
            canMoveDown={index < section.fields.length - 1}
          />
        ))}

        <div className="flex flex-wrap gap-2 pt-4 border-t">
          <p className="w-full text-sm font-medium mb-2">Ajouter un champ :</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addField('text')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Texte
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addField('number')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Nombre
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addField('slider')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Curseur
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addField('radio')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Choix unique
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addField('checkbox')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Cases à cocher
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}