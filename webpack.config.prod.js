var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var fs  = require('fs');


module.exports = {
  context: __dirname,
  devtool : 'source-map',
  watch: true,
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle-[hash].js"
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
    function () {
      this.plugin("done", function (stats) {
        var replaceInFile = function (filePath, toReplace, replacement) {
          var replacer = function (match) {
              console.log('Replacing in %s: %s => %s', filePath, match, replacement);
              return replacement
          };
          var str = fs.readFileSync(filePath, 'utf8');
          var out = str.replace(new RegExp(toReplace, 'g'), replacer);
          fs.writeFileSync(filePath, out);
        };

        var hash = stats.hash; // Build's hash, found in `stats` since build lifecycle is done.

        replaceInFile(path.join(path.join(__dirname, 'dist'), 'index.html'),
          'bundle.js',
          'bundle-' + hash + '.js'
        );
      });
    }
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
