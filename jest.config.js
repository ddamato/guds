module.exports = {
  transform: {
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    "\\.m?jsx?$": "jest-esm-transformer",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules"
  ]
}