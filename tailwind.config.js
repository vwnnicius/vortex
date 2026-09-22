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
          950: '#050505', // Ultra dark background (void)
          900: '#0A0A0A', // Deep surface
          850: '#0E0E0E', // Surface card
          800: '#121212', // Surface elevated
          750: '#161616', // Subtle container
          700: '#1A1A1A', // Borders & separators
          600: '#262626', // Border hover & subtle highlights
          500: '#333333', // Muted borders
          400: '#525252', // Low contrast text
          300: '#737373', // Secondary text
          200: '#A0A0A0', // Muted highlight text
          100: '#D4D4D4', // Crisp body text
          50: '#FFFFFF',  // Pure high-contrast white
        },
        steel: {
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        crimson: {
          500: '#E11D48',
          600: '#BE123C',
          900: '#4C0519',
        }
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
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
