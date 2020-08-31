const { stories } = require('../package.json');

module.exports = {
  stories,
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'linaria/loader'}
      ],
    });
    return config;
  }
}