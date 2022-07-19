module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    'linebreak-style': 'off', // Неправильно работает в Windows.
    'arrow-parens': 'off', // Несовместимо с prettier
    'object-curly-newline': 'off', // Несовместимо с prettier
    'no-mixed-operators': 'off', // Несовместимо с prettier
    'arrow-body-style': 'off', // Это - не наш стиль?
    'function-paren-newline': 'off', // Несовместимо с prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // Несовместимо с prettier
    'max-len': ['error', 100, 2, { ignoreUrls: true }], // airbnb позволяет некоторые пограничные случаи
    'no-alert': 'error', // airbnb использует предупреждение
    'no-param-reassign': 'off', // Это - не наш стиль?
    indent: 'off',
    '@typescript-eslint/indent': ['error'],
    radix: 'off', // parseInt, parseFloat и radix выключены. Мне это не нравится.
    'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }], // airbnb использует .jsx
    'prefer-destructuring': 'off',
    'react/no-find-dom-node': 'off', // Я этого не знаю
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // для ошибки вложенных свойств htmlFor элементов label
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-named-as-default': 0,
  },
};
