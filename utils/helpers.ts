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