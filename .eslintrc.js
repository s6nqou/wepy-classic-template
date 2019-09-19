module.exports = {
  root: true,
  globals: {
    wx: true,
    getCurrentPages: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'new-cap': ['error', {'newIsCapExceptions': ['wepy']}],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 1,
    'space-before-function-paren': ['error', 'never'],
  }
}
