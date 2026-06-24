export const saudiGratuityRules = {
  country: "Saudi Arabia",
  officialSource: "Saudi Labour Law (Royal Decree No. M/51, as amended)",
  sourceUrl: "https://hrsd.gov.sa/",
  calculation: {
    first5Years: 15,
    after5Years: 30,
    description: "Half month basic salary per year for first 5 years, one full month per year after 5 years",
  },
  resignation: {
    lessThan2Years: 0,
    twoToFiveYears: 1 / 3,
    fiveToTenYears: 2 / 3,
    overTenYears: 1,
  },
  notes: [
    "Gratuity is calculated on the last drawn basic salary plus housing allowance.",
    "Half month salary for each of the first 5 years of service.",
    "One full month salary for each year beyond 5 years.",
    "Employees who resign with less than 2 years of service receive no gratuity.",
    "Resignation after 2-5 years: entitled to 1/3 of gratuity.",
    "Resignation after 5-10 years: entitled to 2/3 of gratuity.",
    "Resignation after 10+ years: entitled to full gratuity.",
    "Termination by employer: full gratuity entitlement regardless of service length (unless for cause).",
  ],
} as const;
