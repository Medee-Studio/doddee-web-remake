import { Kpi } from "@/types";

export function getKpiValueByLabel(kpis: Kpi[], label: string): number | null {
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