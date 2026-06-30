export const qatarCostOfLiving = {
  cities: [
    {
      name: "Doha",
      housing: {
        studioApartment: { min: 3000, max: 5000, currency: "QAR", note: "per month, Al Sadd, Bin Mahmoud" },
        oneBedroom: { min: 4500, max: 9000, currency: "QAR", note: "per month, The Pearl, West Bay" },
        twoBedroom: { min: 6000, max: 13000, currency: "QAR", note: "per month, varies by area" },
        familyVilla: { min: 10000, max: 22000, currency: "QAR", note: "per month, compound communities" },
      },
      food: {
        groceriesMonthly: { min: 1000, max: 2000, currency: "QAR" },
        mealBudgetRestaurant: { min: 20, max: 40, currency: "QAR" },
        mealMidRange: { min: 80, max: 160, currency: "QAR" },
      },
      transport: {
        metroMonthlyPass: { amount: 200, currency: "QAR" },
        taxiPerKm: { amount: 1.6, currency: "QAR" },
        gasolinePerLiter: { amount: 1.8, currency: "QAR" },
        carInsuranceAnnual: { min: 2000, max: 4500, currency: "QAR" },
      },
      healthcare: {
        gpVisit: { min: 100, max: 300, currency: "QAR" },
        specialistVisit: { min: 200, max: 600, currency: "QAR" },
        annualInsurance: { min: 2500, max: 8000, currency: "QAR", note: "employer-provided" },
      },
      education: {
        internationalSchool: { min: 20000, max: 65000, currency: "QAR", note: "per year" },
        nursery: { min: 15000, max: 35000, currency: "QAR", note: "per year" },
      },
      utilities: {
        monthly: { min: 300, max: 800, currency: "QAR", note: "Kahramaa (electricity + water)" },
        internet: { min: 300, max: 500, currency: "QAR" },
        mobile: { min: 75, max: 250, currency: "QAR" },
      },
    },
  ],
  usdRate: 3.64,
} as const;
