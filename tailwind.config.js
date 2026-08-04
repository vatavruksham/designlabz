/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f43f5e',
          light: '#fb7185',
          dark: '#be123c',
        },
        secondary: {
          DEFAULT: '#fb923c',
          light: '#fdba74',
          dark: '#c2610a',
        },
        surface: {
          DEFAULT: '#fdf6f5',
          50: '#fdf6f5',
          100: '#faedec',
          200: '#f3dfdd',
          300: '#e8ccc9',
        },
        ink: {
          DEFAULT: '#28181a',
          soft: '#5c4143',
          muted: '#8f7476',
        },
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        sans: ['Karla', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 12px 32px rgba(244,63,94,0.10)',
        'card-hover': '0 10px 40px rgba(244,63,94,0.18)',
        glow: '0 0 28px rgba(244,63,94,0.38)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'slide-deck': 'slideDeck 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(244,63,94,0.32)' },
          '50%': { boxShadow: '0 0 32px rgba(244,63,94,0.58)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDeck: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
