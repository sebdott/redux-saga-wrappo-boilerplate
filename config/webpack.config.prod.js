const CircularDependencyPlugin = require('circular-dependency-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const getClientEnvironment = require('./env');
const webpackConfig = require('./webpack.config.base');
const paths = require('./paths');
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = merge.smart(webpackConfig, {
  mode: 'production',
  entry: {app: paths.appIndexJs},
  output: {
    path: paths.destination,
    chunkFilename: '[name].[chunkhash:4].js',
    filename: '[name].[chunkhash:4].js',
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      PUBLIC_URL: paths.app,
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        extractComments: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          autoprefixer: false,
          discardComments: true,
          filterPlugins: false,
          mergeIdents: false,
          reduceIdents: false,
          zindex: false,
        },
      }),
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'initial',
    },
  },
});
