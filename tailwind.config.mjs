/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        muted: "var(--text-muted)",
        'hero-bg': "var(--hero-bg)",
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

