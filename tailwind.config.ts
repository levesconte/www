import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--font-noto-sans-math)"],
        reader: ["var(--font-newsreader)"],
        baskervville: ["var(--font-baskervville)"],
      },
      colors: {
        background: "hsl(var(--background))",
        primary: {
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
