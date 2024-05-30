import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "commonjs", 
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    rules: {
      'no-console': 0,
      'no-undef': 0
    },
  },
  {
    ignores: ["dist/*"],
  },
  pluginJs.configs.recommended,
];