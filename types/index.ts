// ======================
// CORE SYSTEM TYPES
// ======================

export type ActionStatus = 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide';
export type QuestionnaireType = "environnement" | "social" | "gouvernance";

// ======================
// FORM SYSTEM TYPES
// ======================

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
export interface FormDataType {
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
export interface FormWithStats extends FormDataType {
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

// ======================
// TEAM & COLLABORATION TYPES
// ======================

// RPC data structures for team operations
export interface RpcTeamMemberUser {
  id: string;
  email: string;
}

export interface RpcTeamMember {
  id: number;
  user_id: string;
  team_id: number;
  role: string;
  joined_at: string; // Comes as string from RPC, will be converted to Date
  user: RpcTeamMemberUser;
}

export interface RpcTeamData {
  id: number;
  name: string;
  created_at: string; // Comes as string
  updated_at: string; // Comes as string
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_product_id: string | null;
  plan_name: string | null;
  subscription_status: string | null;
  team_members: RpcTeamMember[] | null;
}

// ======================
// ACTIONS & ACTION PLANS TYPES
// ======================

export interface Enjeu {
  nom_enjeu: string;
}

export interface Action {
  id: string;
  nom_action: string;
  action_type: 'environnement' | 'social' | 'gouvernance';
  action_status: ActionStatus;
  enjeu?: Enjeu;
}

export interface UserAction extends Action {
  deadline: string;
}

// Types for Actions System
export interface ActionFormDataType {
  id_action: number;
  nom_action: string;
  benefice_entreprise: string;
  delai_recommandation: string;
  nombre_sablier: number;
  nombre_bonhomme: number;
  nombre_billet: number;
  deadline: Date;
  coef: number;
  id_objectif: number;
}

export interface ObjectifFormDataType {
  nom_objectif: string;
  actions: ActionFormDataType[];
  classe: {
    nom_classe_objectif: string;
  };
  total_coef: number;
}

export interface EnjeuFormDataType {
  nom_enjeu: string;
  objectifs: ObjectifFormDataType[];
  classe: {
    nom_classe_enjeu: string;
  };
  total_coef: number;
}

// Supabase types for actions
export interface SupabaseActionType {
  id_action: number;
  nom_action: string;
  benefice_entreprise: string;
  delai_recommandation: string;
  nombre_sablier: number;
  nombre_bonhomme: number;
  nombre_billet: number;
  coef: number;
  id_objectif: number;
}

export interface SupabaseObjectifType {
  id_objectif: number;
  nom_objectif: string;
  id_enjeu: number;
  classe: {
    nom_classe_objectif: string;
  };
}

export interface SupabaseEnjeuType {
  id_enjeu: number;
  nom_enjeu: string;
  classe: {
    nom_classe_enjeu: string;
  };
}

// Types for Plan d'Action System
export interface PlanActionData {
  id: number;
  nom_action: string;
  action_type: 'environnement' | 'social' | 'gouvernance';
}

export interface UserActionData {
  id_utilisateur_moral_action: number;
  deadline: string;
  action_status: 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide';
}

export interface PlanAction {
  action_data: PlanActionData;
  user_action_data: UserActionData;
}

// Action query result type
export interface ActionQueryResult {
  id?: number;
  id_action?: number;
  action_status?: string;
  deadline?: string;
  actions?: Array<{
    id_action: number;
    nom_action: string;
    action_type: string;
  }> | {
    id_action: number;
    nom_action: string;
    action_type: string;
  };
  nom_action?: string;
  action_type?: string;
}

// ======================
// KPI & ANALYTICS TYPES
// ======================

export interface Kpi {
  kpi_type: 'environnement' | 'social' | 'gouvernance';
  kpi_value: number | string;
  kpi_label: string;
  kpi_unit: string;
}

// Types for KPI Form System
export interface QuestionType {
  supabaseColumnName: string;
  label: string;
  type: string;
  placeholder?: string;
  infos?: string;
}

export interface FormDataKpisType {
  kpi_type: 'environnement' | 'social' | 'gouvernance';
  formType: 'input';
  content: QuestionType[];
}

export interface KpiPayload {
  kpi_label: string;
  kpi_value: string | number;
  kpi_type: 'environnement' | 'social' | 'gouvernance';
}

export interface ToSendSupabase {
  supabaseTableName: string;
  payload: KpiPayload[];
}

// New KPI Types for the user's specific table structure
export interface UserKpiWithDetails {
  id: number;
  id_kpi: number;
  user_id_moral: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
  next_ask: string | null;
  kpi_details: {
    id_kpi: number;
    nom: string;
    recurrence: string | null;
    type: string;
    kpi_type: string;
    unit: string | null;
  };
  all_responses?: Array<{
    id: number;
    answer: string;
    created_at: string;
    updated_at: string;
  }>;
}

// KPI RPC Response type
export interface KpiRpcResponse {
  id: number;
  id_kpi: number;
  user_id_moral: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
  next_ask: string | null;
  kpi_details: {
    id_kpi: number;
    nom: string;
    recurrence: string | null;
    type: string;
    kpi_type: string;
    unit: string | null;
  };
}

// ======================
// ECO PROFILE & COMPANY TYPES
// ======================

// Types for Eco Profile System
export interface EcoProfile {
  raison_etre?: string;
  valeurs?: string;
  missions?: string;
  vision?: string;
  presentation_entreprise?: string;
  mot_equipe?: string;
  url_linkedin?: string;
  url_insta?: string;
  url_facebook?: string;
  url_unique?: boolean;
  raison_sociale?: string;
  logo?: string;
}

export interface EcoProfileWithActions extends EcoProfile {
  actions?: Action[];
  labels?: string[];
  kpis?: Kpi[];
}

// Complete Profile Form Types
export interface CompleteProfileFormData {
  // Step 1: Company Info
  raison_sociale: string;
  tel: string;
  siren: string;
  adresse: string;
  annee_de_creation: number;
  
  // Step 2: Labels
  labels: string[];
  
  // Step 3: Sector and Function
  secteur: string;
  sous_secteur: string;
  fonction: string;
  
  // Step 4: Categories
  flotte_vehicule: boolean;
  plus_de_un_salarie: boolean;
  locaux: boolean;
  parc_informatique: boolean;
  site_web: boolean;
  site_de_production: boolean;
  approvisionnement: boolean;
  distribution: boolean;
  stock: boolean;
}

export interface CompleteProfileData {
  raison_sociale: string;
  tel: string;
  siren: string;
  adresse: string;
  annee_de_creation: number;
  labels: string[];
  coordonnees: number[];
  secteur: string;
  sous_secteur: string;
  fonction: string;
  flotte_vehicule: boolean;
  plus_de_un_salarie: boolean;
  locaux: boolean;
  parc_informatique: boolean;
  site_web: boolean;
  site_de_production: boolean;
  approvisionnement: boolean;
  distribution: boolean;
  stock: boolean;
}

export interface CompleteProfileStep {
  id: number;
  title: string;
  description: string;
  type: 'form' | 'checkbox' | 'select' | 'radio';
  fields?: FormField[];
  checkboxOptions?: CheckboxOption[];
  radioQuestions?: RadioQuestion[];
}

export interface CheckboxOption {
  id: number;
  label: string;
}

export interface RadioQuestion {
  name: string;
  label: string;
  options: RadioOption[];
}

export interface RadioOption {
  label: string;
  value: string;
}

// Company account types
export interface CompanyAccountInfo {
  user_id_moral: string;
  raison_sociale: string | null;
  tel: string | null;
  labels: string[] | null;
  logo: string | null;
}

// Enterprise information
export interface EnterpriseInfo {
  raison_sociale: string | null;
  tel: string | null;
  siren: string | null;
  adresse: string | null;
  annee_de_creation: number | null;
  labels: string[] | null;
}

// ======================
// QUESTIONNAIRES & SURVEYS TYPES
// ======================

// Questionnaire data types
export interface QuestionnaireData {
  answers: Array<{
    questionKey: string;
    questionText: string;
    answer: string | number | string[];
  }>;
  valide_id_actions: number[];
  disponible_id_actions: number[];
  kpis: Array<{
    questionId: string;
    questionText: string;
    kpiId: number;
    answer: string | number | string[];
  }>;
}

export interface QuestionnaireResponse {
  id: number;
  user_id_moral: string;
  question: string;
  answer: string;
  created_at: string;
}

// User moral data types
export interface UtilisateurMorauxSecteurAndCategory {
  sous_secteur_id: number | null;
  categories: {
    id: number;
    user_id: string;
    flotte_vehicule: boolean | null;
    plus_de_un_salarie: boolean | null;
    locaux: boolean | null;
    parc_informatique: boolean | null;
    site_web: boolean | null;
    site_de_production: boolean | null;
    approvisionnement: boolean | null;
    distribution: boolean | null;
    stock: boolean | null;
  } | null;
}

// ======================
// COURSES & RESOURCES TYPES
// ======================

// Types for Courses/Resources System
export interface Cours {
  type: 'title' | 'html_content';
  content: string;
}

export interface RessourceInterne {
  nom_ressource: string;
  type: string;
  status: ActionStatus;
  intro: string;
  author: string;
  author_image_url: string;
  cours: Cours[];
}

export interface RessourceExterne {
  nom_ressource: string;
  type: string;
  status: ActionStatus;
  nom_action: string;
  url_ressource: string;
}

export interface RessourcesDataType {
  ressources_internes?: RessourceInterne[];
  ressources_externes?: RessourceExterne[];
}

// ======================
// NPS & FEEDBACK TYPES
// ======================

// NPS (Net Promoter Score) related types
export interface NPSData {
  total_responses: number;
  average_score: number | null;
  promoters: number;
  passives: number;
  detractors: number;
  nps_score: number | null;
}

export interface UserMoralData {
  actions: Action[];
  kpis: any[];
  nps: NPSData;
} 

// ======================
// FILE MANAGEMENT TYPES (PJS)
// ======================

// Types for PJs (Pièces Justificatives) System
export interface PJ {
  id_pj: number;
  titre: string;
  description: string;
}

export interface UserMoralPJ {
  id: number;
  id_utilisateur_moral_action: number;
  id_pj: number | null;
  path_to_pj: string | null;
  status: string | null;
  pj: PJ | null;
}

// Action PJ query result
export interface ActionPJQueryResult {
  id_pj: number;
  pjs: PJ[];
}

// User moral PJ query result
export interface UserMoralPJQueryResult {
  id: number;
  id_utilisateur_moral_action: number;
  id_pj: number | null;
  path_to_pj: string | null;
  status: string | null;
  pjs: PJ[] | null;
}

// ======================
// MAPS & LOCATION TYPES
// ======================

// Types for Address API
export interface Address {
  type: string;
  properties: {
    id: string;
    label: string;
    name: string;
    postcode: string;
    citycode: string;
    x: number;
    y: number;
    city: string;
    context: string;
    type: string;
    importance: number;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

// Map data types
export interface PublicUtilisateurMoral {
  user_id_moral: string;
  raison_sociale: string | null;
  secteur_id: number | null;
  sous_secteur_id: number | null;
  coordinates: [number, number] | null; // [lng, lat] array format from database
  labels: {
    certifications?: string[];
  } | null;
}

// ======================
// REPORTS & ANALYTICS TYPES
// ======================

export interface ReportData {
  userProfile: EnterpriseInfo | null;
  responses: QuestionnaireResponse[];
  actions: Action[];
  reportType: 'environnement' | 'social' | 'gouvernance';
}

// ======================
// FORM ELEMENTS TYPES
// ======================

export interface SelectOption {
  value: string;
  label: string;
  children?: SelectOption[];
}

// ======================
// LEGACY/COMPATIBILITY TYPES
// ======================

export * from './esg-form';
