/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         white: '#FFFFFF',
        'dark-blue': '#0E1A2E',
        'normal-blue': '#0F274F',
        'light-blue': '#2F58FF',
        'muted': '#445064'
      },
      animation: {
        wiggle: '1s cubic-bezier(0.47, 0, 0.745, 0.715) 3.36s both',
      }
    },
  },
  plugins: [],
}