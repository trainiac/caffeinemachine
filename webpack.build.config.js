/* eslint-disable no-var */

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var baseConfig = require('./webpack.config.js')
var path = require('path')

var config = {
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      { from: path.join(baseConfig.staticSrcPath, 'index.html'), to: baseConfig.buildPath },
      { from: path.join(baseConfig.staticSrcPath, 'favicon.ico'), to: baseConfig.buildPath },
      { from: path.join(baseConfig.staticSrcPath, 'images'), to: path.join(baseConfig.clientBuildPath, 'images') }
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: baseConfig.clientSrcPath
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }]
  }
}

module.exports = Object.assign({}, baseConfig, config)
