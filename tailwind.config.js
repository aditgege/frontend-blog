/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'display': ['Calistoga'],
      'content': ['Neuton']
    },
    // darkSelector: '.dark-mode'
  },
  variants: {
    // backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd"],
    // borderColor: ["dark", "dark-focus", "dark-focus-within"],
    // textColor: ["dark", "dark-hover", "dark-active"]
  },
  plugins: [
    // require('tailwindcss-dark-mode')()/
  ]
}
