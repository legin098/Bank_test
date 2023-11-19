module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './__tests__/__mocks__/react-native.js',
    './__tests__/__mocks__/react-navigation.js',
  ],
  transformIgnorePatterns: [
    'jest-runner',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
