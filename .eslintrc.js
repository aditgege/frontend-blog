module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    "sourceType": "module",
    "requireConfigFile": false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
  }
}
