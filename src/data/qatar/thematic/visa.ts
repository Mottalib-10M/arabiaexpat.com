import type { ThematicPageData } from "../../types/thematic";

export const qatarVisa: ThematicPageData = {
  slug: "visa",
  theme: "visa",
  countryKey: "qatar",
  countrySlug: "qatar",
  countryName: "Qatar",
  title: "Qatar Visa Types: Work Permits, Residency & QID Guide for Expats",
  description:
    "Complete guide to Qatar visa types for expats. Covers work visas, residence permits, QID registration, permanent residency cards, free zones (QFC, QSTP), kafala reforms, and labour law changes.",
  intro: `Qatar's visa and immigration system has undergone significant reforms in recent years, making it more flexible and worker-friendly. The country has moved away from the traditional kafala (sponsorship) system, introducing labour mobility provisions that allow workers to change jobs without employer consent after completing a probationary period. These reforms, coupled with the introduction of a non-discriminatory minimum wage and permanent residency options, have positioned Qatar as a more attractive destination for skilled professionals.

The primary visa types for expats include the work visa and residence permit (combined as the Qatar ID or QID), business visas, family/dependent visas, and tourist visas. The work visa process begins with a job offer from a Qatari employer, who submits an application to the Ministry of Labour. Once approved, the worker enters Qatar on a temporary entry permit and completes medical examinations, biometric registration, and fingerprinting to receive the QID. The QID is the most important document for expats, serving as identification, proof of residency, and authorisation to work.

Qatar has also introduced a Permanent Residency Card for certain categories of residents, including children of Qatari women married to non-Qatari men, long-term residents who have provided distinguished service to Qatar, and property investors who meet minimum investment thresholds. While not equivalent to citizenship, the permanent residency card provides significant benefits including access to public healthcare and education, the right to own property, and priority in commercial and investment activities.`,
  citySections: [
    {
      city: "Doha",
      slug: "doha",
      content: `Doha is where all visa and residency processing takes place, with the Ministry of Interior's Immigration Department serving as the primary authority. The main immigration office is located in the Al Gharrafa area, and most residency-related procedures including QID issuance, renewal, and cancellation are handled there. Processing times for a new QID typically range from two to four weeks, though delays can occur during peak periods.

The Qatar Financial Centre (QFC) is a significant free zone located in West Bay that operates under its own regulatory framework. Companies registered in the QFC benefit from 100% foreign ownership, a competitive 10% corporate tax rate, and the ability to trade in any currency. Employees of QFC-registered companies receive their work visas through the QFC Authority rather than the Ministry of Labour, which can streamline the process. The QFC is home to financial services firms, professional services companies, and technology businesses.

The Qatar Science & Technology Park (QSTP), located in Education City, is another free zone designed to attract technology companies, startups, and research organisations. QSTP offers similar benefits to the QFC, including full foreign ownership and tax advantages. Companies in QSTP benefit from proximity to the universities in Education City and access to research collaboration opportunities. QSTP employees also receive visas through a dedicated process.

Qatar's labour reforms, introduced primarily between 2020 and 2022, have fundamentally changed the employment landscape. The abolition of the exit permit requirement means workers no longer need employer permission to leave the country. The introduction of a non-discriminatory minimum wage of QAR 1,000 per month (plus QAR 500 for food and QAR 300 for housing if not provided by the employer) applies to all workers regardless of nationality. Workers can now change employers after a probationary period without needing a No Objection Certificate (NOC) from their current employer, though they must serve the notice period specified in their contract.

The kafala system reforms have also impacted how disputes are resolved. Labour courts and dispute resolution committees have been established to handle employment conflicts, including non-payment of wages, contract violations, and wrongful termination. The Ministry of Labour operates a hotline (in multiple languages) and an online complaint portal for workers to report violations. These mechanisms have improved protections significantly, though challenges remain, particularly for lower-wage workers.

For family and dependent visas, the sponsoring expat must meet a minimum salary threshold (currently QAR 10,000 per month or QAR 7,000 with employer-provided accommodation) to bring a spouse and children to Qatar. The application is submitted through the Ministry of Interior, and dependants receive their own QIDs linked to the sponsor. Dependent spouses can obtain work permits independently, and children can attend school on their dependent QID.`,
    },
  ],
  faqs: [
    {
      question: "What is a QID and how do I get one?",
      answer:
        "The QID (Qatar ID) is a biometric residence card issued by the Ministry of Interior. It serves as your official identification, proof of residency, and work authorisation in Qatar. To obtain a QID, your employer initiates the process by applying for your work visa. After arriving in Qatar on a temporary entry permit, you complete a medical examination (including blood tests for infectious diseases and a chest X-ray), biometric registration, and fingerprinting. The QID is typically issued within 2-4 weeks and must be renewed annually or biannually depending on the contract.",
    },
    {
      question: "Can I change jobs in Qatar without my employer's permission?",
      answer:
        "Yes, following the 2020 labour reforms, workers in Qatar can change jobs without needing a No Objection Certificate (NOC) from their current employer. However, you must complete any probationary period specified in your contract and serve the required notice period (typically one or two months). You should submit a resignation letter to your employer and notify the Ministry of Labour. Your new employer then processes the visa transfer. These reforms effectively dismantled the restrictive elements of the kafala sponsorship system.",
    },
    {
      question: "What is the minimum wage in Qatar?",
      answer:
        "Qatar introduced a non-discriminatory minimum wage in March 2021, set at QAR 1,000 per month (approximately USD 275). In addition, employers must provide food and housing or pay allowances of QAR 500 for food and QAR 300 for accommodation if these are not provided in kind. This brings the effective minimum compensation to QAR 1,800 per month. The minimum wage applies to all workers regardless of nationality or sector, making it the first non-discriminatory minimum wage in the Gulf region.",
    },
    {
      question: "How can I get permanent residency in Qatar?",
      answer:
        "Qatar's Permanent Residency Card is available to limited categories of residents under Law No. 10 of 2018. Eligible groups include children of Qatari mothers married to non-Qatari fathers, individuals who have rendered distinguished service to Qatar (as determined by the Interior Minister), and foreign property investors who have invested at least QAR 3,650,000 in Qatar real estate. Permanent residents enjoy access to public healthcare and education, property ownership rights, and priority in commercial activities. The card does not confer citizenship or voting rights.",
    },
    {
      question:
        "What salary do I need to sponsor my family to live in Qatar?",
      answer:
        "To sponsor your spouse and children for dependent visas in Qatar, you need a minimum monthly salary of QAR 10,000 (approximately USD 2,750). If your employer provides accommodation, the threshold is reduced to QAR 7,000 per month. You must also have a valid QID and a suitable residence for your family. The sponsoring process involves submitting an application to the Ministry of Interior with your employment contract, salary certificate, tenancy agreement, and family documents (marriage certificate and children's birth certificates, all attested).",
    },
  ],
  sources: [
    {
      name: "Ministry of Interior - Qatar (Immigration)",
      url: "https://portal.moi.gov.qa/",
    },
    {
      name: "Ministry of Labour - Qatar",
      url: "https://www.mol.gov.qa/",
    },
    {
      name: "Qatar Financial Centre (QFC)",
      url: "https://www.qfc.qa/",
    },
  ],
  relatedLinks: [
    { label: "Qatar Expat Guide", href: "/qatar/guide/" },
    { label: "Cost of Living in Qatar", href: "/qatar/cost-of-living/" },
    { label: "Living in Doha", href: "/qatar/doha/" },
    { label: "Banking in Qatar", href: "/qatar/banking/" },
    { label: "Housing in Qatar", href: "/qatar/housing/" },
    { label: "Visa Types in the UAE", href: "/uae/visa/" },
    {
      label: "Visa Types in Saudi Arabia",
      href: "/saudi-arabia/visa/",
    },
  ],
  calculator: null,
};
