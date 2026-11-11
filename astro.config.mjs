import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://darmedia.ro',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Slug corectat („newsletttere” → „newslettere”). Vechea adresă rămâne funcțională prin redirect.
  redirects: {
    '/studiu-de-caz-newsletttere-ecommerce/': { status: 301, destination: '/studiu-de-caz-newslettere-ecommerce/' },
  },
  build: { inlineStylesheets: 'always' },
});
