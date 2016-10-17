const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.join(__dirname, './src/main'),          // custom application
    deps: path.join(__dirname, './src/dependencies'), // third-party dependencies
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  stats: {
    colors: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ],
    // alias: {
    //   buffer: './node_modules/buffer',
    //   process: './node_modules/process',
    // }
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: `ts` },
      { test: /\.html$/, loader: 'raw' },

      // ---------- styles
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: `css!sass?includePaths[]=${path.resolve(__dirname, "./node_modules/ionicons/dist/scss")}`
        })
      },

      // ----------- fonts
      { test: /\.woff($|\?)/, loader: 'url-loader?name=fonts/[name]-[hash].[ext]&limit=5000&mimetype=application/font-woff' },
      { test: /\.woff2($|\?)/, loader: 'url-loader?name=fonts/[name]-[hash].[ext]&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf($|\?)/, loader: 'file-loader?name=fonts/[name]-[hash].[ext]' },
      { test: /\.eot($|\?)/, loader: 'file-loader?name=fonts/[name]-[hash].[ext]' },

      // ----------- images
      { test: /\.svg($|\?)/, loader: 'file-loader?prefix=font/&name=img/[name]-[hash].[ext]' },
      { test: /\.png($|\?)/, loader: 'file-loader?prefix=font/&name=img/[name]-[hash].[ext]' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: DEBUG,
      PRODUCTION: PRODUCTION,
      BUILD_TIME: new Date().toString()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps',
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
    ]),
    new CleanWebpackPlugin([
      path.join(__dirname, 'www')
    ]),
  ].concat(PRODUCTION ? [
    // additional pluginds for produnction environment
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ] : []).concat(DEBUG ? [
    // additional pluginds for debug target
    new webpack.SourceMapDevToolPlugin()
  ] : [])
}