// Form field types
export type FieldType = 
  | 'text'
  | 'number'
  | 'slider'
  | 'radio'
  | 'checkbox'
  | 'section';

// Form field definition
export interface FormField {
  id: string;
  type: FieldType;
  label?: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
  validation?: FieldValidation;
  // Type-specific properties
  options?: Option[]; // For radio and checkbox
  min?: number; // For number and slider
  max?: number; // For number and slider
  step?: number; // For slider
  defaultValue?: unknown;
}

// Form section definition
export interface FormSection {
  id: string;
  type: 'section';
  title: string;
  subtitle?: string;
  fields: FormField[];
}

// Option for radio and checkbox fields
export interface Option {
  value: string;
  label: string;
}

// Field validation rules
export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  message?: string;
}

// Complete form schema
export interface FormSchema {
  sections: FormSection[];
}

// Form settings
export interface FormSettings extends Record<string, unknown> {
  submitButtonText?: string;
  successMessage?: string;
  redirectUrl?: string;
  allowMultipleSubmissions?: boolean;
  requireEmail?: boolean;
  requireName?: boolean;
  sendEmailNotification?: boolean;
  notificationEmail?: string;
}

// Form with all data
export interface FormData {
  id: string;
  createdBy: string;
  name: string;
  description?: string;
  schema: FormSchema;
  settings: FormSettings;
  isPublic: boolean;
  publicId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Form response data
export interface FormResponseData {
  [fieldId: string]: unknown;
}

// Form response from database
export interface FormResponse {
  id: string;
  form_id: string;
  respondent_email: string | null;
  respondent_name: string | null;
  response_data: Record<string, unknown>;
  submitted_at: string;
}

// Form with response count
export interface FormWithStats extends FormData {
  responsesCount: number;
}

// Form list item
export interface FormListItem {
  id: string;
  name: string;
  description?: string;
  isPublic: boolean;
  publicId: string;
  createdAt: Date;
  updatedAt: Date;
  responsesCount: number;
}

// Database row structure (snake_case) from RPC functions
export interface FormListItemRow {
  id: string;
  name: string;
  description?: string;
  is_public: boolean;
  public_id: string;
  created_at: string;
  updated_at: string;
  responses_count?: number;
}