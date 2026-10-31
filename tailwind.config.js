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
          surface: '#140804',
          surfaceHover: '#1c0c06',
          card: '#180a05',
          cardHover: '#220e07',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 74, 28, 0.35)',
          cream: '#efebe3',
          creammuted: '#d9d8ca',
          gray: '#9d9590',
          darkgray: '#2b1912',
          orange: '#ff4a1c',
          orangehover: '#e53e12',
          orangelight: '#ff6c45',
          yellow: '#f6e12b',
          yellowgold: '#e6c820',
          terracotta: '#a33a2b',
          brass: '#d4af37',
          copper: '#c86d41',
        }
      },
      fontFamily: {
        anton: ['"Anton"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"DM Mono"', 'monospace'],
        sans: ['"Inter"', '"Geist"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-foil': 'linear-gradient(135deg, #f6e12b 0%, #ff8c42 50%, #d4af37 100%)',
      }
    },
  },
  plugins: [],
}
