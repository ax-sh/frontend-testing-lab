/// <reference types="vitest/config" />
import { defineConfig } from "vite";

// https://vite.dev/config/

import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), UnoCSS()],
  server: { port: 3000 },
  test: {
    // @ts-expect-error not a error just skipping weird type check
    global: true,
  },
});
