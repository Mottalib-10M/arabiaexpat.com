export const saudiTax2026 = {
  personalIncomeTax: 0,
  gosi: {
    saudiEmployee: 0.0975,
    saudiEmployer: 0.1175,
    expatEmployee: 0,
    expatEmployer: 0.02,
  },
  corporateTax: 0.20,
  zakat: 0.025,
  vat: 0.15,
  notes: "No personal income tax. Saudi nationals pay 9.75% GOSI. Expats: employer pays 2% GOSI only. Corporate tax 20% on foreign-owned, Zakat 2.5% on Saudi-owned businesses.",
} as const;
