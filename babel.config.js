module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],

        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],

        alias: {
          '@app': './src/app',
          '@config': './src/config',

          '@domain': './src/domain',
          '@entities': './src/domain/entities',

          '@domainRepositories': './src/domain/repositories',
          '@useCases': './src/domain/useCases',

          '@features': './src/features',

          '@infraRepositories': './src/infrastructure/repositories',
          '@repositories': './src/infrastructure/repositories',
          '@infrastructure': './src/infrastructure',
          '@storage': './src/infrastructure/storage',

          '@components': './src/shared/components',
          '@theme': './src/shared/theme',
          '@utils': './src/shared/utils',
        },
      },
    ],
  ],
};
