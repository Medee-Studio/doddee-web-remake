import { Kpi } from "@/types";

export function getKpiValueByLabel(kpis: Kpi[] | null, label: string): number | string | null {
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

// Deep equality check for objects
export function deepEqual(obj1: unknown, obj2: unknown): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || obj2 == null) {
    return false;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const keys1 = Object.keys(obj1 as Record<string, unknown>);
  const keys2 = Object.keys(obj2 as Record<string, unknown>);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!deepEqual(
      (obj1 as Record<string, unknown>)[key], 
      (obj2 as Record<string, unknown>)[key]
    )) {
      return false;
    }
  }

  return true;
}

// Get the current URL based on environment
export function getURL(): string {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
}