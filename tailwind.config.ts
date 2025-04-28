import type { Config } from 'tailwindcss';
import { config as siteConfig } from './src/config';

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx}', // Archivos dentro de src
    './src/styles/**/*.{css}', // Archivos CSS dentro de src
    './node_modules/@forever-twenty-nine/astro-ui-lib/components/**/*.{astro}',// Archivos de la librería
  ],
  theme: {
    extend: {
      colors: {
        primary: siteConfig.colors.primary,
        secondary: siteConfig.colors.secondary,
        accent: siteConfig.colors.accent,
        background: siteConfig.colors.background,
        text: siteConfig.colors.text
      }
    }
  },
  plugins: []
}

export default config;
