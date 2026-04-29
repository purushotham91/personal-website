import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://purusirasapalli.com",

  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },

  integrations: [sitemap()],
});