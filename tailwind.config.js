/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1c1c1c',
        light: '#f5f5f5',
        brown: '#5c3a21',
        orange: {
          DEFAULT: '#e86e1b',
          dark: '#c4560f',
        },
        gray: '#7a7a7a',
        teal: '#40777a',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
