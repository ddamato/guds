const path = require('path');
const jestOutput = path.resolve(__dirname, '.jest-test-results.json');
module.exports = {
  scripts: {
    build: {
      default: 'babel src — out-dir lib',
    },
    refresh: {
      default: 'lerna bootstrap --hoist',
    },
    storybook: {
      build: 'build-storybook -o ./_site',
      default: 'start-storybook -p 9001'
    },
    test: {
      default: 'jest',
      generate: `jest --json --outputFile=${jestOutput}`,
      watch: 'nps test.generate -- --watch'
    }
  }
};
