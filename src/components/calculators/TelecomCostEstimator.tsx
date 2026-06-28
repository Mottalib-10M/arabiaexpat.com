import { useState, useMemo } from "react";
import { formatWithEUR } from "../../lib/format";

interface Props {
  countryKey: "uae" | "qatar" | "saudi";
  currency: string;
}

type PlanType = "prepaid" | "postpaid";
type DataNeeds = "light" | "moderate" | "heavy";
type HomeInternet = "none" | "basic" | "fast" | "premium";

const dataLabels: Record<DataNeeds, string> = {
  light: "Light (5-10 GB)",
  moderate: "Moderate (20-50 GB)",
  heavy: "Heavy (Unlimited)",
};

const internetLabels: Record<HomeInternet, string> = {
  none: "No home internet",
  basic: "Basic (50-100 Mbps)",
  fast: "Fast (250-500 Mbps)",
  premium: "Premium (1 Gbps+)",
};

const citiesMap: Record<string, { slug: string; name: string }[]> = {
  uae: [{ slug: "dubai", name: "Dubai" }, { slug: "abu-dhabi", name: "Abu Dhabi" }],
  qatar: [{ slug: "doha", name: "Doha" }],
  saudi: [{ slug: "riyadh", name: "Riyadh" }, { slug: "jeddah", name: "Jeddah" }, { slug: "dammam", name: "Dammam" }],
};

// Monthly mobile costs (local currency)
const mobileCosts: Record<string, Record<PlanType, Record<DataNeeds, number>>> = {
  dubai: {
    prepaid: { light: 55, moderate: 110, heavy: 210 },
    postpaid: { light: 175, moderate: 250, heavy: 400 },
  },
  "abu-dhabi": {
    prepaid: { light: 55, moderate: 110, heavy: 210 },
    postpaid: { light: 175, moderate: 250, heavy: 400 },
  },
  doha: {
    prepaid: { light: 50, moderate: 100, heavy: 200 },
    postpaid: { light: 175, moderate: 250, heavy: 400 },
  },
  riyadh: {
    prepaid: { light: 30, moderate: 75, heavy: 150 },
    postpaid: { light: 120, moderate: 200, heavy: 350 },
  },
  jeddah: {
    prepaid: { light: 30, moderate: 75, heavy: 150 },
    postpaid: { light: 120, moderate: 200, heavy: 350 },
  },
  dammam: {
    prepaid: { light: 25, moderate: 65, heavy: 140 },
    postpaid: { light: 110, moderate: 180, heavy: 320 },
  },
};

// Monthly home internet costs (local currency)
const internetCosts: Record<string, Record<Exclude<HomeInternet, "none">, number>> = {
  dubai: { basic: 299, fast: 399, premium: 549 },
  "abu-dhabi": { basic: 299, fast: 399, premium: 549 },
  doha: { basic: 249, fast: 350, premium: 500 },
  riyadh: { basic: 230, fast: 345, premium: 575 },
  jeddah: { basic: 230, fast: 345, premium: 575 },
  dammam: { basic: 200, fast: 300, premium: 500 },
};

// VoIP add-on cost (UAE only)
const voipAddon: Record<string, number> = {
  dubai: 50,
  "abu-dhabi": 50,
  doha: 0,
  riyadh: 0,
  jeddah: 0,
  dammam: 0,
};

export default function TelecomCostEstimator({ countryKey, currency }: Props) {
  const countryCities = citiesMap[countryKey] || [];
  const [citySlug, setCitySlug] = useState(countryCities[0]?.slug || "");
  const [planType, setPlanType] = useState<PlanType>("postpaid");
  const [data, setData] = useState<DataNeeds>("moderate");
  const [internet, setInternet] = useState<HomeInternet>("fast");

  const result = useMemo(() => {
    const mobile = mobileCosts[citySlug]?.[planType]?.[data] ?? 0;
    const home = internet === "none" ? 0 : (internetCosts[citySlug]?.[internet] ?? 0);
    const voip = voipAddon[citySlug] ?? 0;
    const total = mobile + home + voip;
    return { mobile, home, voip, total };
  }, [citySlug, planType, data, internet]);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Telecom Cost Estimator</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">City</label>
          <select value={citySlug} onChange={(e) => setCitySlug(e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {countryCities.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Mobile Plan</label>
          <select value={planType} onChange={(e) => setPlanType(e.target.value as PlanType)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            <option value="prepaid">Prepaid</option>
            <option value="postpaid">Postpaid</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Data Usage</label>
          <select value={data} onChange={(e) => setData(e.target.value as DataNeeds)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(dataLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Home Internet</label>
          <select value={internet} onChange={(e) => setInternet(e.target.value as HomeInternet)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
            {Object.entries(internetLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Mobile plan</span>
          <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatWithEUR(result.mobile, currency)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Home internet</span>
          <span className="tabular-nums font-medium text-gray-900 dark:text-white">{result.home === 0 ? "—" : formatWithEUR(result.home, currency)}</span>
        </div>
        {result.voip > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">VoIP add-on (BOTIM)</span>
            <span className="tabular-nums font-medium text-gray-900 dark:text-white">{formatWithEUR(result.voip, currency)}</span>
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total monthly telecom</p>
          <p className="text-lg font-bold text-teal-600 dark:text-teal-400 tabular-nums">{formatWithEUR(result.total, currency)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 dark:text-gray-400">Annual total</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{formatWithEUR(result.total * 12, currency)}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">{countryKey === "uae" ? "UAE blocks free VoIP calls. BOTIM add-on (AED 50/mo) is included for internet calling." : "WhatsApp and VoIP calls work freely — no add-on needed."}</p>
    </div>
  );
}
