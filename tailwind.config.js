module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'solid': '0px 4px 0px 0px rgba(113, 122, 94, 1)',
      },
      colors: {
        green: {
          'softwise': '#A1C55B'
        },
        blue: {
          'softwise': '#4B71B0'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
