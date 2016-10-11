const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');

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
    new AppCachePlugin({
      cache: [
        'breathe.appcache',
        'manifest.json',
        'https://fonts.googleapis.com/css?family=Lato',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'assets/catLanding.png',
        'newSVG/landing/catLanding2.svg',
        'newSVG/blueMountains/mountainFront2.svg',
        'newSVG/blueMountains/mountainMiddle.svg',
        'newSVG/blueMountains/mountainBack.svg',
        'newSVG/redMountains/mountainWelldoneFront.svg',
        'newSVG/redMountains/mountainWelldoneMiddle.svg',
        'newSVG/redMountains/mountainWelldoneBack.svg',
        'newSVG/GIFpage/cat-GIF.svg',
        'assets/ezgif.com-gif-maker.gif',
        'assets/2386_cello-suite-no1-in-g-major-bwv-1007-a002e337-ca9c-4da7-9a2c-9cd0caf149d4.mp3'
      ],
      network: ['*'],
      fallback: [],
      settings: ['prefer-online'],
      exclude: [],
      output: 'breathe.appcache',
    }),
  ],
};
