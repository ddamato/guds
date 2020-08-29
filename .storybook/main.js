const { stories } = require('../package.json');

module.exports = {
  stories,
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ]
}