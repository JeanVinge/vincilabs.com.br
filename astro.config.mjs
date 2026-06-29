// @ts-check
import { defineConfig } from 'astro/config';

// Custom apex domain (vincilabs.com.br) is served from GitHub Pages.
// Because of the custom domain, `base` stays at '/' (no repo-name prefix).
export default defineConfig({
  site: 'https://vincilabs.com.br',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
