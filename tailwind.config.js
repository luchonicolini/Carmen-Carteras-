/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9C4C13', // Cuero tostado artesanal (WCAG AA 6:1)
        background: '#FAF9F7', // Soft cream
        'warm-sand': '#EFE9DF', // Fondo secundario artesanal
        'warm-sand-dark': '#EDE7DD',
        'beige-dark': '#EBE5D9',
        text: {
          dark: '#1a1a1a',
          medium: '#403d39',
          light: '#57534e'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '3xl': '30px',
      }
    },
  },
  plugins: [],
};
