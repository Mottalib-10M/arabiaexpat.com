import type { CountryKey } from "./site-config";

export interface DestinationCity {
  slug: string;
  name: string;
  countryKey: CountryKey;
  countrySlug: string;
  currency: string;
  usdRate: number;
}

export const destinationCities: DestinationCity[] = [
  { slug: "dubai", name: "Dubai", countryKey: "uae", countrySlug: "uae", currency: "AED", usdRate: 3.6725 },
  { slug: "abu-dhabi", name: "Abu Dhabi", countryKey: "uae", countrySlug: "uae", currency: "AED", usdRate: 3.6725 },
  { slug: "doha", name: "Doha", countryKey: "qatar", countrySlug: "qatar", currency: "QAR", usdRate: 3.64 },
  { slug: "riyadh", name: "Riyadh", countryKey: "saudi", countrySlug: "saudi-arabia", currency: "SAR", usdRate: 3.75 },
  { slug: "jeddah", name: "Jeddah", countryKey: "saudi", countrySlug: "saudi-arabia", currency: "SAR", usdRate: 3.75 },
  { slug: "dammam", name: "Dammam", countryKey: "saudi", countrySlug: "saudi-arabia", currency: "SAR", usdRate: 3.75 },
];

export function getDestinationCity(slug: string): DestinationCity | undefined {
  return destinationCities.find((c) => c.slug === slug);
}

export function getCitiesByCountry(countryKey: CountryKey): DestinationCity[] {
  return destinationCities.filter((c) => c.countryKey === countryKey);
}
