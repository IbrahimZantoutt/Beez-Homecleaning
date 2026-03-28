/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0D0D0D',
        gold: '#C9A84C',
        'gold-bright': '#F5C842',
        white: '#FAFAFA',
        cream: '#F9F5EC',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        hexFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.15' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)', opacity: '0.3' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hex-float': 'hexFloat 6s ease-in-out infinite',
        'hex-float-slow': 'hexFloat 9s ease-in-out infinite',
        'hex-float-fast': 'hexFloat 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
