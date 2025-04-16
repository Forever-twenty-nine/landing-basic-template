module.exports = {
    content: [
      './src/**/*.{astro,js,ts,jsx,tsx}',  // Rutas de archivos dentro del proyecto
      path.resolve(__dirname, '../astro-ui-lib/**/*.astro'), // Tu librería
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  