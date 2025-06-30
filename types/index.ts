export type ActionStatus = 'disponible' | 'en_cours_validation' | 'en_cours' | 'valide';

export interface Enjeu {
  nom_enjeu: string;
}

export interface Action {
  id: string;
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