var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var S3Plugin = require('webpack-s3-plugin')


module.exports = {
  context: __dirname,
  devtool : 'source-map',
  watch: true,
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: './dist/'
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
    }),
    new S3Plugin({
      // Include uploading of css js html
      include: /.*\.(css|js|html)/,
      // s3Options are required
      s3Options: {
        accessKeyId: '{your accessKeyId}',
        secretAccessKey: '{your secretAccessKey}',
        region: 'ap-northeast-1',
        ACL:    'public-read'
      },
      s3UploadOptions: {
        Bucket: 'goodoc-gateway'
      }
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
