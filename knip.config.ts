import type { KnipConfig } from "knip";

const config: KnipConfig = {
  eslint: {
    config: ["eslint.config.mjs"],
  },
  ignore: [".github/**/*", "vitest.config.ts", "public/mockServiceWorker.js"],
  ignoreBinaries: ["rimraf", "nr", "gh", "hygen", "biome"],
  storybook: true,
  vitest: { config: ["vitest/**/*.ts", "vitest.setup.ts"] },
  vite: { config: ["./**/vite.config.ts"] },
  entry: ["src/**/*.{js,ts}"],
  playwright: true,
  ignoreDependencies: [
    "uno.css",
    //     // Needed by eslint.
    //     // '@typescript-eslint/.*',
    //     "eslint-.*",
    //     "git-cliff",
    //     // 'is-ci',
    //     // '@release-it/conventional-changelog',
    //     // 'oxlint',
    //     // 'tsx',
  ],
};

export default config;
