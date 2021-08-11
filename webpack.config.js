const path = require("path");

module.exports = {
  entry: "./client/index.js", //initial file that webpack parses through to make a graph
  output: {
    path: path.resolve(__dirname, "build"), //tells webpack where to emit the bundles(not created until you run build)
    filename: "bundle.js",
  },
  mode: "production", //this is default value- we are creating a minified and ugly bundle to make faster code delivery
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  }, //closes module object
}; //closes module.expots
