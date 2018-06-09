module.exports = {
  extends: 'standard',

  globals: {
    Page: true,
    Component: true,
    App: true,
    getApp: true,
    getCurrentPages: true,
    wx: true
  },

  rules: {
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'regeneratorRuntime'
      }
    ]
  }
}
