import { FormDataKpisType } from '@/types';

export interface FormDataKpiItem {
  supabaseColumnName: string;
  label: string;
  type: string;
  placeholder?: string;
  infos?: string;
}

export const formDataKpis: FormDataKpisType[] = [
  {
    kpi_type: 'environnement',
    formType: 'input',
    content: [
      {
        supabaseColumnName: '% d\'électricité renouvelable utilisée',
        label: '% d\'électricité renouvelable utilisée',
        type: 'number',
        placeholder: 'Ex: 75',
        infos: 'Indiquez le pourcentage d\'électricité provenant de sources renouvelables utilisée par votre organisation.\n\nCela inclut l\'énergie solaire, éolienne, hydraulique et autres sources d\'énergie verte.'
      },
      {
        supabaseColumnName: '% d\'achats responsables',
        label: '% d\'achats responsables',
        type: 'number',
        placeholder: 'Ex: 60',
        infos: 'Renseignez le pourcentage de vos achats effectués selon des critères de responsabilité sociale et environnementale.\n\nCela comprend les achats locaux, éthiques, et respectueux de l\'environnement.'
      },
      {
        supabaseColumnName: 'm³ d\'eau prélevée par salarié / an',
        label: 'm³ d\'eau prélevée par salarié / an',
        type: 'number',
        placeholder: 'Ex: 25',
        infos: 'Indiquez la quantité d\'eau prélevée par salarié et par an en mètres cubes.\n\nCela permet de mesurer l\'efficacité de votre consommation d\'eau par rapport à vos effectifs.'
      },
      {
        supabaseColumnName: '% de fournisseurs locaux',
        label: '% de fournisseurs locaux',
        type: 'number',
        placeholder: 'Ex: 45',
        infos: 'Renseignez le pourcentage de vos fournisseurs situés dans votre région ou pays.\n\nCela contribue à réduire l\'empreinte carbone du transport et soutient l\'économie locale.'
      },
      {
        supabaseColumnName: '% du chiffre d\'affaires consacré à la préservation de la biodiversité et des écosystèmes',
        label: '% du CA consacré à la biodiversité',
        type: 'number',
        placeholder: 'Ex: 2',
        infos: 'Indiquez le pourcentage de votre chiffre d\'affaires dédié à la préservation de la biodiversité et des écosystèmes.\n\nCela peut inclure des investissements dans des projets environnementaux, des compensations carbone, etc.'
      }
    ]
  },
  {
    kpi_type: 'social',
    formType: 'input',
    content: [
      {
        supabaseColumnName: 'Heures de formation par salarié par an',
        label: 'Heures de formation par salarié par an',
        type: 'number',
        placeholder: 'Ex: 40',
        infos: 'Renseignez le nombre moyen d\'heures de formation par salarié sur l\'année.\n\nIncluez toutes les formations professionnelles, techniques et de développement personnel.'
      }
    ]
  },
  {
    kpi_type: 'gouvernance',
    formType: 'input',
    content: [
      {
        supabaseColumnName: '% de parties prenantes clés consultées',
        label: '% de parties prenantes clés consultées',
        type: 'number',
        placeholder: 'Ex: 80',
        infos: 'Indiquez le pourcentage de vos parties prenantes clés consultées dans vos décisions stratégiques.\n\nCela inclut les employés, clients, fournisseurs, actionnaires et communautés locales.'
      }
    ]
  }
];