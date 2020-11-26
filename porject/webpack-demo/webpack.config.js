/*
 * @Author: wangzongyu
 * @Date: 2020-11-22 17:45:09
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-22 19:37:56
 * @Description:
 * @FilePath: \webpack-demo\webpack.config.js
 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: path.resolve(__dirname, "./loaders/my-loader.js") },
        ],
      },
    ],
  },
};
