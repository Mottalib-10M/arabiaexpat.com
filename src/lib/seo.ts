import { SITE } from "../data/site-config";

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function buildTitle(title: string): string {
  return title;
}

export function buildCanonical(path: string): string {
  const cleanPath = path.endsWith("/") ? path : path + "/";
  return `${SITE.url}${cleanPath}`;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbs(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    founder: {
      "@type": "Person",
      name: SITE.author.name,
      jobTitle: SITE.author.role,
      description: SITE.author.bio,
    },
  };
}

export function buildPersonSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.author.name,
    jobTitle: SITE.author.role,
    description: SITE.author.bio,
    image: `${SITE.url}${SITE.author.image}`,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "INSEAD",
    },
  };
}

export function buildWebApplicationSchema(name: string, description: string, url: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: SITE.author.name,
    },
  };
}

export function buildWebSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gulf Expat Hub",
    url: SITE.url,
    description: "Salary data, gratuity calculators, visa guides, and cost of living comparisons for expats in the UAE, Qatar, and Saudi Arabia.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Gulf Expat Hub",
      url: SITE.url,
    },
  };
}

export function buildArticleSchema(title: string, description: string, url: string, datePublished: string, dateModified: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: "Mottalib Radif",
      jobTitle: "MBA INSEAD",
    },
    publisher: {
      "@type": "Organization",
      name: "Gulf Expat Hub",
      url: SITE.url,
    },
  };
}
