import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        muted: "var(--text-muted)",
        "hero-bg": "var(--hero-bg)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        display: ["Playfair Display", "serif"],
        sans: ["Outfit", "sans-serif"],
      },
      animation: {
        reveal: "reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "hero-pulse": "blackDominantPulse 10s ease-in-out infinite alternate",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blackDominantPulse: {
          "0%, 70%": { backgroundColor: "#343a40" },
          "85%, 100%": { backgroundColor: "#ffffff" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
