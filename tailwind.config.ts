// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
