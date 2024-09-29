/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#fdd3e7',
          200: '#fca8ce',
          300: '#fa7cb6',
          400: '#f9519d',
          500: '#f72585',
          600: '#c61e6a',
          700: '#941650',
          800: '#630f35',
          900: '#31071b',
        },
        secondary: {
          100: '#ccfdf6',
          200: '#99fbee',
          300: '#66f9e5',
          400: '#33f7dd',
          500: '#00f5d4',
          600: '#00c4aa',
          700: '#00937f',
          800: '#006255',
          900: '#00312a',
        },
      },
    },
  },
  plugins: [],
};
