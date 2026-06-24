export type SalaryCountry = "uae" | "qatar" | "saudi";

export interface SalaryInput {
  country: SalaryCountry;
  monthlySalary: number;
  includeHousing: boolean;
  housingAllowance: number;
  includeTransport: boolean;
  transportAllowance: number;
  isNational: boolean;
}

export interface SalaryResult {
  grossMonthly: number;
  grossAnnual: number;
  netMonthly: number;
  netAnnual: number;
  deductions: DeductionItem[];
  effectiveTaxRate: number;
  totalDeductionsMonthly: number;
  breakdown: SalaryBreakdownItem[];
}

export interface DeductionItem {
  label: string;
  monthlyAmount: number;
  annualAmount: number;
  rate: number | null;
}

export interface SalaryBreakdownItem {
  label: string;
  amount: number;
  type: "income" | "deduction";
}

function calculateUAESalary(input: SalaryInput): SalaryResult {
  const { monthlySalary, housingAllowance, transportAllowance, isNational } = input;
  const gross = monthlySalary + (input.includeHousing ? housingAllowance : 0) + (input.includeTransport ? transportAllowance : 0);
  const deductions: DeductionItem[] = [];
  const breakdown: SalaryBreakdownItem[] = [];

  breakdown.push({ label: "Basic Salary", amount: monthlySalary, type: "income" });
  if (input.includeHousing) breakdown.push({ label: "Housing Allowance", amount: housingAllowance, type: "income" });
  if (input.includeTransport) breakdown.push({ label: "Transport Allowance", amount: transportAllowance, type: "income" });

  if (isNational) {
    const pensionEmployee = monthlySalary * 0.05;
    const pensionEmployer = monthlySalary * 0.125;
    deductions.push({
      label: "GPSSA Pension (Employee 5%)",
      monthlyAmount: pensionEmployee,
      annualAmount: pensionEmployee * 12,
      rate: 0.05,
    });
    deductions.push({
      label: "GPSSA Pension (Employer 12.5%)",
      monthlyAmount: pensionEmployer,
      annualAmount: pensionEmployer * 12,
      rate: 0.125,
    });
    breakdown.push({ label: "GPSSA Pension (5%)", amount: -pensionEmployee, type: "deduction" });
  }

  const totalDeductions = deductions.filter(d => d.label.includes("Employee")).reduce((sum, d) => sum + d.monthlyAmount, 0);
  const net = gross - totalDeductions;

  return {
    grossMonthly: gross,
    grossAnnual: gross * 12,
    netMonthly: net,
    netAnnual: net * 12,
    deductions,
    effectiveTaxRate: totalDeductions / gross,
    totalDeductionsMonthly: totalDeductions,
    breakdown,
  };
}

function calculateSaudiSalary(input: SalaryInput): SalaryResult {
  const { monthlySalary, housingAllowance, transportAllowance, isNational } = input;
  const gross = monthlySalary + (input.includeHousing ? housingAllowance : 0) + (input.includeTransport ? transportAllowance : 0);
  const deductions: DeductionItem[] = [];
  const breakdown: SalaryBreakdownItem[] = [];

  breakdown.push({ label: "Basic Salary", amount: monthlySalary, type: "income" });
  if (input.includeHousing) breakdown.push({ label: "Housing Allowance", amount: housingAllowance, type: "income" });
  if (input.includeTransport) breakdown.push({ label: "Transport Allowance", amount: transportAllowance, type: "income" });

  if (isNational) {
    const gosiEmployee = monthlySalary * 0.0975;
    const gosiEmployer = monthlySalary * 0.1175;
    deductions.push({
      label: "GOSI Employee (9.75%)",
      monthlyAmount: gosiEmployee,
      annualAmount: gosiEmployee * 12,
      rate: 0.0975,
    });
    deductions.push({
      label: "GOSI Employer (11.75%)",
      monthlyAmount: gosiEmployer,
      annualAmount: gosiEmployer * 12,
      rate: 0.1175,
    });
    breakdown.push({ label: "GOSI (9.75%)", amount: -gosiEmployee, type: "deduction" });
  } else {
    const gosiEmployer = monthlySalary * 0.02;
    deductions.push({
      label: "GOSI Employer (2% for expats)",
      monthlyAmount: gosiEmployer,
      annualAmount: gosiEmployer * 12,
      rate: 0.02,
    });
  }

  const totalDeductions = deductions
    .filter(d => d.label.includes("Employee"))
    .reduce((sum, d) => sum + d.monthlyAmount, 0);
  const net = gross - totalDeductions;

  return {
    grossMonthly: gross,
    grossAnnual: gross * 12,
    netMonthly: net,
    netAnnual: net * 12,
    deductions,
    effectiveTaxRate: totalDeductions / gross,
    totalDeductionsMonthly: totalDeductions,
    breakdown,
  };
}

function calculateQatarSalary(input: SalaryInput): SalaryResult {
  const { monthlySalary, housingAllowance, transportAllowance } = input;
  const gross = monthlySalary + (input.includeHousing ? housingAllowance : 0) + (input.includeTransport ? transportAllowance : 0);
  const deductions: DeductionItem[] = [];
  const breakdown: SalaryBreakdownItem[] = [];

  breakdown.push({ label: "Basic Salary", amount: monthlySalary, type: "income" });
  if (input.includeHousing) breakdown.push({ label: "Housing Allowance", amount: housingAllowance, type: "income" });
  if (input.includeTransport) breakdown.push({ label: "Transport Allowance", amount: transportAllowance, type: "income" });

  return {
    grossMonthly: gross,
    grossAnnual: gross * 12,
    netMonthly: gross,
    netAnnual: gross * 12,
    deductions,
    effectiveTaxRate: 0,
    totalDeductionsMonthly: 0,
    breakdown,
  };
}

export function calculateSalary(input: SalaryInput): SalaryResult {
  switch (input.country) {
    case "uae":
      return calculateUAESalary(input);
    case "saudi":
      return calculateSaudiSalary(input);
    case "qatar":
      return calculateQatarSalary(input);
    default:
      throw new Error(`Unsupported country: ${input.country}`);
  }
}
