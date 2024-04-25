module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@resources': './src/resources',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@providers': './src/providers',
            '@themes': './src/themes',
            '@models': './src/models',
          },
        },
      ],
    ],
  };
};
