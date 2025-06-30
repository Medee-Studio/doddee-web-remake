export interface FormDataKpiItem {
  supabaseColumnName: string;
  label: string;
  type: string;
}

export interface FormDataKpi {
  kpi_type: 'environnement' | 'social' | 'gouvernance';
  content: FormDataKpiItem[];
}

export const formDataKpis: FormDataKpi[] = [
  {
    kpi_type: 'environnement',
    content: [
      {
        supabaseColumnName: 'tonnes consommation d\'énergie',
        label: 'Consommation d\'énergie totale',
        type: 'number'
      },
      {
        supabaseColumnName: 'tonnes émissions CO2',
        label: 'Émissions de CO2',
        type: 'number'
      },
      {
        supabaseColumnName: 'litres consommation d\'eau',
        label: 'Consommation d\'eau',
        type: 'number'
      },
      {
        supabaseColumnName: 'tonnes déchets produits',
        label: 'Déchets produits',
        type: 'number'
      }
    ]
  },
  {
    kpi_type: 'social',
    content: [
      {
        supabaseColumnName: 'nombre employés',
        label: 'Nombre d\'employés',
        type: 'number'
      },
      {
        supabaseColumnName: 'heures formation',
        label: 'Heures de formation',
        type: 'number'
      },
      {
        supabaseColumnName: 'taux satisfaction',
        label: 'Taux de satisfaction',
        type: 'percentage'
      }
    ]
  },
  {
    kpi_type: 'gouvernance',
    content: [
      {
        supabaseColumnName: 'réunions gouvernance',
        label: 'Réunions de gouvernance',
        type: 'number'
      },
      {
        supabaseColumnName: 'audits qualité',
        label: 'Audits qualité',
        type: 'number'
      }
    ]
  }
]; 