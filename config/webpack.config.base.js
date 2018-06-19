/*eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');
const readLess = require('../tools/readLess');

const {NODE_ENV, CLIENT = 'main2'} = process.env;
const devMode = NODE_ENV !== 'production';
const currentClientPath = paths.clients + '\\' + CLIENT;
const themePath = currentClientPath + '/themes/';
const themeVariables = readLess('*.less', path.join(__dirname, themePath));
const ASSET_PATH = process.env.ASSET_PATH || '/';

// lessToJs does not support @icon-url: "some-string", so we are manually adding it to the produced themeVariables js object here
// themeVariables['@icon-url'] = "'http://localhost:8080/fonts/iconfont'";

const cssLoaders = (modules = false) => [
  devMode
    ? {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      }
    : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      localIdentName: '[local].[hash:base64:5]',
      modules,
      sourceMap: devMode,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        require('postcss-cssnext')(),
        require('postcss-flexbugs-fixes')(),
      ],
      sourceMap: devMode,
    },
  },
  {
    loader: 'less-loader',
    options: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
      sourceMap: devMode,
    },
  },
];

module.exports = {
  output: {
    publicPath: ASSET_PATH,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new webpack.NormalModuleReplacementPlugin(
      /data[\\/]packed[\\/]latest.json$/,
      path.resolve(__dirname, '../misc/timezone-definitions.json'),
    ),
  ],
  resolve: {
    alias: {
      actions: paths.actions,
      api: paths.api,
      assets: paths.assets,
      clients: paths.clients,
      components: paths.components,
      constants: paths.constants,
      containers: paths.containers,
      currentClient: currentClientPath,
      initials: paths.initials,
      pages: paths.pages,
      services: paths.services,
      test: paths.test,
      themes: themePath,
      utils: paths.utils,
    },
    modules: [paths.appScripts, paths.nodeModules],
    extensions: ['.js', '.jsx', '.json', '.less'],
  },
  context: paths.app,
  externals: {
    // bcrypt dependency on node native crypto module which not necessary for browser environment.
    // since webpack only does static analysis to find out what code needs to be bundled.
    // That means NodeJS crypto is included even though it’s only needed for server side.
    crypto: 'crypto',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: cssLoaders(true),
        exclude: [paths.vendor, paths.nodeModules],
      },
      {
        test: /\.less$/,
        use: cssLoaders(),
        include: [paths.vendor, paths.nodeModules + '\\antd\\es'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: /(node_modules)/,
        include: paths.appScripts,
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[hash:8].[ext]',
        },
        include: /fonts/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // defaults to url-loader during development and uses both url-loader and file-loader
        loader: 'url-loader',
        options: {
          limit: 10000,
          // url-loader uses file-loader implicitly when limit is set unless fallback is use
          name: './media/[name].[hash:8].[ext]',
          // fallback: 'responsive-loader'
        },
        include: /images/,
      },
    ],
  },
  node: {global: true},
};
