var webpackMerge      = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig      = require('./webpack.common.js'),
    helpers           = require('../helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path:          helpers.root('dist'),
    publicPath:    'http://localhost:8080/static',
    filename:      '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats:              'minimal'
  }
});
