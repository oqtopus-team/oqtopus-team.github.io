// @ts-check
import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://oqtopus-team.github.io/',
  integrations: [
    lottie(),
    react()
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: 
          '@use "/src/styles/_mixin.scss" as m; \
          @use "/src/styles/_var.scss" as var;',
        },
      },
    }
  }
});
