const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for Skia and other native modules
config.resolver.assetExts.push('db', 'sqlite', 'png', 'jpg', 'jpeg', 'webp');

module.exports = config;
