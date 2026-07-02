/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
        hand: ['"Caveat"', 'cursive'],
      },
      colors: {
        brand: {
          terracotta: '#C35A3B',
          sage: '#9BA58B',
          kraft: '#D2AD81',
          yellow: '#FBD85D',
          bg: '#F9F8F6',
          ink: '#1A1A1A',
          text: '#1A1A1A',
          // alias rétro-compatibles avec l'ancien markup
          rose: '#C35A3B',
          roseLight: '#F0D8CD',
          green: '#9BA58B',
          greenLight: '#E4E7DC',
        },
      },
    },
  },
  plugins: [],
}
