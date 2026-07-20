const js = require('@eslint/js');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactNative = require('eslint-plugin-react-native');
const prettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-native': reactNative,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-native/no-inline-styles': 'warn',

      'prefer-const': 'error',

      'no-console': 'warn',
    },
  },

  prettier,

  {
    ignores: [
      'android/**',
      'ios/**',
      'scripts/**',
      'node_modules/**',
      'coverage/**',
      'babel.config.js',
      'metro.config.js',
      '.prettierrc.js',
      '.cz-config.js',
      'commitlint.config.cjs',
      'eslint.config.js',
    ],
  },
);
