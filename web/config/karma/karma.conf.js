var webpackConfig = require('../webpack/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './web/config/karma/karma-test-shim.js', watched: false }
    ],

    preprocessors: {
      './web/config/karma/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],
    port:      9876,
    colors:    true,
    logLevel:  config.LOG_INFO,
    autoWatch: false,
    browsers:  ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
