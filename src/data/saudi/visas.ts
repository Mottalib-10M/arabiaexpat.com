export const saudiVisas = {
  types: [
    {
      name: "Work Visa (Iqama)",
      duration: "1-2 years (renewable)",
      requirements: ["Job offer from Saudi employer", "Medical fitness test", "Attested educational certificates", "MOFA-verified documents", "Professional classification from MHRSD"],
      process: "Employer applies through Qiwa platform. Visa block number issued, worker enters on work visa, then Iqama (residence permit) processing. Timeline: 4-8 weeks.",
      cost: "SAR 2,000-6,000 (employer bears cost per law)",
    },
    {
      name: "Premium Residency",
      duration: "Permanent or 1-year renewable",
      requirements: ["Permanent: SAR 800,000 one-time fee", "Renewable (1-year): SAR 100,000 annual fee", "Clean criminal record", "Valid passport", "Medical fitness", "Financial solvency proof"],
      process: "Apply through the Premium Residency Center portal. Self-sponsored, includes right to own property, invest without Saudi partner, and sponsor family.",
      cost: "SAR 100,000 (annual) or SAR 800,000 (permanent)",
    },
    {
      name: "Visit Visa",
      duration: "90 days (single or multiple entry)",
      requirements: ["Valid passport", "Return ticket", "Hotel booking or host invitation", "Travel insurance"],
      process: "Apply online through Visit Saudi portal or on arrival for eligible nationalities. E-visa available for 60+ nationalities.",
      cost: "SAR 300-535",
    },
  ],
  generalNotes: [
    "The Iqama (residence permit) must be renewed before expiry.",
    "Dependent visa requires minimum salary of SAR 4,000/month.",
    "Professional classification determines work permit eligibility.",
    "New labor mobility rules allow job changes with notice period.",
    "Absher platform manages most immigration-related services online.",
  ],
} as const;
