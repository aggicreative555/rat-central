module.exports = {
  extends: ["eslint:recommended", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off", // If you use custom CSS classes
  },
  settings: {
    tailwindcss: {
      config: "./tailwind.config.js", // Path to your Tailwind config
    },
  },
};
