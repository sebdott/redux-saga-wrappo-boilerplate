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
  root: resolvePath(''),
  store: resolvePath('src/store/index'),
  test: resolvePath('test'),
  utils: resolvePath('src/utils'),
  constants: resolvePath('src/constants'),
  services: resolvePath('src/services'),
  actions: resolvePath('src/actions'),
  components: resolvePath('src/components'),
  containers: resolvePath('src/containers'),
  clients: resolvePath('src/clients'),
  vendor: resolvePath('src/clients/vendor'),
  pages: resolvePath('src/pages'),
  api: resolvePath('src/api'),
  initials: resolvePath('src/initials'),
  styles: resolvePath('src/styles'),
};
