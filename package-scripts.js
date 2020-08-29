module.exports = {
  scripts: {
    build: {
      default: 'babel src — out-dir lib',
    },
    storybook: {
      build: 'build-storybook -o ./_site',
      default: 'start-storybook -p 9001'
    },
    test: {
      default: 'jest',
      generate: 'jest --json --outputFile=.jest-test-results.json',
      watch: 'nps test.generate -- --watch'
    }
  }
};
