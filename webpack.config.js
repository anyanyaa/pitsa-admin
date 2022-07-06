const {resolve, join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function(__, argv) {
  console.log(`mode is: ${argv.mode}`);

  if (argv.mode === 'development') {
    config.mode = 'development'
    config.devtool = 'source-map';
  } else {
    config.mode = 'production'
  }

  return config
}


let config = {

  // mode: argv.mode ? 'production' : 'development',
  // devtool: argv.mode === "production" ? "source-map" : "eval",

  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name]-[fullhash].js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[fullhash].css'
    })
  ],
  devServer: {
    port: 8080,
    static: {
      directory: join(__dirname, 'src')
    }
  },
  performance : {
    hints : false
  }
}


