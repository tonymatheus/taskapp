module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     New feature',
    },
    {
      value: 'fix',
      name: 'fix:      Bug fix',
    },
    {
      value: 'refactor',
      name: 'refactor: Code refactoring',
    },
    {
      value: 'docs',
      name: 'docs: Documentation',
    },
    {
      value: 'chore',
      name: 'chore: Maintenance',
    },
  ],

  scopes: [
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

  allowBreakingChanges: false,
};
