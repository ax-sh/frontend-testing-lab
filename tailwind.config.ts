import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },// @ts-ignore
  plugins: [ require('@tailwindcss/typography'),],
} satisfies Config;
