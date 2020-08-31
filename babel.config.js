const root = __dirname;
module.exports = {
  "presets": ["@babel/preset-env","@babel/preset-react", "linaria/babel"],
  "plugins": [
    "@babel/plugin-transform-modules-commonjs",
    ["module-resolver", {
      "root": [root],
      "alias": {
        "~root": ".",
      }
    }]
  ]
}
