import js from "@eslint/js";
import unocss from "@unocss/eslint-config/flat";
import biome from "eslint-config-biome";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Config} */
const customFlatLinters = [
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
	...customFlatLinters,
);
