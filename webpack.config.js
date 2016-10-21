/* eslint-disable no-var, object-shorthand */

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var buildPath = path.join(__dirname, 'build')
var clientSrcPath = path.join(__dirname, 'client')
var clientBuildPath = path.join(buildPath, 'client')
var staticSrcPath = path.join(clientSrcPath, 'static')

module.exports = {
  buildPath: buildPath,
  clientSrcPath: clientSrcPath,
  clientBuildPath: clientBuildPath,
  entry: [
    path.join(clientSrcPath, 'app.js')
  ],
  output: {
    path: clientBuildPath,
    filename: 'bundle.js',
    publicPath: '/static'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([
      { from: path.join(staticSrcPath, 'index.html'), to: buildPath },
      { from: path.join(staticSrcPath, 'favicon.ico'), to: buildPath },
      { from: path.join(staticSrcPath, 'images'), to: path.join(clientBuildPath, 'images') }
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: clientSrcPath
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }]
  }
}
