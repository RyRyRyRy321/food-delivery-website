/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      green: {
        100: '#3BC14A',
        200: '#4DA167',
        300: '4E6E5D',
      },

      black: {
        100: '#2D3047',
        200: '#000000'
      },

      white: {
        100: '#ffffff'
      },

      red: {
        100: '#DA1000'
      },

      yellow: {
        100: '#FFC107'
      },

      gray: {
        100: "#E5E5E5"
      }

    },
    extend: {},
  },
  plugins: [],
}

