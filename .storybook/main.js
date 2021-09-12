const fs = require('fs');
const path = require('path');

const glob = fs.existsSync(path.resolve(__dirname, '..', 'components'))
  ? '../components/**/src/canvas.stories.mdx'
  : '../src/canvas.stories.mdx';

module.exports = {
  stories: [glob],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-notes/register',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /styles\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' },
        { loader: 'linaria/loader'}
      ],
    });
    return config;
  }
}