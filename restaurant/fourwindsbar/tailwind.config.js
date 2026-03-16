/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(120, 53, 15, 0.05)',
        'md': '0 4px 6px -1px rgba(120, 53, 15, 0.1)',
        'lg': '0 10px 15px -3px rgba(120, 53, 15, 0.15)',
      },
    },
  },
  plugins: [],
}