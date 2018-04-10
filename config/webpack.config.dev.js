const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getClientEnvironment = require('./env');
const webpackConfig = require('./webpack.config.base');
const paths = require('./paths');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = merge.smart(webpackConfig, {
  resolve: {
    alias: {
      injectClient: path.resolve(__dirname, '../src/client/main'),
    },
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: [
    '@babel/polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    paths.appIndexJs,
  ],
  output: {
    path: paths.destination,
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      PUBLIC_URL: paths.app,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
});
