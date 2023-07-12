"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PugPlugin = require("pug-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      // use alias to avoid relative paths like `./../../images/`
      Images: path.join(__dirname, "./src/images/"),
      Fonts: path.join(__dirname, "./src/fonts/"),
      JS: path.join(__dirname, "./src/js/"),
      CSS: path.join(__dirname, "./src/scss/"),
    },
  },

  mode: "development",
  entry: {
    // define Pug files here
    index: "./src/index.pug", // => dist/index.html
    standort: "./src/standort.pug",
    speisekarte: "./src/speisekarte.pug",
    impressum: "./src/impressum.pug",
    kontakt: "./src/kontakt.pug",
    // ...
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new PugPlugin({
      pretty: true, // formatting HTML, useful for development mode
      js: {
        // output filename of extracted JS file from source script6577
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        // output filename of extracted CSS file from source style
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // Pug loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader", "postcss-loader"],
      },
      // {
      //   test: /\.(css|scss|sass|less|styl)$/,
      //   enabled: true,
      //   verbose: false,
      //   filename: "[name].css",
      //   outputPath: null,
      // },
      {
        test: /\.(png|jpg|jpeg|svg|ico)/,
        type: "asset/resource",
        generator: {
          // output filename of images
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
        generator: {
          // output filename of fonts
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
};
