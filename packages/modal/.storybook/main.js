const { stories } = require('../package.json');
const main = require('~root/.storybook/main.js');

module.exports = {
  ...main,
  stories,
}
