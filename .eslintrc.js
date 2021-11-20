module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'quote-props': ['error', 'as-needed', { 'keywords': false, 'unnecessary': false }],
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'max-len': 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'object-shorthand': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'func-names': 0,
    'padded-blocks': 0,
    'arrow-body-style': 0,
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
  },
};
