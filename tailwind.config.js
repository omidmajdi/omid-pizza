module.exports = {
  purge: {
    enabled: true,
    content: [
      './source/layouts/*.html',
      './source/layouts/*.html.erb',
      './source/*.html',
      './source/*.html.erb'
    ],
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      'sans': ['Graphik', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
