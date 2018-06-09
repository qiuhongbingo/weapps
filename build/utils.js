const path = require('path')
const childProcess = require('child_process')

exports.exec = function(cmd) {
  return childProcess
    .execSync(cmd)
    .toString()
    .trim()
}

exports.resolve = function(dir) {
  return path.resolve(__dirname, '..', dir)
}
