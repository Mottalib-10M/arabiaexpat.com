export const SITE = {
  name: "Arabia Expat",
  url: "https://arabiaexpat.com",
  description: "Your complete guide to living in the Gulf as an expat. Visa guides, daily life, housing, healthcare, schools, utilities, and relocation resources for the UAE, Qatar, and Saudi Arabia.",
  author: {
    name: "Radif Partners",
    credentials: "publisher of Gulf relocation guides",
    role: "Publisher",
    bio: "Radif Partners publishes Arabia Expat, a set of relocation guides and cost-of-living estimators for people moving to the UAE, Qatar, and Saudi Arabia, written from official sources such as immigration authorities, labour ministries, and utility providers.",
  },
  year: 2026,
  googleVerifyCode: "b2YamsA61r7xK6-y3ozt05eM3ijS1Hi_Jsp9sOqANH0", // google-site-verification meta tag value from Google Search Console
  bingVerifyCode: "", // msvalidate.01 code from Bing Webmaster Tools
  clarityId: "xm1ogh8k02",
  ga4Id: "G-5P80W6V4M4", // Google Analytics 4, loaded on every page like Clarity, described in /privacy-policy/
  ogImage: "/og-default.png",
} as const;

export const COUNTRIES = {
  uae: {
    name: "UAE",
    fullName: "United Arab Emirates",
    slug: "uae",
    currency: "AED",
    currencyName: "UAE Dirham",
    usdRate: 3.6725,
    flag: "AE",
    molName: "Ministry of Human Resources and Emiratisation (MoHRE)",
    molUrl: "https://www.mohre.gov.ae/",
  },
  qatar: {
    name: "Qatar",
    fullName: "State of Qatar",
    slug: "qatar",
    currency: "QAR",
    currencyName: "Qatari Riyal",
    usdRate: 3.64,
    flag: "QA",
    molName: "Ministry of Administrative Development, Labour and Social Affairs (MADLSA)",
    molUrl: "https://www.adlsa.gov.qa/",
  },
  saudi: {
    name: "Saudi Arabia",
    fullName: "Kingdom of Saudi Arabia",
    slug: "saudi-arabia",
    currency: "SAR",
    currencyName: "Saudi Riyal",
    usdRate: 3.75,
    flag: "SA",
    molName: "Ministry of Human Resources and Social Development (MHRSD)",
    molUrl: "https://hrsd.gov.sa/",
  },
} as const;

export type CountryKey = keyof typeof COUNTRIES;

// ============================================================
// Legal identity (RECETTE §8 and §14). The mentions required by French law, since
// the publisher is established in France, and by the GDPR come from here and
// nowhere else: the legal notice page, the footer and the Organization schema read
// these fields, so a corrected address is corrected everywhere.
// Control: check-legal.mjs.
// ============================================================
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}

export const LEGAL: LegalIdentity = {
  entityName: "Radif Partners",
  legalForm: "",
  street: "49 rue du Ressort",
  postalCode: "63000",
  city: "Clermont-Ferrand",
  country: "France",
  phone: "",
  registerLabel: "Registration number",
  registerNumber: "",
  vatLabel: "VAT number",
  vatNumber: "",
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l’informatique et des libertés, 3 place de Fontenoy, 75007 Paris",
  supervisoryAuthorityUrl: "https://www.cnil.fr/",
  hosting: {
    name: "OVH SAS",
    address: "2 rue Kellermann, 59100 Roubaix, France",
    phone: "+33 9 72 10 10 07",
    url: "https://www.ovhcloud.com",
  },
};

export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ["entityName", "street", "postalCode", "city"];
