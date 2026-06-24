export const uaeGratuityRules = {
  country: "UAE",
  officialSource: "UAE Federal Decree-Law No. 33 of 2021 (Labour Law)",
  sourceUrl: "https://www.mohre.gov.ae/",
  limited: {
    first5Years: 21,
    after5Years: 30,
    maxCap: "2 years total salary",
    resignationPenalty: null,
  },
  unlimited: {
    first5Years: 21,
    after5Years: 30,
    maxCap: "2 years total salary",
    resignationPenalty: {
      lessThan1Year: 0,
      oneToThreeYears: 1 / 3,
      threeToFiveYears: 2 / 3,
      overFiveYears: 1,
    },
  },
  notes: [
    "Gratuity is calculated on basic salary only, excluding allowances.",
    "Under the new 2021 labour law, all contracts are fixed-term (limited). The unlimited vs limited distinction applies to contracts entered before February 2, 2022.",
    "Maximum gratuity is capped at 2 years of total salary.",
    "Employees terminated for gross misconduct may forfeit gratuity rights.",
    "Part-time workers receive proportional gratuity based on actual working hours.",
  ],
} as const;
