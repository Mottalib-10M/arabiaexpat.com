export const uaeGratuityRules = {
  country: "UAE",
  officialSource: "UAE Federal Decree-Law No. 33 of 2021 (Labour Law)",
  sourceUrl: "https://www.mohre.gov.ae/",
  // Federal Decree-Law 33/2021, Art. 51 : same rule for every contract, no reduction on resignation.
  allContracts: {
    minServiceYears: 1,
    first5Years: 21,
    after5Years: 30,
    maxCap: "2 years basic wage",
    resignationPenalty: null,
  },
  notes: [
    "Gratuity is calculated on basic salary only, excluding allowances.",
    "Under Federal Decree-Law 33/2021 all contracts are fixed-term; unlimited contracts had to be converted, and resigning no longer reduces gratuity.",
    "Maximum gratuity is capped at 2 years of basic wage.",
    "Employees terminated for gross misconduct may forfeit gratuity rights.",
    "Part-time workers receive proportional gratuity based on actual working hours.",
  ],
} as const;
