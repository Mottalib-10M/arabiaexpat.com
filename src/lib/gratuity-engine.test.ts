/**
 * UAE gratuity, Federal Decree-Law No. 33 of 2021, Art. 51 :
 * 21 days of basic wage per year for the first five years, 30 days per year after,
 * entitlement only after one year of continuous service, capped at two years of wage.
 * Source : https://assets.u.ae/api/public/content/eb65a60bbff949fa912eddd566613014 (texte relu le 2026-10-31).
 * Cas d'après l'audit de Sami du 2026-10-28.
 */
import { describe, it, expect } from "vitest";
import { calculateGratuity } from "./gratuity-engine";

const uae = (basicSalary: number, yearsOfService: number) =>
  calculateGratuity({ country: "uae", basicSalary, yearsOfService, contractType: "limited", terminationType: "employer" }).totalGratuity;

describe("UAE gratuity (Decree-Law 33/2021, Art. 51)", () => {
  it("nothing before one year of continuous service", () => {
    expect(uae(12_000, 0.5)).toBe(0);
    expect(uae(12_000, 0.99)).toBe(0);
  });
  it("21 days per year for the first five years", () => {
    expect(uae(12_000, 1)).toBe(8_400);
    expect(uae(12_000, 3)).toBe(25_200);
    expect(uae(10_000, 3)).toBe(21_000);
  });
  it("30 days per year after five years", () => {
    expect(uae(12_000, 7.5)).toBe(72_000);
    expect(uae(15_000, 10)).toBe(127_500);
  });
  it("cap of 24 months reached only at 25.5 years", () => {
    expect(uae(15_000, 25)).toBe(15_000 / 30 * (105 + 30 * 20));
    expect(uae(15_000, 25.5)).toBe(360_000);
    expect(uae(15_000, 40)).toBe(360_000);
  });
});

describe("UAE gratuity: no reduction on resignation (Decree-Law 33/2021, Art. 51)", () => {
  const calc = (contractType: "limited" | "unlimited", terminationType: "employer" | "resignation", years: number) =>
    calculateGratuity({ country: "uae", basicSalary: 12_000, yearsOfService: years, contractType, terminationType });
  it("resignation pays the same as termination, whatever the former contract type", () => {
    for (const years of [1, 2, 3, 4.5, 7.5]) {
      const reference = calc("limited", "employer", years).totalGratuity;
      expect(calc("unlimited", "resignation", years).totalGratuity).toBe(reference);
      expect(calc("limited", "resignation", years).totalGratuity).toBe(reference);
      expect(calc("unlimited", "resignation", years).penalty).toBe(0);
    }
  });
  it("12 000 AED, 2 years, resignation from a former unlimited contract: 16 800", () => {
    expect(calc("unlimited", "resignation", 2).totalGratuity).toBe(16_800);
  });
  it("still nothing before one year, even on resignation", () => {
    expect(calc("unlimited", "resignation", 0.5).totalGratuity).toBe(0);
  });
});
