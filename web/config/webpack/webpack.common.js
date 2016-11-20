var webpack           = require('webpack'),
    // HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers           = require('../helpers');

module.exports = {
  entry: {
    'polyfills': './web/src/polyfills.ts',
    'vendor':    './web/src/vendor.ts',
    'app':       './web/src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test:    /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test:   /\.html$/,
        loader: 'html'
      },
      {
        test:   /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test:    /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader:  ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test:    /\.css$/,
        include: helpers.root('src', 'app'),
        loader:  'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    })/*,

     new HtmlWebpackPlugin({
     template: 'web/src/index.html'
     })*/
  ]
};
