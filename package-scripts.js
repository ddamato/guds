const path = require('path');
const jestOutput = path.resolve(__dirname, '.jest-test-results.json');
module.exports = {
  scripts: {
    build: {
      default: 'babel src — out-dir lib',
    },
    refresh: {
      default: 'nps refresh.lerna && nps refresh.alias',
      lerna: 'lerna clean -y && lerna bootstrap --hoist',
      alias: 'command -v link-module-alias && link-module-alias clean || true && link-module-alias'
    },
    storybook: {
      rimraf: 'rm -rf _site',
      build: 'nps storybook.rimraf && build-storybook -s -p --quiet -o ./_site',
      default: 'start-storybook -p 9001'
    },
    test: {
      default: `jest`,
      generate: `jest --json --outputFile=${jestOutput}`,
      update: 'jest -u',
      watch: 'nps test.generate -- --watch'
    }
  }
};
