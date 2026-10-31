/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bantoo: {
          dark: '#0d0401',
          darker: '#060200',
          surface: '#150a06',
          card: '#1b0e09',
          border: 'rgba(255, 255, 255, 0.1)',
          cream: '#efebe3',
          creammuted: '#d9d8ca',
          gray: '#9d9590',
          darkgray: '#322620',
          orange: '#ff4a1c',
          orangehover: '#e53e12',
          yellow: '#f6e12b',
          terracotta: '#a33a2b',
        }
      },
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"DM Mono"', 'monospace'],
        sans: ['"Inter"', '"Geist"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
