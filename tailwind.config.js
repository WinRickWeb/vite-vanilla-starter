/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,ejs}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        primary: {
          DEFAULT: '#ffffff',
          content: '#ffffff',
          focus: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ffffff',
          content: '#ffffff',
          focus: '#ffffff',
        },
        accent: {
          DEFAULT: '#ffffff',
          content: '#ffffff',
          focus: '#ffffff',
        },
        base: {
          content: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
        },

        fontFamily: {
          'yekanBakh': ['yekanBakh'],
        },
        
      }
    },
  },
  plugins: [],
}

