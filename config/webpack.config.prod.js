/*eslint-disable  func-names, no-param-reassign prefer-arrow-callback, object-shorthand, no-console, prefer-template, vars-on-top */
const webpack = require('webpack');
const merge = require('webpack-merge');
// const ExtractText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
// const OfflinePlugin = require('offline-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const paths = require('./paths');
const path = require('path');
const webpackConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CLIENT } = process.env;

// const NPMPackage = require(paths.packageJson);

module.exports = merge.smart(webpackConfig, {
  resolve: {
    alias: {
      injectClient: path.resolve(__dirname, '../src/client/' + CLIENT),
    },
  },
  mode: 'production',
  entry: {
    bundle: ['@babel/polyfill'],
    app: paths.appIndexJs,
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk.[chunkhash].js',
    path: paths.destination,
    publicPath: '/',
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanPlugin(['dist'], { root: paths.root }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ProgressBarPlugin(),
    // new HtmlPlugin({
    //   githash: GITHASH,
    //   inject: false,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //   },
    //   template: './index.ejs',
    //   title: NPMPackage.title,
    // }),
    // new CopyPlugin([
    //   { from: '../assets/manifest.json' },
    //   { from: '../app/.htaccess' },
    // ]),
    // new ExtractText('styles/app.[git-hash].css'),

    // new OfflinePlugin({
    //   autoUpdate: true,
    //   safeToUseOptionalCaches: true,
    //   ServiceWorker: {
    //     events: true,
    //   },
    //   AppCache: {
    //     events: true,
    //   },
    //   caches: {
    //     main: [
    //       '**/*.js',
    //       '**/*.css',
    //       'index.html',
    //     ],
    //     additional: [
    //       'fonts/*.woff',
    //       'fonts/*.ttf',
    //       'fonts/*.svg',
    //     ],
    //     optional: [
    //       ':rest:',
    //     ],
    //   },
    //   cacheMaps: [
    //     {
    //       match: function() {
    //         return new URL('/', location);
    //       },
    //       requestTypes: ['navigate'],
    //     },
    //   ],
    // }),
  ],
});
