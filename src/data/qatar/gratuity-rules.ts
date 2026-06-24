export const qatarGratuityRules = {
  country: "Qatar",
  officialSource: "Qatar Labour Law No. 14 of 2004 (as amended)",
  sourceUrl: "https://www.adlsa.gov.qa/",
  calculation: {
    minimumPerYear: 21,
    description: "Minimum 3 weeks (21 days) basic salary per year of service",
    after5Years: "Additional bonus may apply based on employment contract terms",
  },
  resignation: {
    lessThan2Years: 0,
    twoToFiveYears: 1 / 3,
    fiveToTenYears: 2 / 3,
    overTenYears: 1,
  },
  notes: [
    "End-of-service gratuity is calculated on basic salary only.",
    "The minimum entitlement is 3 weeks basic salary for each year of service.",
    "The Workers Support and Insurance Fund provides a safety net for unpaid benefits.",
    "Employers may offer more generous terms than the legal minimum.",
    "Gratuity is payable within 7 days of the end of the employment relationship.",
    "Part-year service is calculated proportionally.",
  ],
} as const;
