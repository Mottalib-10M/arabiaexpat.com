import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://arabiaexpat.com",
  trailingSlash: "always",
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/uae/visa-guide/": "/uae/visa/",
    "/qatar/visa-guide/": "/qatar/visa/",
    "/saudi-arabia/visa-guide/": "/saudi-arabia/visa/",
  },
});
