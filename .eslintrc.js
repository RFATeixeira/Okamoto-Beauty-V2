/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
};

module.exports = config;
