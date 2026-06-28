export interface CitySection {
  city: string;
  slug: string;
  content: string;
}

export interface ThematicPageData {
  slug: string;
  theme: string;
  countryKey: "uae" | "qatar" | "saudi";
  countrySlug: string;
  countryName: string;
  title: string;
  description: string;
  intro: string;
  citySections: CitySection[];
  faqs: { question: string; answer: string }[];
  sources: { name: string; url: string }[];
  relatedLinks: { label: string; href: string }[];
  /** Which calculator component to show: education, housing, transport, utilities, or none */
  calculator: "education" | "housing" | "transport" | "utilities" | null;
}
