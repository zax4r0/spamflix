const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'header-img': "url('/static/images/logo/header.jpg')",
        'cover1-img': "url('/static/images/cover/cover-1.jpg')",
        'cover2-img': "url('/static/images/cover/cover-2.jpg')",
        'cover3-img': "url('/static/images/cover/cover-3.jpg')",
        'cover4-img': "url('/static/images/cover/cover-4.jpg')",
        'livesport-img': "url('/static/images/logo/live-sports.jpg')",
        'livesport-small': "url('/static/images/logo/live-sports-small.jpg')",
        'network-logo': "url('/static/images/logo/network-logo-bg.jpg')",
      }),
      padding: { 'fluid-video': '56.25%' },
      colors: {
        'hulu-green': '#00ed82',
        'live-section': '#151516',
        ...colors,
      },
      width: {
        300: '300px',
        250: '250px',
        270: '270px',
        200: '200px',
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
        180: '180px',
        500: '500px',
        530: '530px',
        800: '800px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      inset: {
        160: '160px',
        100: '100px',
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
        550: '550px',
        1100: '1100px',
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem',
      },
      screens: {
        '3xl': '2000px',
      },
      fontSize: {
        55: '55rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px',
      },
      backgroundSize: {
        full: '100%',
      },
    },
    dracula: {
      bg: '#282A36',
      currentline: '#44475a',
      red: '#ff5555',
      green: '#50fa7b',
      orange: '#ffb86c',
      pink: '#ff79c6',
      purple: '#bd93f9',
      cyan: '#8be9fd',
      yellow: '	#f1fa8c',
      comment: '#6272a4',
      fg: '#f8f8f2',
      selection: '#44475a',
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [
    require('tailwind-scrollbar-hide', '@tailwindcss/forms'),
    plugin(function ({ addComponents, theme }) {
      const screens = theme('screens', {})
      addComponents([
        {
          '.container': { width: '100%' },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            '.container': {
              'max-width': '640px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            '.container': {
              'max-width': '768px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            '.container': {
              'max-width': '1024px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            '.container': {
              'max-width': '1280px',
            },
          },
        },
        {
          [`@media (min-width: ${screens['2xl']})`]: {
            '.container': {
              'max-width': '1280px',
            },
          },
        },
      ])
    }),
  ],
}
