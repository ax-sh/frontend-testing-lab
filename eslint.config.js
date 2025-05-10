import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import unocss from "@unocss/eslint-config/flat";
import biome from "eslint-config-biome";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Config} */
const testLinterRules = {
  files: [
    /* glob matching your test files */
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  ...testingLibrary.configs["flat/react"],
  rules: {
    'testing-library/prefer-screen-queries': 'off',
  },
};

/** @type {import("eslint").Config} */
const customExtendedFlatLinters = [
  { ignores: ["public"] },
  biome,
  unocss,
  {
    // Inside your .eslintignore file
    ignores: ["!.storybook"],
  },
  ...storybook.configs["flat/recommended"],
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      // example of overriding a rule
      "storybook/hierarchy-separator": "error",
      // example of disabling a rule
      "storybook/default-exports": "off",
    },
  },
  ...pluginQuery.configs["flat/recommended"],
  {
    plugins: {
      "@tanstack/query": pluginQuery,
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error",
    },
  },
  testLinterRules,
];

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  ...customExtendedFlatLinters,
);
