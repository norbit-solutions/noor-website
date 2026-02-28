import servicesEn from "@/content/services/en.json";
import servicesFr from "@/content/services/fr.json";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  slug: string;
  name: string;
  group: string;
  description: string;
  image: string;
  highlights: { label: string; value: string }[];
}

// ---------------------------------------------------------------------------
// Locale-aware data maps
// ---------------------------------------------------------------------------

type Locale = "en" | "fr";

const SERVICES_MAP: Record<Locale, Service[]> = {
  en: servicesEn as Service[],
  fr: servicesFr as Service[],
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getServices(locale: string = "fr"): Service[] {
  return SERVICES_MAP[locale as Locale] ?? SERVICES_MAP.fr;
}

export function getServiceBySlug(
  slug: string,
  locale: string = "fr",
): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}

export function getServicesByGroup(
  group: string,
  locale: string = "fr",
): Service[] {
  return getServices(locale).filter((s) => s.group === group);
}

export function getRelatedServices(
  currentId: string,
  locale: string = "fr",
  group?: string,
  limit = 4,
): Service[] {
  const others = getServices(locale).filter((s) => s.id !== currentId);
  if (group) {
    const sameGroup = others.filter((s) => s.group === group);
    const rest = others.filter((s) => s.group !== group);
    return [...sameGroup, ...rest].slice(0, limit);
  }
  return others.slice(0, limit);
}

/** Group labels used across the site */
export const SERVICE_GROUPS: Record<string, string> = {
  supply: "groupSupply",
  agriculture: "groupAgriculture",
  technical: "groupTechnical",
  construction: "groupConstruction",
  services: "groupGeneralServices",
};
