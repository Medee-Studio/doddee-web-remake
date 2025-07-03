export type ActionStatus = 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide';

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

export interface Kpi {
  kpi_type: 'environnement' | 'social' | 'gouvernance';
  kpi_value: number | string;
  kpi_label: string;
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

// Supabase types
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

// Types for Plan d'Action System
export interface PlanActionData {
  id: number;
  nom_action: string;
  action_type: 'environnement' | 'social' | 'gouvernance';
}

export interface UserActionData {
  deadline: string;
  action_status: 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide';
}

export interface PlanAction {
  action_data: PlanActionData;
  user_action_data: UserActionData;
}

// Types for Eco Profile System
export interface EcoProfile {
  user_id_moral: string;
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
  logo_organisation?: string;
}

export interface EcoProfileWithActions extends EcoProfile {
  actions?: Action[];
  labels?: string[];
  kpis?: Kpi[];
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

export interface CompleteProfileStep {
  id: number;
  title: string;
  description: string;
  type: 'form' | 'checkbox' | 'select' | 'radio';
  fields?: FormField[];
  checkboxOptions?: CheckboxOption[];
  radioQuestions?: RadioQuestion[];
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  options?: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
  children?: SelectOption[];
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

export * from './esg-form';

export type QuestionnaireType = "environnement" | "social" | "gouvernance"; 
