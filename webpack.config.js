const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true, //
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebPackPlugin({
      title: "Mi webpack App",
      template: "./src/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtract({
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
    }),

    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
