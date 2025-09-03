import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'
// import favicons from 'astro-favicons';

export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    optimizeDeps: {
      exclude: [],
    },
  },
}); 