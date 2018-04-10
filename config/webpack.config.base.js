/*eslint-disable no-console */

const CircularDependencyPlugin = require('circular-dependency-plugin');
const paths = require('./paths');
const path = require('path');
const { NODE_ENV } = process.env;
const isProd = process.env.NODE_ENV === 'production';

// injectClient: path.resolve(__dirname, '../src/client/main'),
module.exports = {
  resolve: {
    alias: {
      'app-store$': paths.store,
      assets: paths.assets,
      test: paths.test,
    },
    modules: [paths.appScripts, paths.nodeModules],
    extensions: ['.js', '.jsx', '.json'],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  context: paths.app,
  devtool: 'source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        options: {
          cacheDirectory: true,
        },
        exclude: /(node_modules|bower_components)/,
        include: paths.appScripts,
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          'url?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]',
        ],
        include: /fonts/,
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file?name=fonts/[name].[ext]'],
        include: /fonts/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          `file?hash=sha512&digest=hex${
            isProd ? '&name=media/[name].[ext]' : ''
          }`,
          {
            loader: 'image-webpack',
            query: {
              optipng: {
                optimizationLevel: 5,
              },
              pngquant: {
                quality: '75-90',
              },
            },
          },
        ],
        include: /media/,
      },
      {
        test: /(manifest\.json|\.xml)$/,
        use: [
          {
            loader: 'file',
            query: { name: '[name].[ext]' },
          },
        ],
        include: /assets/,
      },
      {
        test: /\.md$/,
        use: ['html', 'markdown'],
      },
    ],
  },
};
