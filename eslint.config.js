import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: true,
        module: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
