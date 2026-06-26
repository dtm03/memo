const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    // This line tells Metro to use the SVG transformer
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  config.resolver = {
    ...resolver,
    // Remove 'svg' from assetExts so it's not treated as a static file
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    // Add 'svg' to sourceExts so it can be imported as a component
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
