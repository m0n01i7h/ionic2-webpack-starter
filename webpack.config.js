const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TsConfigPathsPlugin = require("awesome-typescript-loader").TsConfigPathsPlugin;

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: PRODUCTION
      ? path.join(__dirname, './src/main.production')
      : path.join(__dirname, './src/main'),
    deps: path.join(__dirname, './src/dependencies'),
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
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'] },
      { test: /\.html$/, loader: 'raw-loader' },

      // ---------- styles
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: `css-loader!sass-loader?includePaths[]=${path.resolve(__dirname, "./node_modules/ionicons/dist/scss")}`
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
    new TsConfigPathsPlugin(),
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
    // additional plugins for production environment
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ] : []).concat(DEBUG ? [
    // additional plugins for debug target
    new webpack.SourceMapDevToolPlugin()
  ] : [])
}