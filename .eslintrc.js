module.exports = {
  env: {
    browser: true
  },
  extends: 'google',
  plugins: [
  'react'
  ],
  ecmaFeatures: {
    arrowFunctions: true,
    forOf:true,
    jsx: true,
    modules: true,
    spread: true,
  },
  rules: {
    'react/sort-comp': 1,
    'max-len': 0,
    'indent':0,
    'brace-style':0    
  }
};
