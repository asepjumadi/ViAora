// metro.config.js
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = mergeConfig(getDefaultConfig(__dirname), {
  // Tambahkan konfigurasi kustom Anda di sini jika diperlukan
});

module.exports = withNativeWind(config, { input: './global.css' });
