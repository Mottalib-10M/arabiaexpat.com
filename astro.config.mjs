import { defineConfig } from "astro/config";
import trustKit from "./src/integrations/trust-kit.mjs";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://arabiaexpat.com",
  trailingSlash: "always",
  integrations: [
    trustKit({ lang: 'en', siteUrl: 'https://arabiaexpat.com', siteName: 'Arabia Expat', founded: '2026-06-24', about: '/about/', method: '/methodology/',
               disclaimer: 'Relocation budgets and visa steps are guidance: entry and residence decisions belong to ICP, GDRFA, the Qatar Ministry of Interior or Jawazat, and fees change without notice.' }),
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/uae/": "/uae/guide/",
    "/qatar/": "/qatar/guide/",
    "/saudi-arabia/": "/saudi-arabia/guide/",
    "/uae/visa-guide/": "/uae/visa/",
    "/qatar/visa-guide/": "/qatar/visa/",
    "/saudi-arabia/visa-guide/": "/saudi-arabia/visa/",
  },
});
