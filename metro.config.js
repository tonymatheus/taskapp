const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

// Alias map — must mirror babel.config.js and tsconfig.json
const aliases = {
  '@app': path.resolve(__dirname, 'src/app'),
  '@config': path.resolve(__dirname, 'src/config'),
  '@domain': path.resolve(__dirname, 'src/domain'),
  '@entities': path.resolve(__dirname, 'src/domain/entities'),
  '@domainRepositories': path.resolve(__dirname, 'src/domain/repositories'),
  '@useCases': path.resolve(__dirname, 'src/domain/useCases'),
  '@features': path.resolve(__dirname, 'src/features'),
  '@infraRepositories': path.resolve(
    __dirname,
    'src/infrastructure/repositories',
  ),
  '@repositories': path.resolve(__dirname, 'src/infrastructure/repositories'),
  '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
  '@storage': path.resolve(__dirname, 'src/infrastructure/storage'),
  '@components': path.resolve(__dirname, 'src/shared/components'),
  '@theme': path.resolve(__dirname, 'src/shared/theme'),
  '@utils': path.resolve(__dirname, 'src/shared/utils'),
};

const config = {
  resolver: {
    // resolveRequest does prefix substitution — needed for aliases with sub-paths
    // e.g. @infrastructure/storage/mmkv (Metro treats @scope/pkg as a single package name)
    resolveRequest: (context, moduleName, platform) => {
      for (const [alias, aliasPath] of Object.entries(aliases)) {
        if (moduleName === alias) {
          return context.resolveRequest(context, aliasPath, platform);
        }
        if (moduleName.startsWith(alias + '/')) {
          const resolved = path.join(
            aliasPath,
            moduleName.slice(alias.length + 1),
          );
          return context.resolveRequest(context, resolved, platform);
        }
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
