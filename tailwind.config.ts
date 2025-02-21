import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF0F3",  // Light pink background
        primary: "#FF2E63",     // Dark pink accent
        secondary: "#252A34",   // Dark shade for text
        accent: "#FF2E63",      // Same as primary for consistency
      },
    },
  },
  plugins: [],
};

export default config;