const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('css/bundle.css'),
  ],
};
