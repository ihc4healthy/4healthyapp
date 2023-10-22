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
      primary: {
        light:  '#fce978',
        main:   '#fbd254',
        dark:   '#eca540',
        contrast: '#222b36',
      },
      secondary: {
        main:   '#00d9f4',
        light:  '#009ed5',
        dark:   '#3b719f',
        contrast: '#222b36',
      },
      text: {
        primary: '#222b36',
        secondary: '#7a8291',
        disabled: '#c5c8cf',
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

