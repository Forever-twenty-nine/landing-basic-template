import type { Config } from 'tailwindcss';
import { join } from 'path'

import { config as siteConfig } from './src/config';

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx}',

    // RUTA HACIA TU LIBRERÍA DE COMPONENTES
    // Si está como paquete npm local:
    // './node_modules/astro-ui-lib/**/*.{astro,js,ts,jsx,tsx}',
    
    // O si está en forma de folder (desarrollo local con pnpm/yarn/npm link)
    join(__dirname, '../astro-ui-lib/components/**/*.{astro,js,ts,jsx,tsx}')
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

export default config
