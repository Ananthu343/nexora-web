/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F3F2EE',
        ink: '#0A0A0A',
        'ink-text': '#16140F',
        terracotta: '#9A4F38',
        umber: '#2E1611',
        tan: '#C9B9A8',
        'stone-dark': '#3A3B3D',
        'stone-light': '#A3A6A6',
        violet: '#7C3AED',
        cyan: '#22D3EE',
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #7C3AED, #22D3EE)',
      }
    },
  },
  plugins: [],
}
