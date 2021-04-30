module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  puglins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
