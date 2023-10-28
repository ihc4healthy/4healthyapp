/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    colors: {
      //accentColor
      transparent: 'transparent',
      primary: {
        light:    '#fce978',
        DEFAULT:  '#fbd254',
        dark:     '#eca540',
        darkest:  '#b86a21',
        contrast: '#222b36',
      },
      secondary: {
        light:    '#00d9f4',
        DEFAULT:  '#009ed5',
        dark:     '#3b719f',
        darkest:  '#174177',
        contrast: '#222b36',
      },
      danger: {
        light:    '#E44E4E',
        DEFAULT:  '#DE2323',
        dark:     '#c21a1a',
        darkest:     '#810812',
        contrast: '#ffffff',
      },
      text: {
        primary: '#222b36',
        secondary: '#7a8291',
        disabled: '#c5c8cf',
        white: '#ffffff',
      },
      background: {
        back: '#fafbfc',
        paper: '#ffffff',
        disabled: '#e2e7ec',
      }
    },
    fontFamily: {
      headings: ['Poppins', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

