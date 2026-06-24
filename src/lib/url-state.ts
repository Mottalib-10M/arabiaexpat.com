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

export function updateURL(params: Record<string, string | number | boolean>): void {
  if (typeof window === "undefined") return;
  const encoded = encodeState(params);
  const newUrl = `${window.location.pathname}${encoded ? "?" + encoded : ""}`;
  window.history.replaceState(null, "", newUrl);
}
