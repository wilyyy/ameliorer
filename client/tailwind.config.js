module.exports = {
   mode: 'jit',
   purge: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {},
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         msuGreen: '#00463C',
         apricot: '#FFC987',
         white: '#fff',
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
