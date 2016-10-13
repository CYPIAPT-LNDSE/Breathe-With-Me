const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');

const entrypoints = [
  './src/index.js',
  './src/css/style.scss',
];

module.exports = {
  entry: entrypoints,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve('./node_modules'),
    alias: {
      TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      CSSPlugin: path.resolve('node_modules', 'gsap/src/uncompressed/plugins/CSSPlugin.js'),
      Draggable: path.resolve('node_modules', 'gsap/src/uncompressed/utils/Draggable.js'),
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }, {
      test: /\.html$/,
      loaders: ['babel-loader', 'html'],
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style', ['css-loader', 'sass'], { publicPath: '/' }
      ),
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(jpg|jpeg|gif|png|ttf|eot|svg|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
        'catLanding.png',
        'music.mp3',
        'https://fonts.googleapis.com/css?family=Lato',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
      ],
      network: ['*'],
      fallback: [],
      settings: ['prefer-online'],
      exclude: [],
      output: 'breathe.appcache',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/images/catLanding.png' },
      { from: 'src/assets/sounds/music.mp3' },
      { from: 'src/manifest.json' },
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'pages-cache-v1',
      filename: 'service-worker.js',
      maximumFileSizeToCacheInBytes: 10000000,
      runtimeCaching: [{
        handler: 'cacheFirst',
        urlPattern: /[.](mp3|json|png|js)$/,
      }, {
        handler: 'cacheFirst',
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      }],
    }),
  ],
};
