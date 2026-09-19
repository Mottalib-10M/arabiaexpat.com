/**
 * Snippet lengths (RECETTE-SITE.md §11): title 50–60 characters, description 150–160.
 * Templates pass a fixed start and a list of endings, best first; the first one that lands
 * in range wins (descriptions may also chain two endings). The build fails when none does, so a new profession or country can never
 * ship an out-of-range snippet unnoticed.
 */
export const TITLE_RANGE: [number, number] = [50, 60];
export const DESC_RANGE: [number, number] = [150, 160];

export function fit(start: string, endings: string[], [min, max]: [number, number], what: string, combine = false): string {
  const candidates = endings.map((e) => start + e);
  if (combine) for (const a of endings) for (const b of endings) if (a !== b) candidates.push(start + a + b);
  const hit = candidates.find((c) => c.length >= min && c.length <= max);
  if (!hit) throw new Error(`${what} out of ${min}–${max} characters: "${start}${endings[0]}" (${(start + endings[0]).length})`);
  return hit;
}

/** 8500 → "8.5k", 15000 → "15k", 950 → "950". */
export function kilo(n: number): string {
  if (n < 1000) return String(n);
  const k = Math.round(n / 100) / 10;
  return `${Number.isInteger(k) ? k : k.toFixed(1)}k`;
}

/** 12500 → "12,500". */
export function amount(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}
