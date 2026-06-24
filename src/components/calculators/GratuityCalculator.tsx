import { useState, useCallback, useMemo } from "react";
import { calculateGratuity, type Country, type ContractType, type TerminationType, type GratuityResult } from "../../lib/gratuity-engine";
import { formatCurrencyDetailed } from "../../lib/format";
import { updateURL } from "../../lib/url-state";

interface Props {
  country: Country;
  currency: string;
  countryName: string;
}

export default function GratuityCalculator({ country, currency, countryName }: Props) {
  const [basicSalary, setBasicSalary] = useState<string>("");
  const [yearsOfService, setYearsOfService] = useState<string>("");
  const [contractType, setContractType] = useState<ContractType>("limited");
  const [terminationType, setTerminationType] = useState<TerminationType>("employer");

  const result: GratuityResult | null = useMemo(() => {
    const salary = parseFloat(basicSalary);
    const years = parseFloat(yearsOfService);
    if (!salary || salary <= 0 || !years || years <= 0) return null;
    return calculateGratuity({
      country,
      basicSalary: salary,
      yearsOfService: years,
      contractType,
      terminationType,
    });
  }, [basicSalary, yearsOfService, contractType, terminationType, country]);

  const handleCalculate = useCallback(() => {
    updateURL({
      salary: basicSalary,
      years: yearsOfService,
      contract: contractType,
      termination: terminationType,
    });
  }, [basicSalary, yearsOfService, contractType, terminationType]);

  const maxBar = result ? Math.max(result.grossGratuity, 1) : 1;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          {countryName} Gratuity Calculator 2026
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Basic Monthly Salary ({currency})
            </label>
            <input
              type="text" inputMode="decimal"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              onBlur={(e) => { const v = parseFloat(e.target.value); if (!isNaN(v)) setBasicSalary(String(v)); }}
              placeholder="e.g. 15000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 tabular-nums"
              min="0"
              step="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Years of Service
            </label>
            <input
              type="text" inputMode="decimal"
              value={yearsOfService}
              onChange={(e) => setYearsOfService(e.target.value)}
              onBlur={(e) => { const v = parseFloat(e.target.value); if (!isNaN(v)) setYearsOfService(String(v)); }}
              placeholder="e.g. 5"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 tabular-nums"
              min="0"
              step="0.5"
              max="50"
            />
          </div>

          {country === "uae" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Contract Type
              </label>
              <select
                value={contractType}
                onChange={(e) => setContractType(e.target.value as ContractType)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="limited">Limited (Fixed Term)</option>
                <option value="unlimited">Unlimited (Pre-2022)</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Reason for Leaving
            </label>
            <select
              value={terminationType}
              onChange={(e) => setTerminationType(e.target.value as TerminationType)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="employer">Employer Termination / End of Contract</option>
              <option value="resignation">Resignation</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="mt-4 w-full sm:w-auto px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        >
          Calculate Gratuity
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Your Estimated Gratuity</p>
            <p className="text-4xl font-bold text-teal-600 dark:text-teal-400 tabular-nums">
              {formatCurrencyDetailed(result.totalGratuity, currency)}
            </p>
            {result.penalty > 0 && (
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                Resignation deduction: {formatCurrencyDetailed(result.penalty, currency)} ({Math.round(result.penaltyRate * 100)}%)
              </p>
            )}
          </div>

          {/* Breakdown Bar */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Calculation Breakdown</h3>
            {result.breakdown.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white tabular-nums">
                    {formatCurrencyDetailed(item.amount, currency)}
                  </span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 rounded-full transition-all duration-500"
                    style={{ width: `${(item.amount / maxBar) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Detail Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-50 dark:bg-teal-900/20">
                  <th className="px-4 py-2 text-left font-semibold text-teal-800 dark:text-teal-300 rounded-tl-lg">Item</th>
                  <th className="px-4 py-2 text-right font-semibold text-teal-800 dark:text-teal-300 rounded-tr-lg">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-400">Gross Gratuity</td>
                  <td className="px-4 py-2 text-right font-medium text-gray-900 dark:text-white tabular-nums">
                    {formatCurrencyDetailed(result.grossGratuity, currency)}
                  </td>
                </tr>
                {result.penalty > 0 && (
                  <tr>
                    <td className="px-4 py-2 text-red-600 dark:text-red-400">Resignation Deduction</td>
                    <td className="px-4 py-2 text-right font-medium text-red-600 dark:text-red-400 tabular-nums">
                      -{formatCurrencyDetailed(result.penalty, currency)}
                    </td>
                  </tr>
                )}
                <tr className="font-bold">
                  <td className="px-4 py-2 text-gray-900 dark:text-white">Net Gratuity Payable</td>
                  <td className="px-4 py-2 text-right text-teal-600 dark:text-teal-400 tabular-nums">
                    {formatCurrencyDetailed(result.totalGratuity, currency)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
            <p><strong>Formula:</strong> {result.formula}</p>
            {result.notes.map((note, i) => (
              <p key={i}>{note}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
