/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07070A', // Abyssal dark background
          900: '#0D0B14', // Deep shadow surface
          850: '#131022', // Elevated dark violet surface
          800: '#1A162B', // Surface container
          750: '#231E38', // Border subtle
          700: '#2E274A', // Borders
          600: '#3D3461', // Border hover
          500: '#524682', // Muted borders
          400: '#7B6FA3', // Low contrast text
          300: '#A49AC4', // Secondary text
          200: '#C7BFE0', // Highlight text
          100: '#EDE9FE', // Crisp light text
          50: '#FFFFFF',  // Pure high-contrast white
        },
        omen: {
          950: '#0B0817',
          900: '#130E29',
          800: '#231545',
          700: '#3B1C74',
          600: '#5B21B6',
          500: '#7C3AED', // Primary Omen violet
          400: '#8B5CF6', // Lighter purple glow
          300: '#A78BFA', // Ethereal mist purple
          200: '#C4B5FD',
          100: '#DDD6FE',
        },
        steel: {
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace'
        ]
      },
      boxShadow: {
        'omen-glow': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'omen-intense': '0 0 45px rgba(124, 58, 237, 0.4)',
        'omen-card': '0 10px 30px -10px rgba(7, 7, 10, 0.9), 0 0 20px -5px rgba(139, 92, 246, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
