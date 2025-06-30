import { Kpi } from "@/types";

export function getKpiValueByLabel(kpis: Kpi[], label: string): number | string | null {
  const kpi = kpis?.find((k) => k.kpi_label === label);
  return kpi ? kpi.kpi_value : null;
}

export function whichEmoji(kpiType: string): string {
  switch (kpiType) {
    case 'environnement':
      return '♻️';
    case 'social':
      return '🤝🏼';
    case 'gouvernance':
      return '⏱️';
    default:
      return '📊';
  }
}

export function whichClasseEmoji(classeType: string): string {
  switch (classeType.toLowerCase()) {
    case 'environnement':
      return '🌱';
    case 'social':
      return '👥';
    case 'gouvernance':
      return '⚖️';
    case 'économique':
      return '💼';
    default:
      return '📋';
  }
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getStatusRedirect(
  path: string,
  title: string,
  description: string,
): string {
  const params = new URLSearchParams({
    title,
    description,
  });
  return `${path}?${params.toString()}`;
}

// Date utility functions for Plan d'Action
export function calculateDaysUntil(deadline: string): string {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return `${Math.abs(diffDays)} jour(s) en retard`;
  } else if (diffDays === 0) {
    return "Aujourd'hui";
  } else if (diffDays === 1) {
    return "Demain";
  } else {
    return `Dans ${diffDays} jours`;
  }
}

export function getDay(date: Date): string {
  return date.getDate().toString().padStart(2, '0');
}

export function getMonthAbbreviation(date: Date): string {
  const months = [
    'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
    'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
  ];
  return months[date.getMonth()];
}

export function getYear(date: Date): string {
  return date.getFullYear().toString();
} 