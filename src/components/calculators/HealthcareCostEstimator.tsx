import { useState, useMemo } from "react";
import { formatCurrency, formatEURPart } from "../../lib/format";

interface Props {
  countryKey: "uae" | "qatar" | "saudi";
  currency: string;
}

type CoverTier = "basic" | "enhanced" | "premium";
type FamilySize = "single" | "couple" | "family3" | "family4plus";

const tierLabels: Record<CoverTier, string> = {
  basic: "Basic (employer plan)",
  enhanced: "Enhanced (co-pay)",
  premium: "Premium (private)",
};

const familyLabels: Record<FamilySize, string> = {
  single: "Single",
  couple: "Couple",
  family3: "Family (1 child)",
  family4plus: "Family (2+ children)",
};

const citiesMap: Record<string, { slug: string; name: string }[]> = {
  uae: [{ slug: "dubai", name: "Dubai" }, { slug: "abu-dhabi", name: "Abu Dhabi" }],
  qatar: [{ slug: "doha", name: "Doha" }],
  saudi: [{ slug: "riyadh", name: "Riyadh" }, { slug: "jeddah", name: "Jeddah" }, { slug: "dammam", name: "Dammam" }],
};

// Annual insurance premiums per person (local currency)
const premiums: Record<string, Record<CoverTier, number>> = {
  dubai: { basic: 0, enhanced: 4500, premium: 12000 },
  "abu-dhabi": { basic: 0, enhanced: 4000, premium: 10000 },
  doha: { basic: 0, enhanced: 3500, premium: 9000 },
  riyadh: { basic: 0, enhanced: 3000, premium: 8000 },
  jeddah: { basic: 0, enhanced: 2800, premium: 7500 },
  dammam: { basic: 0, enhanced: 2500, premium: 7000 },
};

// Typical monthly out-of-pocket (copays, meds, dental) per person
const monthlyOOP: Record<string, Record<CoverTier, number>> = {
  dubai: { basic: 250, enhanced: 150, premium: 50 },
  "abu-dhabi": { basic: 200, enhanced: 120, premium: 40 },
  doha: { basic: 180, enhanced: 100, premium: 30 },
  riyadh: { basic: 150, enhanced: 80, premium: 25 },
  jeddah: { basic: 140, enhanced: 75, premium: 25 },
  dammam: { basic: 130, enhanced: 70, premium: 20 },
};

const familyMultiplier: Record<FamilySize, number> = {
  single: 1,
  couple: 2,
  family3: 2.8,
  family4plus: 3.5,
};

export default function HealthcareCostEstimator({ countryKey, currency }: Props) {
  const countryCities = citiesMap[countryKey] || [];
  const [citySlug, setCitySlug] = useState(countryCities[0]?.slug || "");
  const [tier, setTier] = useState<CoverTier>("enhanced");
  const [family, setFamily] = useState<FamilySize>("single");

  const result = useMemo(() => {
    const mult = familyMultiplier[family];
    const annualPremium = Math.round((premiums[citySlug]?.[tier] ?? 0) * mult);
    const monthlyOutOfPocket = Math.round((monthlyOOP[citySlug]?.[tier] ?? 0) * mult);
    const totalMonthly = Math.round(annualPremium / 12) + monthlyOutOfPocket;
    const totalAnnual = annualPremium + monthlyOutOfPocket * 12;
    return { annualPremium, monthlyOutOfPocket, totalMonthly, totalAnnual };
  }, [citySlug, tier, family]);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Healthcare Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">City</label>
          <select value={citySlug} onChange={(e) => setCitySlug(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {countryCities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Coverage Tier</label>
          <select value={tier} onChange={(e) => setTier(e.target.value as CoverTier)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(tierLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Family Size</label>
          <select value={family} onChange={(e) => setFamily(e.target.value as FamilySize)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(familyLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Annual insurance premium</span>
          <span className="text-right shrink-0 ml-2">
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{result.annualPremium === 0 ? "Employer-covered" : formatCurrency(result.annualPremium, currency) + "/yr"}</span>
            {result.annualPremium > 0 && <span className="block text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.annualPremium, currency)}</span>}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Monthly out-of-pocket (copays, meds)</span>
          <span className="text-right shrink-0 ml-2">
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatCurrency(result.monthlyOutOfPocket, currency)}</span>
            <span className="block text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.monthlyOutOfPocket, currency)}</span>
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg gap-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total monthly healthcare</p>
          <p className="text-lg font-bold text-teal-600 dark:text-teal-400 tabular-nums">{formatCurrency(result.totalMonthly, currency)}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.totalMonthly, currency)}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">Annual total</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{formatCurrency(result.totalAnnual, currency)}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.totalAnnual, currency)}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Basic tier assumes employer-provided insurance. Enhanced and premium tiers include private insurance upgrade costs. Out-of-pocket covers copays, dental, and pharmacy.</p>
    </div>
  );
}
