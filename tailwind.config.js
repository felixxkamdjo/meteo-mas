/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // dit à Tailwind où scanner les classes utilitaires
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",    // bleu principal
        secondary: "#9333EA",  // violet secondaire
        accent: "#F59E0B",     // orange d'accentuation
        dark: "#111827",       // gris foncé
        light: "#F3F4F6",      // gris clair
      },
      spacing: {
        '128': '32rem',       // exemple de taille custom
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}