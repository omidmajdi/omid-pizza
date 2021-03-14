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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
