const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jquery = require('jquery');

const entrypoints = [
  './js/index.js',
  './css/style.scss',
];

module.exports = {
  entry: entrypoints,
  output: {
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }, {
      test: /\.html$/,
      loaders: ['babel-loader', 'template-string'],
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', 'css', 'sass', 'resolve-url'
      ),
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(ttf|woff|woff2|eot|svg|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new webpack.ProvidePlugin({
      $: jquery,
      jQuery: jquery,
    }),
  ],
};
