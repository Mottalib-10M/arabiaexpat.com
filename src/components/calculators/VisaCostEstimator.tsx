import { useState, useMemo } from "react";
import { formatWithEUR } from "../../lib/format";

interface Props {
  countryKey: "uae" | "qatar" | "saudi";
  currency: string;
}

type VisaType = "employment" | "golden" | "family" | "freelancer";
type Dependents = "0" | "1" | "2" | "3plus";

const citiesMap: Record<string, string> = {
  uae: "UAE",
  qatar: "Qatar",
  saudi: "Saudi Arabia",
};

const visaLabels: Record<string, Record<VisaType, string>> = {
  uae: {
    employment: "Employment Visa",
    golden: "Golden Visa (10-year)",
    family: "Family/Dependent Visa",
    freelancer: "Freelancer Visa",
  },
  qatar: {
    employment: "Work Visa",
    golden: "Permanent Residency",
    family: "Family/Dependent Visa",
    freelancer: "Self-Sponsored Visa",
  },
  saudi: {
    employment: "Work Visa (Iqama)",
    golden: "Premium Residency",
    family: "Family/Dependent Visa",
    freelancer: "Freelance License",
  },
};

const dependentLabels: Record<Dependents, string> = {
  "0": "No dependents",
  "1": "1 dependent",
  "2": "2 dependents",
  "3plus": "3+ dependents",
};

// Base visa costs (local currency) - one-time or annual
const visaCosts: Record<string, Record<VisaType, { base: number; annual: boolean; note: string }>> = {
  uae: {
    employment: { base: 4000, annual: false, note: "Typically employer-covered" },
    golden: { base: 3500, annual: false, note: "10-year renewable, self-sponsored" },
    family: { base: 3500, annual: false, note: "Per dependent" },
    freelancer: { base: 15000, annual: true, note: "Includes free zone license" },
  },
  qatar: {
    employment: { base: 2000, annual: false, note: "Employer bears cost by law" },
    golden: { base: 1500, annual: false, note: "Selective eligibility" },
    family: { base: 500, annual: false, note: "Per dependent, requires QAR 10,000 min salary" },
    freelancer: { base: 3000, annual: true, note: "Limited availability" },
  },
  saudi: {
    employment: { base: 4000, annual: false, note: "Employer bears cost by law" },
    golden: { base: 100000, annual: true, note: "Or SAR 800,000 one-time permanent" },
    family: { base: 500, annual: true, note: "Per dependent, requires SAR 4,000 min salary" },
    freelancer: { base: 5000, annual: true, note: "Freelance license through HRSD" },
  },
};

// Medical + Emirates ID / Iqama per person
const processingPerPerson: Record<string, number> = {
  uae: 800,
  qatar: 500,
  saudi: 600,
};

export default function VisaCostEstimator({ countryKey, currency }: Props) {
  const [visaType, setVisaType] = useState<VisaType>("employment");
  const [dependents, setDependents] = useState<Dependents>("0");

  const result = useMemo(() => {
    const visa = visaCosts[countryKey]?.[visaType];
    if (!visa) return { primary: 0, dependentsCost: 0, processing: 0, total: 0, note: "", isAnnual: false };
    const depCount = dependents === "3plus" ? 3 : parseInt(dependents);
    const primary = visa.base;
    const depVisa = visaType === "family" ? 0 : visaCosts[countryKey]?.family?.base ?? 0;
    const dependentsCost = depVisa * depCount;
    const proc = (processingPerPerson[countryKey] ?? 0) * (1 + depCount);
    const total = primary + dependentsCost + proc;
    return { primary, dependentsCost, processing: proc, total, note: visa.note, isAnnual: visa.annual };
  }, [countryKey, visaType, dependents]);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Visa Cost Estimator — {citiesMap[countryKey]}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Visa Type</label>
          <select value={visaType} onChange={(e) => setVisaType(e.target.value as VisaType)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(visaLabels[countryKey] || {}).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Dependents</label>
          <select value={dependents} onChange={(e) => setDependents(e.target.value as Dependents)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(dependentLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Primary visa{result.isAnnual ? " (annual)" : ""}</span>
          <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatWithEUR(result.primary, currency)}</span>
        </div>
        {result.dependentsCost > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Dependent visas</span>
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatWithEUR(result.dependentsCost, currency)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Processing (medical, ID, etc.)</span>
          <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatWithEUR(result.processing, currency)}</span>
        </div>
      </div>
      <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <p className="text-xs text-gray-500 dark:text-gray-400">Estimated total cost</p>
        <p className="text-lg font-bold text-teal-600 dark:text-teal-400 tabular-nums">{formatWithEUR(result.total, currency)}</p>
      </div>
      {result.note && <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">{result.note}. Actual costs may vary. Employment visa costs are typically borne by the employer.</p>}
    </div>
  );
}
