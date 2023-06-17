module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier', 'jsx-a11y', 'react-hooks', 'storybook'],
  extends: [
    'prettier',
    'next/core-web-vitals',
    'next',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'airbnb-typescript/base',
    'plugin:playwright/playwright-test',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'max-len': [1, 150, 2, { 'ignoreUrls': true }],
  },
};
