/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js}",
      // "./dist/index.html",
  ],
  theme: {
    screens: {
      'xxs': '320px', // 1
      'xs': '480px', // 1.5
      'sm': '640px', // 2
      'md': '768px', // 2.4
      'lg': '1024px', // 3.2
      'xl': '1280px', // 4
      '2xl': '1536px', // 4.8
    },
    extend: {
      fontFamily: {
        'sans': ['"Inter", sans-serif'],
      },
      fontSize: {
        // base: "3rem",
      },
      colors: {
        primary: {
          100: '#FFE4CC',
          200: '#FFCA99',
          300: '#FFB066',
          400: '#FF9640',
          500: '#DC5F00',
          600: '#B34700',
          700: '#8A3000',
          800: '#611900',
          900: '#390B00',
        },
      },
      padding: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
      },
      margin: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
      },
    }
  },
  plugins: [

  ],
}

