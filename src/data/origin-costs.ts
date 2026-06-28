/** Cost of living data for origin cities (monthly USD) used by the cost simulator for comparison */
export interface OriginCityData {
  slug: string;
  name: string;
  country: string;
  currency: string;
  usdRate: number;
  /** Monthly costs in local currency */
  costs: {
    studioRent: number;
    oneBedroomRent: number;
    twoBedroomRent: number;
    groceries: number;
    transport: number;
    utilities: number;
    internet: number;
    healthcare: number;
    schoolAnnual: number;
  };
}

export const originCities: OriginCityData[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    country: "India",
    currency: "INR",
    usdRate: 83.5,
    costs: {
      studioRent: 25000,
      oneBedroomRent: 40000,
      twoBedroomRent: 65000,
      groceries: 8000,
      transport: 3000,
      utilities: 3500,
      internet: 800,
      healthcare: 2000,
      schoolAnnual: 200000,
    },
  },
  {
    slug: "delhi",
    name: "Delhi",
    country: "India",
    currency: "INR",
    usdRate: 83.5,
    costs: {
      studioRent: 18000,
      oneBedroomRent: 28000,
      twoBedroomRent: 45000,
      groceries: 7000,
      transport: 2500,
      utilities: 3000,
      internet: 800,
      healthcare: 1800,
      schoolAnnual: 180000,
    },
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    currency: "GBP",
    usdRate: 0.79,
    costs: {
      studioRent: 1500,
      oneBedroomRent: 2000,
      twoBedroomRent: 2800,
      groceries: 350,
      transport: 180,
      utilities: 200,
      internet: 35,
      healthcare: 0,
      schoolAnnual: 18000,
    },
  },
  {
    slug: "new-york",
    name: "New York City",
    country: "United States",
    currency: "USD",
    usdRate: 1,
    costs: {
      studioRent: 2800,
      oneBedroomRent: 3500,
      twoBedroomRent: 5000,
      groceries: 500,
      transport: 130,
      utilities: 180,
      internet: 65,
      healthcare: 400,
      schoolAnnual: 35000,
    },
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    currency: "EUR",
    usdRate: 0.92,
    costs: {
      studioRent: 1100,
      oneBedroomRent: 1500,
      twoBedroomRent: 2200,
      groceries: 350,
      transport: 85,
      utilities: 180,
      internet: 30,
      healthcare: 50,
      schoolAnnual: 8000,
    },
  },
  {
    slug: "manila",
    name: "Manila",
    country: "Philippines",
    currency: "PHP",
    usdRate: 56.5,
    costs: {
      studioRent: 18000,
      oneBedroomRent: 28000,
      twoBedroomRent: 45000,
      groceries: 10000,
      transport: 3000,
      utilities: 5000,
      internet: 1500,
      healthcare: 2000,
      schoolAnnual: 150000,
    },
  },
  {
    slug: "cairo",
    name: "Cairo",
    country: "Egypt",
    currency: "EGP",
    usdRate: 48.5,
    costs: {
      studioRent: 8000,
      oneBedroomRent: 12000,
      twoBedroomRent: 18000,
      groceries: 5000,
      transport: 1500,
      utilities: 1200,
      internet: 400,
      healthcare: 1000,
      schoolAnnual: 80000,
    },
  },
  {
    slug: "dhaka",
    name: "Dhaka",
    country: "Bangladesh",
    currency: "BDT",
    usdRate: 110,
    costs: {
      studioRent: 15000,
      oneBedroomRent: 25000,
      twoBedroomRent: 40000,
      groceries: 8000,
      transport: 3000,
      utilities: 4000,
      internet: 800,
      healthcare: 2000,
      schoolAnnual: 120000,
    },
  },
  {
    slug: "karachi",
    name: "Karachi",
    country: "Pakistan",
    currency: "PKR",
    usdRate: 280,
    costs: {
      studioRent: 30000,
      oneBedroomRent: 50000,
      twoBedroomRent: 80000,
      groceries: 20000,
      transport: 8000,
      utilities: 8000,
      internet: 3000,
      healthcare: 5000,
      schoolAnnual: 300000,
    },
  },
  {
    slug: "sydney",
    name: "Sydney",
    country: "Australia",
    currency: "AUD",
    usdRate: 1.53,
    costs: {
      studioRent: 2200,
      oneBedroomRent: 2800,
      twoBedroomRent: 3800,
      groceries: 500,
      transport: 200,
      utilities: 250,
      internet: 70,
      healthcare: 200,
      schoolAnnual: 25000,
    },
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    currency: "CAD",
    usdRate: 1.36,
    costs: {
      studioRent: 2000,
      oneBedroomRent: 2500,
      twoBedroomRent: 3200,
      groceries: 450,
      transport: 160,
      utilities: 200,
      internet: 75,
      healthcare: 0,
      schoolAnnual: 20000,
    },
  },
  {
    slug: "lahore",
    name: "Lahore",
    country: "Pakistan",
    currency: "PKR",
    usdRate: 280,
    costs: {
      studioRent: 22000,
      oneBedroomRent: 35000,
      twoBedroomRent: 55000,
      groceries: 18000,
      transport: 6000,
      utilities: 7000,
      internet: 2500,
      healthcare: 4000,
      schoolAnnual: 250000,
    },
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    country: "India",
    currency: "INR",
    usdRate: 83.5,
    costs: {
      studioRent: 20000,
      oneBedroomRent: 30000,
      twoBedroomRent: 50000,
      groceries: 7000,
      transport: 2500,
      utilities: 3000,
      internet: 800,
      healthcare: 1800,
      schoolAnnual: 200000,
    },
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    country: "South Africa",
    currency: "ZAR",
    usdRate: 18.2,
    costs: {
      studioRent: 8000,
      oneBedroomRent: 12000,
      twoBedroomRent: 18000,
      groceries: 4000,
      transport: 2000,
      utilities: 2500,
      internet: 1000,
      healthcare: 3000,
      schoolAnnual: 80000,
    },
  },
  {
    slug: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    currency: "KES",
    usdRate: 155,
    costs: {
      studioRent: 25000,
      oneBedroomRent: 45000,
      twoBedroomRent: 75000,
      groceries: 15000,
      transport: 5000,
      utilities: 5000,
      internet: 3500,
      healthcare: 5000,
      schoolAnnual: 400000,
    },
  },
];

export function getOriginCity(slug: string): OriginCityData | undefined {
  return originCities.find((c) => c.slug === slug);
}

export function originCostToUSD(city: OriginCityData): Record<string, number> {
  const r = city.usdRate;
  return {
    studioRent: city.costs.studioRent / r,
    oneBedroomRent: city.costs.oneBedroomRent / r,
    twoBedroomRent: city.costs.twoBedroomRent / r,
    groceries: city.costs.groceries / r,
    transport: city.costs.transport / r,
    utilities: city.costs.utilities / r,
    internet: city.costs.internet / r,
    healthcare: city.costs.healthcare / r,
    schoolAnnual: city.costs.schoolAnnual / r,
  };
}
