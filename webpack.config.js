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
      test: /\.(ttf|eot|svg|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
  ],
};
