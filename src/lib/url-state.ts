export function encodeState(params: Record<string, string | number | boolean>): string {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  }
  return searchParams.toString();
}

export function decodeState(search: string): Record<string, string> {
  const params = new URLSearchParams(search);
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

// The address bar stays exactly the page URL (sitemap, canonical, trailing slash) until the
// visitor does something: calculators call updateURL from effects that also run on mount.
// RECETTE-SITE.md §18.1, check-url-propre.mjs.
let interacted = false;
if (typeof window !== "undefined") {
  const mark = () => { interacted = true; };
  for (const t of ["input", "change", "click", "keydown"]) document.addEventListener(t, mark, { once: true, capture: true });
}

export function updateURL(params: Record<string, string | number | boolean>): void {
  if (typeof window === "undefined" || !interacted) return;
  const encoded = encodeState(params);
  const newUrl = `${window.location.pathname}${encoded ? "?" + encoded : ""}`;
  History.prototype.replaceState.call(window.history, null, "", newUrl);
}
