'use client';

import { useState } from 'react';
import { FormField, Option } from '@/lib/supabase/queries';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronUp, ChevronDown, Trash2, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface FieldBuilderProps {
  field: FormField;
  onUpdate: (field: FormField) => void;
  onDelete: () => void;
  onMove: (direction: 'up' | 'down') => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

export function FieldBuilder({
  field,
  onUpdate,
  onDelete,
  onMove,
  canMoveUp,
  canMoveDown,
}: FieldBuilderProps) {
  const [isEditing, setIsEditing] = useState(false);

  const updateOption = (index: number, option: Option) => {
    if (!field.options) return;
    const newOptions = [...field.options];
    newOptions[index] = option;
    onUpdate({ ...field, options: newOptions });
  };

  const addOption = () => {
    const newOptions = [...(field.options || [])];
    newOptions.push({ value: `option${newOptions.length + 1}`, label: `Option ${newOptions.length + 1}` });
    onUpdate({ ...field, options: newOptions });
  };

  const removeOption = (index: number) => {
    if (!field.options) return;
    const newOptions = field.options.filter((_, i) => i !== index);
    onUpdate({ ...field, options: newOptions });
  };

  const getFieldTypeLabel = (type: FormField['type']) => {
    const labels: Record<FormField['type'], string> = {
      text: 'Texte',
      number: 'Nombre',
      slider: 'Curseur',
      radio: 'Choix unique',
      checkbox: 'Cases à cocher',
      section: 'Section',
    };
    return labels[type] || type;
  };

  return (
    <Card>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {getFieldTypeLabel(field.type)}
              </span>
              {field.required && (
                <span className="text-sm text-red-500">*</span>
              )}
            </div>
            <Input
              value={field.label || ''}
              onChange={(e) => onUpdate({ ...field, label: e.target.value })}
              placeholder="Libellé du champ"
              className="font-medium"
            />
            {field.description && (
              <p className="text-sm text-muted-foreground">{field.description}</p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogTrigger asChild>
                <Button type="button" variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Paramètres du champ</DialogTitle>
                  <DialogDescription>
                    Configurez les options de ce champ
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Libellé</Label>
                    <Input
                      value={field.label || ''}
                      onChange={(e) => onUpdate({ ...field, label: e.target.value })}
                      placeholder="Libellé du champ"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={field.description || ''}
                      onChange={(e) => onUpdate({ ...field, description: e.target.value })}
                      placeholder="Description du champ (optionnelle)"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={field.required || false}
                      onCheckedChange={(checked) => onUpdate({ ...field, required: checked })}
                    />
                    <Label>Champ obligatoire</Label>
                  </div>

                  {field.type === 'text' && (
                    <div className="space-y-2">
                      <Label>Placeholder</Label>
                      <Input
                        value={field.placeholder || ''}
                        onChange={(e) => onUpdate({ ...field, placeholder: e.target.value })}
                        placeholder="Texte d'aide"
                      />
                    </div>
                  )}

                  {(field.type === 'number' || field.type === 'slider') && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Minimum</Label>
                          <Input
                            type="number"
                            value={field.min || 0}
                            onChange={(e) => onUpdate({ ...field, min: Number(e.target.value) })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Maximum</Label>
                          <Input
                            type="number"
                            value={field.max || 100}
                            onChange={(e) => onUpdate({ ...field, max: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                      {field.type === 'slider' && (
                        <div className="space-y-2">
                          <Label>Pas</Label>
                          <Input
                            type="number"
                            value={field.step || 1}
                            onChange={(e) => onUpdate({ ...field, step: Number(e.target.value) })}
                          />
                        </div>
                      )}
                    </>
                  )}

                  {(field.type === 'radio' || field.type === 'checkbox') && (
                    <div className="space-y-2">
                      <Label>Options</Label>
                      <div className="space-y-2">
                        {field.options?.map((option, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Input
                              value={option.label}
                              onChange={(e) => updateOption(index, { ...option, label: e.target.value })}
                              placeholder="Libellé de l'option"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => removeOption(index)}
                              disabled={field.options!.length <= 1}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addOption}
                          className="w-full"
                        >
                          Ajouter une option
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
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
      </CardContent>
    </Card>
  );
}