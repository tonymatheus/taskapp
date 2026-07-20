module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'app',
        'tasks',
        'storage',
        'monitoring',
        'navigation',
        'theme',
        'core',
        'deps',
        'config',
        'docs',
      ],
    ],
  },
};
