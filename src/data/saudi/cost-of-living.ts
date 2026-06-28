export const saudiCostOfLiving = {
  cities: [
    {
      name: "Riyadh",
      housing: {
        studioApartment: { min: 1500, max: 3000, currency: "SAR", note: "per month" },
        oneBedroom: { min: 2500, max: 5000, currency: "SAR", note: "per month, Al Olaya, Al Malaz" },
        twoBedroom: { min: 4000, max: 8000, currency: "SAR", note: "per month" },
        familyVilla: { min: 8000, max: 20000, currency: "SAR", note: "per month, compound communities" },
      },
      food: {
        groceriesMonthly: { min: 800, max: 1800, currency: "SAR" },
        mealBudgetRestaurant: { min: 15, max: 35, currency: "SAR" },
        mealMidRange: { min: 60, max: 150, currency: "SAR" },
      },
      transport: {
        metroMonthlyPass: { amount: 140, currency: "SAR", note: "Riyadh Metro (opened 2024)" },
        taxiPerKm: { amount: 2.25, currency: "SAR" },
        gasolinePerLiter: { amount: 2.18, currency: "SAR" },
        carInsuranceAnnual: { min: 1500, max: 4000, currency: "SAR" },
      },
      healthcare: {
        gpVisit: { min: 100, max: 300, currency: "SAR" },
        specialistVisit: { min: 200, max: 600, currency: "SAR" },
        annualInsurance: { min: 2000, max: 8000, currency: "SAR", note: "employer-mandated by CCHI" },
      },
      education: {
        internationalSchool: { min: 18000, max: 65000, currency: "SAR", note: "per year" },
        nursery: { min: 12000, max: 30000, currency: "SAR", note: "per year" },
      },
      utilities: {
        monthly: { min: 300, max: 800, currency: "SAR", note: "SEC electricity + water" },
        internet: { min: 200, max: 400, currency: "SAR" },
        mobile: { min: 75, max: 250, currency: "SAR" },
      },
    },
    {
      name: "Jeddah",
      housing: {
        studioApartment: { min: 1200, max: 2500, currency: "SAR", note: "per month" },
        oneBedroom: { min: 2000, max: 4000, currency: "SAR", note: "per month" },
        twoBedroom: { min: 3500, max: 7000, currency: "SAR", note: "per month" },
        familyVilla: { min: 7000, max: 18000, currency: "SAR", note: "per month" },
      },
      food: {
        groceriesMonthly: { min: 700, max: 1600, currency: "SAR" },
        mealBudgetRestaurant: { min: 15, max: 30, currency: "SAR" },
        mealMidRange: { min: 50, max: 130, currency: "SAR" },
      },
      transport: {
        metroMonthlyPass: { amount: 0, currency: "SAR", note: "Metro under construction; bus available" },
        taxiPerKm: { amount: 2.10, currency: "SAR" },
        gasolinePerLiter: { amount: 2.18, currency: "SAR" },
        carInsuranceAnnual: { min: 1400, max: 3500, currency: "SAR" },
      },
      healthcare: {
        gpVisit: { min: 80, max: 250, currency: "SAR" },
        specialistVisit: { min: 180, max: 500, currency: "SAR" },
        annualInsurance: { min: 1800, max: 7000, currency: "SAR", note: "employer-mandated" },
      },
      education: {
        internationalSchool: { min: 15000, max: 55000, currency: "SAR", note: "per year" },
        nursery: { min: 10000, max: 25000, currency: "SAR", note: "per year" },
      },
      utilities: {
        monthly: { min: 250, max: 700, currency: "SAR" },
        internet: { min: 200, max: 400, currency: "SAR" },
        mobile: { min: 75, max: 250, currency: "SAR" },
      },
    },
    {
      name: "Dammam",
      housing: {
        studioApartment: { min: 1000, max: 2200, currency: "SAR", note: "per month" },
        oneBedroom: { min: 1800, max: 3500, currency: "SAR", note: "per month, Al Khobar, Dhahran" },
        twoBedroom: { min: 3000, max: 6000, currency: "SAR", note: "per month" },
        familyVilla: { min: 6000, max: 15000, currency: "SAR", note: "per month, compound communities" },
      },
      food: {
        groceriesMonthly: { min: 650, max: 1400, currency: "SAR" },
        mealBudgetRestaurant: { min: 12, max: 28, currency: "SAR" },
        mealMidRange: { min: 45, max: 120, currency: "SAR" },
      },
      transport: {
        metroMonthlyPass: { amount: 0, currency: "SAR", note: "No metro; car-dependent city" },
        taxiPerKm: { amount: 2.0, currency: "SAR" },
        gasolinePerLiter: { amount: 2.18, currency: "SAR" },
        carInsuranceAnnual: { min: 1200, max: 3000, currency: "SAR" },
      },
      healthcare: {
        gpVisit: { min: 70, max: 220, currency: "SAR" },
        specialistVisit: { min: 150, max: 450, currency: "SAR" },
        annualInsurance: { min: 1500, max: 6000, currency: "SAR", note: "employer-mandated" },
      },
      education: {
        internationalSchool: { min: 12000, max: 50000, currency: "SAR", note: "per year" },
        nursery: { min: 8000, max: 22000, currency: "SAR", note: "per year" },
      },
      utilities: {
        monthly: { min: 200, max: 600, currency: "SAR" },
        internet: { min: 180, max: 380, currency: "SAR" },
        mobile: { min: 70, max: 230, currency: "SAR" },
      },
    },
  ],
  usdRate: 3.75,
} as const;
