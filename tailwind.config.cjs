/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: {
        100: '#dfd4ed',
        200: '#dfd4ed',
        300: '#a07dca',
        400: '#8151b9',
        500: '#633B92',
        600: '#4f2f75',
        700: '#3b2358',
        800: '#28183a',
        900: '#140c1d',
      },
      grey: {
        100: '#FFFFFF',
        200: '#CDCDCD',
        300: '#9B9B9B',
        400: '#686868',
        500: '#363636',
        600: '#292929',
        700: '#1B1B1B',
        800: '#0E0E0E',
        900: '#000000',
      },
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      heading: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}
