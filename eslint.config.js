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
<<<<<<< HEAD
];



=======
];
>>>>>>> parent of ab82f9e (fix(scripts): fixed scripts, deleted output, added tailwind/vite plugin)
