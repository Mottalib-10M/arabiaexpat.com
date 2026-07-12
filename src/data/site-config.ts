export const SITE = {
  name: "Arabia Expat",
  url: "https://arabiaexpat.com",
  description: "Your complete guide to living in the Gulf as an expat. Visa guides, daily life, housing, healthcare, schools, utilities, and relocation resources for the UAE, Qatar, and Saudi Arabia.",
  author: {
    name: "Mottalib Radif",
    credentials: "MBA INSEAD",
    role: "Founder & Enthusiast",
    image: "/team/mottalib-radif.jpg",
    bio: "Mottalib Radif holds an MBA from INSEAD and has spent over a decade advising professionals on Gulf region career transitions. His research covers labor law, compensation structures, and immigration policy across the UAE, Qatar, and Saudi Arabia.",
  },
  year: 2026,
  googleVerifyCode: "b2YamsA61r7xK6-y3ozt05eM3ijS1Hi_Jsp9sOqANH0", // google-site-verification meta tag value from Google Search Console
  bingVerifyCode: "", // msvalidate.01 code from Bing Webmaster Tools
  clarityId: "placeholder-clarity-id",
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
