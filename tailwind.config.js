/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'rotate-45',
    '-rotate-45',
    'absolute',
    'h-56'
  ],
  theme: {
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fonts: {
      sans: [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Alfa Slab One',
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    fontSize: {
      'xs': '.80rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1.5xl': '1.2rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': '1.975rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
       '5.5xl':'3.2rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '15xl': '10rem',
    },
  
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'white',
      'transparent':'transparent',
      'black':'black',
      'red':'red',
      'mono': '#dc2626',
      'wind':  '#27272A',
      'leaf': '#a3e635',
      'grade': '#ff001f',
      'offwhite':'#D4D4D8',
      'offgreen'  :'#00cba9',
       'airblack' :'#1D1D1E',
      'lilac' : '#A02279',
       'boxwind': '#D8D8D8',
       'boxwind2': '#E9E9E9',
      'darkwind' : '#242424',
      'darkwhite': '#292929',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '56px',
         '5.5': '45px',
         '7': '70px',
         '7.5': '94px',
         '8': '197px',
         '9': '150px',
        '20': '260px',
        '21': '290px',
        '18': '170px',
      },
    extend: {
      backgroundImage:{
        'garden' :"url('garden.png')",
      },
      padding: {
        '5px': '5px',
        
      },
      outlineWidth:{
        5: '5px',
      },
      backgroundImage:{
        'graphy': "url('page/8f1115f1961d3d844ec39d9d528a6bc1--african-tribal-makeup-african-jewelry.jpg')",

     },
      height: {
        '30': '42rem',
        '20': '32rem',
        '10': '10rem',
        '16': '25rem',
        '8': '15rem'
      },
     
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '13px': '13px',
        '17px': '17px',
        '28px': '28px',
        '12px': '12px',
      },
      maxWidth: {
        'xs': '20rem',
        'sm': '30rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        '10xl': '170rem',
        'full': '100%',
      },
      
    },
  },
  plugins: [

    
  ],
}
