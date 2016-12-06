var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')


module.exports = {
  context: __dirname,
  devtool : 'source-map',
  watch: true,
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "./dist/bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
