module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    // Reanimated *must* remain the last plugin in the array
    plugins: ['react-native-reanimated/plugin'],
  };
};
