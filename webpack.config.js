// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const loader = require("sass-loader");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map', // 'source-map
  devServer: {
    open: true,
    static: [
        {directory: path.join(__dirname, 'dist')},
        {directory: path.join(__dirname, 'src')},      
      ],
      historyApiFallback: true,
    },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack App',
        template: "src/index.hbs",
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      title: 'Credits',
      template: './src/credits.hbs',
      filename: 'credits.html'
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: './src/about.hbs',
      filename: 'about.html'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "src/assets/img", to: "assets/img" },
    //     // { from: "other", to: "public" },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        // type: "asset/resource",
        loader:'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath:'img',
          publicPath:'img',
          emitFile:true,
          esModule:false
        },
      },
      { 
        test: /\.hbs$/, 
        loader: "handlebars-loader" 
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
