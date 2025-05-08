// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@forever-twenty-nine/astro-ui-lib'],
    },
    ssr: {
      noExternal: ['@forever-twenty-nine/astro-ui-lib'],
    }
  }
  ,
  site: 'https://github.com/Forever-twenty-nine',
  base: '/landing-basic-template/',
});

