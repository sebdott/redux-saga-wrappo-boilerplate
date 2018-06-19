const glob = require('glob');
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

function readLess(pattern, folder) {
  let combineTheme = '';

  glob.sync(folder + pattern).forEach(file => {
    var isDir = fs.lstatSync(file).isDirectory();

    if (!isDir) {
      var fileRead = fs.readFileSync(file, 'utf8');
      if (fileRead) {
        combineTheme += fileRead;
      }
    }
  });

  const themeVariables = lessToJs(combineTheme);
  return themeVariables;
}

module.exports = readLess;
