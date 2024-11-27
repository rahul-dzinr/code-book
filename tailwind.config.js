/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E5B06E',
          dark: '#C99A5B',
        },
        secondary: {
          DEFAULT: '#2C3E50',
          dark: '#1A252F',
        },
        background: {
          light: '#F8F9FA',
          dark: '#121212',
        },
        text: {
          light: '#333333',
          dark: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

