module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF642F',
        primaryLight: '#FF865B',
        secondary: '#E3F1FF',
        black: '#000000',
        darkGray: '#7F7F7F',
        lightGray: '#E8E8E8',
        lightestGray: '#F9F9F9',
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'gradient-black':'radial-gradient(circle, rgba(238,238,238,1) 0%, rgba(0,0,0,0.42620798319327735) 100%)'
      }),
      textColor: theme =>({
        ...theme('colors')
      }),
      borderColor: theme =>({
        ...theme('colors')
      }),
      fontFamily: {
        'primary': ['PlayfairDisplay', 'serif'],
        'secondary': ['Inter', 'sans-serif']
      },
      fontSize: {
        'h1': '4.75rem',
        'h2': '3.75rem',
        'h3': '3.125rem',
        'h4': '2.813rem',
        'h5': '2.25rem',
        'h6': '1.875rem',
        'h7': '1.5rem',
        'h8': '1.25rem',
        'h9': '1.125rem',
        'h10': '1rem',
        'h11': '0.875rem',
        'h12': '0.75rem',
        'h13': '0.625rem',
      },
      lineHeight: {
        'extra-none': '0.3'
      },
       gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7' :'span 7 / span 7',
        'span-8' :'span 8 / span 8',
        'span-9' :'span 9 / span 9',
        'span-10' :'span 10 / span 10',
        'span-11' :'span 11 / span 11',
      },
      backgroundImage: theme =>({
        'table': "url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80')"
      }),
      width: {
        '200': '50rem'
      },
      height: {
        '200': '50rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
