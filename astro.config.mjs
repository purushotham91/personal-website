import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://purusirasapalli.com",

  // One request per page: CSS is inlined, no client JS ships.
  build: {
    inlineStylesheets: "always",
  },

  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },

  integrations: [sitemap()],
});
