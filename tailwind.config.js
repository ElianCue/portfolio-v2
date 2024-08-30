/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SUSE", 'sans-serif']
      },
      colors: {
        primary: '#4A90E2',     // Azul suave
        secondary: '#34495E',   // Azul oscuro
        background: '#1C1C1E',  // Negro grisáceo
        surface: '#2C2C2E',     // Gris oscuro
        accent: '#8E44AD',      // Púrpura suave
        'text-primary': '#E0E0E0',  // Blanco grisáceo
        'text-secondary': '#B0B0B0', // Gris claro
      },
    },
  plugins: [],
}};