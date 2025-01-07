/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./**/*.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#",
          100: "#",
          200: "#",
          300: "#",
          400: "#",
          500: "#2196F3", // Default brand colour
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1", // Dark brand colour
        },
      },
    },
  },

  darkMode: "selector",
  plugins: [],
};

