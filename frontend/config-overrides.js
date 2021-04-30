module.exports = {
  webpack: function (webpackConfig) {
    webpackConfig.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return webpackConfig;
  },
};
