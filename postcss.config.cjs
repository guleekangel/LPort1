module.exports = {
  plugins: [
    require('postcss-preset-env')({
      // Convert modern CSS (including media-query-range syntax) for older
      // mobile browsers. iOS Safari 15 is widely used in China and does not
      // support @media (width <= 780px).
      browsers: ['>= 0.25%', 'iOS >= 13', 'Safari >= 13', 'Chrome >= 80'],
      preserve: false,
    }),
    require('cssnano')({
      preset: ['default', { convertValues: false }],
    }),
  ],
};
