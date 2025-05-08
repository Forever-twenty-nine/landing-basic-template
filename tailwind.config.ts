import type { Config } from 'tailwindcss';
import { config as siteConfig } from './src/config';

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx}', 
    './src/styles/**/*.{css}', 
    './node_modules/@forever-twenty-nine/astro-ui-lib/**/*.{astro,js,ts,jsx,tsx}',
    
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
