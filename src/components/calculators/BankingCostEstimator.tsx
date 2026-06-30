import { useState, useMemo } from "react";
import { formatCurrency, formatEURPart } from "../../lib/format";

interface Props {
  countryKey: "uae" | "qatar" | "saudi";
  currency: string;
}

type AccountType = "basic" | "premium" | "digital";
type RemitFreq = "none" | "monthly" | "bimonthly" | "weekly";

const accountLabels: Record<AccountType, string> = {
  basic: "Basic Current Account",
  premium: "Premium/Priority Account",
  digital: "Digital-Only Bank",
};

const remitLabels: Record<RemitFreq, string> = {
  none: "No remittances",
  monthly: "Monthly (1x)",
  bimonthly: "Twice a month",
  weekly: "Weekly",
};

const citiesMap: Record<string, { slug: string; name: string }[]> = {
  uae: [{ slug: "dubai", name: "Dubai" }, { slug: "abu-dhabi", name: "Abu Dhabi" }],
  qatar: [{ slug: "doha", name: "Doha" }],
  saudi: [{ slug: "riyadh", name: "Riyadh" }, { slug: "jeddah", name: "Jeddah" }, { slug: "dammam", name: "Dammam" }],
};

// Monthly account fees (local currency)
const accountFees: Record<string, Record<AccountType, number>> = {
  dubai: { basic: 50, premium: 0, digital: 0 },
  "abu-dhabi": { basic: 50, premium: 0, digital: 0 },
  doha: { basic: 40, premium: 0, digital: 0 },
  riyadh: { basic: 25, premium: 0, digital: 0 },
  jeddah: { basic: 25, premium: 0, digital: 0 },
  dammam: { basic: 20, premium: 0, digital: 0 },
};

// Per-transfer cost for international remittance
const transferCost: Record<string, Record<AccountType, number>> = {
  dubai: { basic: 50, premium: 0, digital: 15 },
  "abu-dhabi": { basic: 50, premium: 0, digital: 15 },
  doha: { basic: 45, premium: 0, digital: 10 },
  riyadh: { basic: 35, premium: 0, digital: 10 },
  jeddah: { basic: 35, premium: 0, digital: 10 },
  dammam: { basic: 30, premium: 0, digital: 10 },
};

// Card annual fee
const cardFees: Record<string, Record<AccountType, number>> = {
  dubai: { basic: 300, premium: 0, digital: 0 },
  "abu-dhabi": { basic: 300, premium: 0, digital: 0 },
  doha: { basic: 250, premium: 0, digital: 0 },
  riyadh: { basic: 200, premium: 0, digital: 0 },
  jeddah: { basic: 200, premium: 0, digital: 0 },
  dammam: { basic: 180, premium: 0, digital: 0 },
};

const remitCount: Record<RemitFreq, number> = {
  none: 0,
  monthly: 1,
  bimonthly: 2,
  weekly: 4,
};

export default function BankingCostEstimator({ countryKey, currency }: Props) {
  const countryCities = citiesMap[countryKey] || [];
  const [citySlug, setCitySlug] = useState(countryCities[0]?.slug || "");
  const [account, setAccount] = useState<AccountType>("basic");
  const [remit, setRemit] = useState<RemitFreq>("monthly");

  const result = useMemo(() => {
    const monthlyFee = accountFees[citySlug]?.[account] ?? 0;
    const perTransfer = transferCost[citySlug]?.[account] ?? 0;
    const transfers = remitCount[remit];
    const monthlyTransferCost = perTransfer * transfers;
    const monthlyCardFee = Math.round((cardFees[citySlug]?.[account] ?? 0) / 12);
    const totalMonthly = monthlyFee + monthlyTransferCost + monthlyCardFee;
    const totalAnnual = totalMonthly * 12;
    return { monthlyFee, monthlyTransferCost, monthlyCardFee, totalMonthly, totalAnnual };
  }, [citySlug, account, remit]);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Banking Cost Estimator</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">City</label>
          <select value={citySlug} onChange={(e) => setCitySlug(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {countryCities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Account Type</label>
          <select value={account} onChange={(e) => setAccount(e.target.value as AccountType)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(accountLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Remittance Frequency</label>
          <select value={remit} onChange={(e) => setRemit(e.target.value as RemitFreq)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(remitLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Account maintenance</span>
          <span className="text-right shrink-0 ml-2">
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{result.monthlyFee === 0 ? "Free" : formatCurrency(result.monthlyFee, currency)}</span>
            {result.monthlyFee > 0 && <span className="block text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.monthlyFee, currency)}</span>}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Transfer fees</span>
          <span className="text-right shrink-0 ml-2">
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{result.monthlyTransferCost === 0 ? "Free" : formatCurrency(result.monthlyTransferCost, currency)}</span>
            {result.monthlyTransferCost > 0 && <span className="block text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.monthlyTransferCost, currency)}</span>}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Card fee (monthly equiv.)</span>
          <span className="text-right shrink-0 ml-2">
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{result.monthlyCardFee === 0 ? "Free" : formatCurrency(result.monthlyCardFee, currency)}</span>
            {result.monthlyCardFee > 0 && <span className="block text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.monthlyCardFee, currency)}</span>}
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg gap-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total monthly banking cost</p>
          <p className="text-lg font-bold text-teal-600 dark:text-teal-400 tabular-nums">{result.totalMonthly === 0 ? "Free" : formatCurrency(result.totalMonthly, currency)}</p>
          {result.totalMonthly > 0 && <p className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.totalMonthly, currency)}</p>}
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">Annual total</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{result.totalAnnual === 0 ? "Free" : formatCurrency(result.totalAnnual, currency)}</p>
          {result.totalAnnual > 0 && <p className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">{formatEURPart(result.totalAnnual, currency)}</p>}
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">Premium accounts waive most fees with minimum balance requirements. Digital banks typically have zero fees. Transfer costs are for bank wire; exchange houses may be cheaper.</p>
    </div>
  );
}
