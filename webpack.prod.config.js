/* eslint-disable no-var */

var webpack = require('webpack')
var config = require('./webpack.config.js')

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('prod')
  }
}))
module.exports = config
