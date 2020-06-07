module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'html', 'import', 'prettier'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not allow console.logs etc...
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'prettier/prettier': [
      'error', {
        'semi': false,
        'singleQuote': true,
        'tabWidth': 2,
        'endOfLine': "auto"
      }
    ]
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue']
      },
      node: {
        extensions: ['.js', '.jsx', '.vue']
      }
    }
  }
}
