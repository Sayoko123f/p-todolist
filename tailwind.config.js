module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/Components/*.vue',
      './src/*.vue',
      './src/*.html',
    ]
  }
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#00408B',
        warning: '#D0021B',
        highlight: {
          light: '#F5A623',
          dark: '#FFF2DC',
        },
        support: {
          '100': '#F2F2F2',
          '200': '#E1E1E1',
          '300': '#C8C8C8',
          '400': '#757575',
          '500': '#FDFDFD',
          '600': '#3982D7',
          '700': '#9B9B9B',
          '800': '#00408B',
        }
      },
    },
  },
  variants: {
  },
  plugins: [],
}