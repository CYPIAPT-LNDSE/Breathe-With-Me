const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entrypoints = [
  './js/index.js',
  './css/style.scss',
];

module.exports = {
  entry: entrypoints,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.html$/,
      loaders: ['babel-loader', 'template-string'],
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', ['css-loader', 'sass'], { publicPath: '/' }
      ),
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(jpg|jpeg|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file',
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
};
