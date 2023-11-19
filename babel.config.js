module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@common': './src/common',
          '@core': './src/core',
          '@products': './src/products',
        },
      },
    ],
  ],
};
