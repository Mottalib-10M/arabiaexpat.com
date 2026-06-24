export const uaeCostOfLiving = {
  cities: [
    {
      name: "Dubai",
      housing: {
        studioApartment: { min: 3500, max: 6000, currency: "AED", note: "per month, areas like JVC, Sports City" },
        oneBedroom: { min: 5000, max: 9000, currency: "AED", note: "per month, Marina, JLT, Downtown" },
        twoBedroom: { min: 7000, max: 14000, currency: "AED", note: "per month, varies widely by area" },
        familyVilla: { min: 12000, max: 30000, currency: "AED", note: "per month, compound communities" },
      },
      food: {
        groceriesMonthly: { min: 1200, max: 2500, currency: "AED" },
        mealBudgetRestaurant: { min: 25, max: 45, currency: "AED" },
        mealMidRange: { min: 80, max: 180, currency: "AED" },
      },
      transport: {
        metroMonthlyPass: { amount: 350, currency: "AED" },
        taxiPerKm: { amount: 1.96, currency: "AED" },
        gasolinePerLiter: { amount: 3.2, currency: "AED" },
        carInsuranceAnnual: { min: 2500, max: 5000, currency: "AED" },
      },
      healthcare: {
        gpVisit: { min: 150, max: 400, currency: "AED" },
        specialistVisit: { min: 300, max: 800, currency: "AED" },
        annualInsurance: { min: 3000, max: 12000, currency: "AED", note: "employer-mandated" },
      },
      education: {
        internationalSchool: { min: 25000, max: 80000, currency: "AED", note: "per year" },
        nursery: { min: 20000, max: 45000, currency: "AED", note: "per year" },
      },
      utilities: {
        monthly: { min: 500, max: 1200, currency: "AED", note: "DEWA (electricity + water)" },
        internet: { min: 299, max: 549, currency: "AED", note: "du or Etisalat" },
        mobile: { min: 75, max: 300, currency: "AED" },
      },
    },
    {
      name: "Abu Dhabi",
      housing: {
        studioApartment: { min: 2500, max: 4500, currency: "AED", note: "per month" },
        oneBedroom: { min: 3500, max: 7000, currency: "AED", note: "per month" },
        twoBedroom: { min: 5500, max: 11000, currency: "AED", note: "per month" },
        familyVilla: { min: 10000, max: 25000, currency: "AED", note: "per month" },
      },
      food: {
        groceriesMonthly: { min: 1000, max: 2200, currency: "AED" },
        mealBudgetRestaurant: { min: 20, max: 40, currency: "AED" },
        mealMidRange: { min: 70, max: 160, currency: "AED" },
      },
      transport: {
        metroMonthlyPass: { amount: 0, currency: "AED", note: "No metro; bus pass ~200 AED" },
        taxiPerKm: { amount: 1.82, currency: "AED" },
        gasolinePerLiter: { amount: 3.2, currency: "AED" },
        carInsuranceAnnual: { min: 2200, max: 4500, currency: "AED" },
      },
      healthcare: {
        gpVisit: { min: 120, max: 350, currency: "AED" },
        specialistVisit: { min: 250, max: 700, currency: "AED" },
        annualInsurance: { min: 3000, max: 10000, currency: "AED", note: "employer-mandated" },
      },
      education: {
        internationalSchool: { min: 20000, max: 70000, currency: "AED", note: "per year" },
        nursery: { min: 18000, max: 40000, currency: "AED", note: "per year" },
      },
      utilities: {
        monthly: { min: 400, max: 1000, currency: "AED" },
        internet: { min: 299, max: 549, currency: "AED" },
        mobile: { min: 75, max: 300, currency: "AED" },
      },
    },
  ],
  usdRate: 3.6725,
} as const;
