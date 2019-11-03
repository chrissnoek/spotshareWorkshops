const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["webpack-hot-middleware/client?reload=true", "./src"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "App.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
