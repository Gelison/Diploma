/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        myimg: 'url(./assets/background/background.png)',
      },
      colors: {
        primary: '#7B61FF',
        primary2: '#917CFF',
        secondary: '#80858B',
        graphite: '#323537',
        dark: '#242426',
        black: '#000000',
        orange: '#F45D2D',
        yellow: '#F3A608',
        green: '#00A340',
      },
      fontFamily: {
        sans: ['"Exo 2"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
