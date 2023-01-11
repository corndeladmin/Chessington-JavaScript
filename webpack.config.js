const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.resolve(__dirname, "src", "frontend"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  entry: path.resolve(__dirname, "src/frontend/js/chessington.js"),
  output: {
    filename: "chessington.bundle.js",
    path: path.resolve(__dirname, "dist", "js"),
    libraryTarget: "var",
    library: "chessington",
    clean: true,
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: ["src/**/*"],
    port: 3000,
    liveReload: true,
  },
};

module.exports = config;
