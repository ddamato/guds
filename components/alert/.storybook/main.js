const { stories } = require('../package.json');
const main = require(`${process.env.root}/.storybook/main.js`);

module.exports = {
  ...main,
  stories,
}
