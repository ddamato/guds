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
      generate: 'nps test --json --outputFile=.jest-test-results.json',
      watch: 'nps test.generate -- --watch'
    }
  }
};
