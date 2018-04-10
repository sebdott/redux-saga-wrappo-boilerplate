const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  app: resolvePath('public'),
  appHtml: resolvePath('src/index.ejs'),
  appIndexJs: resolvePath('src/index.jsx'),
  appScripts: resolvePath('src'),
  assets: resolvePath('src/assets'),
  config: resolvePath('config'),
  destination: resolvePath('dist'),
  dotenv: resolvePath('.env'),
  nodeModules: resolvePath('node_modules'),
  packageJson: resolvePath('package.json'),
  publicPath: resolvePath('/'),
  root: resolvePath(''),
  store: resolvePath('src/store/index'),
  test: resolvePath('test'),
};
