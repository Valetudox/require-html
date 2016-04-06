'use strict';

var Module = require('module');
var originalRequire = Module.prototype.require;
var fs = require('fs');

Module.prototype.require = function(filePath) {
  if (filePath.indexOf('.html') > -1) {
    return fs.readFileSync(Module._resolveFilename(filePath, this)).toString();
  }
  return originalRequire.apply(this, arguments);
};
