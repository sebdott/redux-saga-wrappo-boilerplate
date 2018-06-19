const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getClientEnvironment = require('./env');
const webpackConfig = require('./webpack.config.base');
const paths = require('./paths');
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = merge.smart(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    paths.appIndexJs,
  ],
  output: {
    path: paths.destination,
    pathinfo: true,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      PUBLIC_URL: paths.app,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(env.stringified),
  ],
});
