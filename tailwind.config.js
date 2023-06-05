/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'primary-tomato': 'hsl(4, 100%, 67%)',
        'neutral-dark-slate-grey': 'hsl(234, 29%, 20%)',
        'neutral-charcoal-grey': 'hsl(235, 18%, 26%)',
        'neutral-grey': 'hsl(231, 7%, 60%)',
        'neutral-white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'roboto-bold': 'Roboto-Bold, sans-serif',
        'roboto-regular': 'Roboto-Regular, sans-serif'
      }
    },
  },
  plugins: [],
}

