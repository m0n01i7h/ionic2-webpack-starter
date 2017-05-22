const { DefinePlugin } = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon', 'chai'],
    files: [
      'tests.webpack.js',
      'www/app.bundle.css'
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    coverageReporter: {
      reporters: [{
        type: 'text-summary'
      }, {
        type: 'html',
        dir: 'coverage/'
      }]
    },
    reporters: ['progress', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      devtool: 'eval-source-map', //just do inline source maps instead of the default
      module: {
        rules: [
          {
            enforce: 'post',
            test: /\.(js|ts)$/,
            include: /(src)/,
            exclude: /(node_modules|\.(test|spec)\.(js|ts))/,
            loader: 'istanbul-instrumenter-loader',
            query: {
              esModules: true
            }
          },
          { test: /\.ts$/, loaders: ['awesome-typescript-loader'] },
          { test: /\.(html|scss|css)$/, loaders: ['raw-loader'] }
        ]
      },
      resolve: webpackConfig.resolve,
      plugins: [new DefinePlugin({ DEBUG: true })]
    },
    webpackServer: {
      noInfo: true
    }
  });
};
