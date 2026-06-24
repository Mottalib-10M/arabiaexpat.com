export type ContractType = "limited" | "unlimited";
export type TerminationType = "employer" | "resignation";
export type Country = "uae" | "qatar" | "saudi";

export interface GratuityInput {
  country: Country;
  basicSalary: number;
  yearsOfService: number;
  contractType?: ContractType;
  terminationType: TerminationType;
}

export interface GratuityResult {
  totalGratuity: number;
  grossGratuity: number;
  penalty: number;
  penaltyRate: number;
  breakdown: GratuityBreakdownItem[];
  formula: string;
  notes: string[];
}

export interface GratuityBreakdownItem {
  label: string;
  years: number;
  dailyRate: number;
  daysPerYear: number;
  amount: number;
}

function dailySalary(monthlySalary: number): number {
  return monthlySalary / 30;
}

function calculateUAEGratuity(input: GratuityInput): GratuityResult {
  const { basicSalary, yearsOfService, contractType = "limited", terminationType } = input;
  const daily = dailySalary(basicSalary);
  const breakdown: GratuityBreakdownItem[] = [];
  let grossGratuity = 0;

  if (yearsOfService <= 0) {
    return {
      totalGratuity: 0,
      grossGratuity: 0,
      penalty: 0,
      penaltyRate: 0,
      breakdown: [],
      formula: "No service period",
      notes: ["Employee must complete at least 1 year of service to be eligible for gratuity."],
    };
  }

  const first5 = Math.min(yearsOfService, 5);
  const after5 = Math.max(yearsOfService - 5, 0);

  if (first5 > 0) {
    const amount = daily * 21 * first5;
    breakdown.push({
      label: "First 5 years (21 days/year)",
      years: first5,
      dailyRate: daily,
      daysPerYear: 21,
      amount,
    });
    grossGratuity += amount;
  }

  if (after5 > 0) {
    const amount = daily * 30 * after5;
    breakdown.push({
      label: "After 5 years (30 days/year)",
      years: after5,
      dailyRate: daily,
      daysPerYear: 30,
      amount,
    });
    grossGratuity += amount;
  }

  const maxCap = basicSalary * 24;
  if (grossGratuity > maxCap) {
    grossGratuity = maxCap;
  }

  let penaltyRate = 0;
  if (contractType === "unlimited" && terminationType === "resignation") {
    if (yearsOfService < 1) {
      penaltyRate = 1;
    } else if (yearsOfService < 3) {
      penaltyRate = 2 / 3;
    } else if (yearsOfService < 5) {
      penaltyRate = 1 / 3;
    } else {
      penaltyRate = 0;
    }
  }

  const penalty = grossGratuity * penaltyRate;
  const totalGratuity = grossGratuity - penalty;

  return {
    totalGratuity: Math.round(totalGratuity * 100) / 100,
    grossGratuity: Math.round(grossGratuity * 100) / 100,
    penalty: Math.round(penalty * 100) / 100,
    penaltyRate,
    breakdown,
    formula: `21 days/year x first 5 years + 30 days/year x remaining years. Max cap: 2 years salary.`,
    notes: [
      "Calculated on basic salary only (excludes allowances).",
      "Maximum gratuity capped at 2 years of total salary.",
      contractType === "unlimited" && terminationType === "resignation"
        ? `Resignation penalty applied: ${Math.round(penaltyRate * 100)}% deduction.`
        : "No resignation penalty applied.",
    ],
  };
}

function calculateSaudiGratuity(input: GratuityInput): GratuityResult {
  const { basicSalary, yearsOfService, terminationType } = input;
  const breakdown: GratuityBreakdownItem[] = [];
  let grossGratuity = 0;

  if (yearsOfService < 2 && terminationType === "resignation") {
    return {
      totalGratuity: 0,
      grossGratuity: 0,
      penalty: 0,
      penaltyRate: 1,
      breakdown: [],
      formula: "Not eligible: resignation before 2 years",
      notes: ["Employees who resign with less than 2 years of service are not entitled to gratuity under Saudi labor law."],
    };
  }

  const first5 = Math.min(yearsOfService, 5);
  const after5 = Math.max(yearsOfService - 5, 0);

  if (first5 > 0) {
    const amount = (basicSalary / 2) * first5;
    breakdown.push({
      label: "First 5 years (half month/year)",
      years: first5,
      dailyRate: basicSalary / 2,
      daysPerYear: 15,
      amount,
    });
    grossGratuity += amount;
  }

  if (after5 > 0) {
    const amount = basicSalary * after5;
    breakdown.push({
      label: "After 5 years (1 full month/year)",
      years: after5,
      dailyRate: basicSalary,
      daysPerYear: 30,
      amount,
    });
    grossGratuity += amount;
  }

  let penaltyRate = 0;
  if (terminationType === "resignation") {
    if (yearsOfService < 2) {
      penaltyRate = 1;
    } else if (yearsOfService < 5) {
      penaltyRate = 2 / 3;
    } else if (yearsOfService < 10) {
      penaltyRate = 1 / 3;
    } else {
      penaltyRate = 0;
    }
  }

  const penalty = grossGratuity * penaltyRate;
  const totalGratuity = grossGratuity - penalty;

  return {
    totalGratuity: Math.round(totalGratuity * 100) / 100,
    grossGratuity: Math.round(grossGratuity * 100) / 100,
    penalty: Math.round(penalty * 100) / 100,
    penaltyRate,
    breakdown,
    formula: `Half month salary x first 5 years + 1 full month salary x remaining years.`,
    notes: [
      "Calculated on last basic salary plus housing allowance.",
      terminationType === "resignation"
        ? `Resignation penalty: ${Math.round(penaltyRate * 100)}% deduction.`
        : "Employer-initiated termination: full gratuity entitlement.",
    ],
  };
}

function calculateQatarGratuity(input: GratuityInput): GratuityResult {
  const { basicSalary, yearsOfService, terminationType } = input;
  const daily = dailySalary(basicSalary);
  const breakdown: GratuityBreakdownItem[] = [];

  if (yearsOfService <= 0) {
    return {
      totalGratuity: 0,
      grossGratuity: 0,
      penalty: 0,
      penaltyRate: 0,
      breakdown: [],
      formula: "No service period",
      notes: ["Minimum service required for gratuity entitlement."],
    };
  }

  const amount = daily * 21 * yearsOfService;
  breakdown.push({
    label: "3 weeks (21 days) per year of service",
    years: yearsOfService,
    dailyRate: daily,
    daysPerYear: 21,
    amount,
  });

  const grossGratuity = amount;
  let penaltyRate = 0;

  if (terminationType === "resignation") {
    if (yearsOfService < 2) {
      penaltyRate = 1;
    } else if (yearsOfService < 5) {
      penaltyRate = 2 / 3;
    } else if (yearsOfService < 10) {
      penaltyRate = 1 / 3;
    } else {
      penaltyRate = 0;
    }
  }

  const penalty = grossGratuity * penaltyRate;
  const totalGratuity = grossGratuity - penalty;

  return {
    totalGratuity: Math.round(totalGratuity * 100) / 100,
    grossGratuity: Math.round(grossGratuity * 100) / 100,
    penalty: Math.round(penalty * 100) / 100,
    penaltyRate,
    breakdown,
    formula: `Minimum 3 weeks (21 days) basic salary per year of service.`,
    notes: [
      "Calculated on basic salary only.",
      "Employers may offer more generous terms than the legal minimum.",
      terminationType === "resignation" && penaltyRate > 0
        ? `Resignation penalty: ${Math.round(penaltyRate * 100)}% deduction.`
        : "Full gratuity entitlement.",
    ],
  };
}

export function calculateGratuity(input: GratuityInput): GratuityResult {
  switch (input.country) {
    case "uae":
      return calculateUAEGratuity(input);
    case "saudi":
      return calculateSaudiGratuity(input);
    case "qatar":
      return calculateQatarGratuity(input);
    default:
      throw new Error(`Unsupported country: ${input.country}`);
  }
}
