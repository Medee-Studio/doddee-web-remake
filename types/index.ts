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