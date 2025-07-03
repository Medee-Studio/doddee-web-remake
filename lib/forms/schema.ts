import { z } from 'zod';
import type { FormField, FormSchema } from './types';

// Field type schema
export const fieldTypeSchema = z.enum([
  'text',
  'number',
  'slider',
  'radio',
  'checkbox',
  'section'
]);

// Option schema
export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

// Field validation schema
export const fieldValidationSchema = z.object({
  minLength: z.number().optional(),
  maxLength: z.number().optional(),
  pattern: z.string().optional(),
  message: z.string().optional(),
});

// Form field schema
export const formFieldSchema = z.object({
  id: z.string(),
  type: fieldTypeSchema,
  label: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  placeholder: z.string().optional(),
  validation: fieldValidationSchema.optional(),
  options: z.array(optionSchema).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  defaultValue: z.unknown().optional(),
});

// Form section schema
export const formSectionSchema = z.object({
  id: z.string(),
  type: z.literal('section'),
  title: z.string(),
  subtitle: z.string().optional(),
  fields: z.array(formFieldSchema),
});

// Form schema
export const formSchema = z.object({
  sections: z.array(formSectionSchema),
}).or(z.object({
  sections: z.array(z.unknown()), // More permissive for debugging
}));

// Form settings schema
export const formSettingsSchema = z.object({
  submitButtonText: z.string().optional(),
  successMessage: z.string().optional(),
  redirectUrl: z.string().url().optional(),
  allowMultipleSubmissions: z.boolean().optional(),
  requireEmail: z.boolean().optional(),
  requireName: z.boolean().optional(),
  sendEmailNotification: z.boolean().optional(),
  notificationEmail: z.string().email().optional(),
});

// Create form schema
export const createFormSchema = z.object({
  name: z.string().min(1, 'Le nom du formulaire est requis'),
  description: z.string().optional(),
  schema: formSchema,
  settings: formSettingsSchema.optional(),
});

// Update form schema
export const updateFormSchema = createFormSchema.partial();

// Form response schema
export const formResponseSchema = z.object({
  formId: z.string().uuid(),
  respondentEmail: z.string().email().optional(),
  respondentName: z.string().optional(),
  responseData: z.record(z.unknown()),
});

// Dynamic field validation based on field type
export function createFieldValidator(field: FormField): z.ZodSchema {
  let validator: z.ZodSchema = z.unknown();

  switch (field.type) {
    case 'text':
      validator = z.string();
      if (field.validation?.minLength) {
        validator = (validator as z.ZodString).min(field.validation.minLength, field.validation.message);
      }
      if (field.validation?.maxLength) {
        validator = (validator as z.ZodString).max(field.validation.maxLength, field.validation.message);
      }
      if (field.validation?.pattern) {
        validator = (validator as z.ZodString).regex(new RegExp(field.validation.pattern), field.validation.message);
      }
      break;
    
    case 'number':
    case 'slider':
      validator = z.number();
      if (field.min !== undefined) {
        validator = (validator as z.ZodNumber).min(field.min);
      }
      if (field.max !== undefined) {
        validator = (validator as z.ZodNumber).max(field.max);
      }
      break;
    
    case 'radio':
      if (field.options) {
        const values = field.options.map(opt => opt.value);
        validator = z.enum(values as [string, ...string[]]);
      }
      break;
    
    case 'checkbox':
      validator = z.array(z.string());
      break;
  }

  if (field.required) {
    return validator;
  } else {
    return validator.optional();
  }
}

// Create dynamic response validator based on form schema
export function createResponseValidator(formSchema: FormSchema) {
  const shape: Record<string, z.ZodSchema> = {};

  formSchema.sections.forEach((section) => {
    section.fields.forEach((field) => {
      if (field.type !== 'section') {
        shape[field.id] = createFieldValidator(field);
      }
    });
  });

  return z.object(shape);
}