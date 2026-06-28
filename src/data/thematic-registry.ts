import type { ThematicPageData } from "./types/thematic";

// UAE
import { uaeEducation } from "./uae/thematic/education";
import { uaeHealthcare } from "./uae/thematic/healthcare";
import { uaeHousing } from "./uae/thematic/housing";
import { uaeTransport } from "./uae/thematic/transport";
import { uaeBanking } from "./uae/thematic/banking";
import { uaeVisa } from "./uae/thematic/visa";
import { uaeTelecom } from "./uae/thematic/telecom";
import { uaeUtilities } from "./uae/thematic/utilities";

// Qatar
import { qatarEducation } from "./qatar/thematic/education";
import { qatarHealthcare } from "./qatar/thematic/healthcare";
import { qatarHousing } from "./qatar/thematic/housing";
import { qatarTransport } from "./qatar/thematic/transport";
import { qatarBanking } from "./qatar/thematic/banking";
import { qatarVisa } from "./qatar/thematic/visa";
import { qatarTelecom } from "./qatar/thematic/telecom";
import { qatarUtilities } from "./qatar/thematic/utilities";

// Saudi Arabia
import { saudiEducation } from "./saudi/thematic/education";
import { saudiHealthcare } from "./saudi/thematic/healthcare";
import { saudiHousing } from "./saudi/thematic/housing";
import { saudiTransport } from "./saudi/thematic/transport";
import { saudiBanking } from "./saudi/thematic/banking";
import { saudiVisa } from "./saudi/thematic/visa";
import { saudiTelecom } from "./saudi/thematic/telecom";
import { saudiUtilities } from "./saudi/thematic/utilities";

export const allThematicPages: ThematicPageData[] = [
  // UAE
  uaeEducation, uaeHealthcare, uaeHousing, uaeTransport,
  uaeBanking, uaeVisa, uaeTelecom, uaeUtilities,
  // Qatar
  qatarEducation, qatarHealthcare, qatarHousing, qatarTransport,
  qatarBanking, qatarVisa, qatarTelecom, qatarUtilities,
  // Saudi
  saudiEducation, saudiHealthcare, saudiHousing, saudiTransport,
  saudiBanking, saudiVisa, saudiTelecom, saudiUtilities,
];

export function getThematicPage(countrySlug: string, theme: string): ThematicPageData | undefined {
  return allThematicPages.find((p) => p.countrySlug === countrySlug && p.slug === theme);
}

export function getThematicPagesForCountry(countrySlug: string): ThematicPageData[] {
  return allThematicPages.filter((p) => p.countrySlug === countrySlug);
}

export function getCrossLinks(page: ThematicPageData): { label: string; href: string }[] {
  const countrySlugs = ["uae", "qatar", "saudi-arabia"];
  const countryLabels: Record<string, string> = { uae: "UAE", qatar: "Qatar", "saudi-arabia": "Saudi Arabia" };
  return countrySlugs
    .filter((s) => s !== page.countrySlug)
    .map((s) => ({
      label: `${countryLabels[s]} ${page.theme.charAt(0).toUpperCase() + page.theme.slice(1)}`,
      href: `/${s}/${page.slug}/`,
    }));
}
