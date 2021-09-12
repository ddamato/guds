const path = require('path');
process.env.root = __dirname;
const jestOutput = path.resolve(__dirname, '.jest-test-results.json');
module.exports = {
  scripts: {
    build: {
      default: 'babel src — out-dir lib',
    },
    refresh: {
      default: 'nps refresh.lerna',
      lerna: 'lerna clean -y && lerna bootstrap --hoist',
    },
    reset:  {
      default: 'rm -rf node_modules && npm i'
    },
    storybook: {
      rimraf: 'rm -rf _site',
      build: 'nps storybook.rimraf && build-storybook -s -p --quiet -o ./_site',
      default: `concurrently "start-storybook -p 9001" "nps test.watch"`,
    },
    test: {
      default: `jest`,
      generate: `jest --json --outputFile=${jestOutput}`,
      update: 'jest -u',
      watch: 'nps test.generate -- --watch'
    }
  }
};
