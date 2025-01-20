/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./**/*.html",
    "./src/**/*.{html,js,mjs}",
    "!./node_modules/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Ruslan Display", "serif"], // Display font for headings
        body: ["Inter", "sans-serif"],
      },

      colors: {

        background: {
          light: "#FFF9F2", // Light mode background
          dark: "#260201", // Dark mode background
        },

        brown: {
          100: "#FFF9F2", // Lightest 
          200: "#FDDCC3",
          300: "#EDB18C",
          400: "#C47650",
          500: "#73321A",
          600: "#601D0B",
          700: "#4D0F04",
          800: "#390702",
          900: "#260201", // Darkest
        },

        grey: {
          100: "#", // Lightest 
          200: "#",
          300: "#",
          400: "#",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1", // Darkest
        },

        text: {
          dark: "#260201", // Light theme
          medium: "601D0B", // Input text / captions
          light: "#FFF9F2",  // Dark theme
        },

        orange: {
          100: "#EFA443", // Yellow
          200: "#D94B18", // Dark theme
          300: "#C74516", // Light theme
        },

        green: {
          100: "#008C1C", // Dark theme
          200: "#005D2C", // Light theme
        },

        red: {
          100: "#E62800", // Dark theme
          200: "#9E1B14", // Light theme
        },
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'gradient-xy': 'gradient-xy 4s ease infinite'
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '100%': { opacity: '1' },
          '0%': { opacity: '0' },
        },

        'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
              },
      },

      

    },
  },
  darkMode: "selector",
  plugins: [],

};
