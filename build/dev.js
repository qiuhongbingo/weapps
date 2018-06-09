const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')
const { copys } = require('./config')

function genCopyDirs() {
  let r = []
  copys.map(m => r.push(...copyToApps(m)))
  return r
}

function copyToApps(dir) {
  let r = []
  utils
    .exec(`cd ${utils.resolve('apps')} && ls`)
    .split('\n')
    .map(app => {
      r.push({
        from: utils.resolve(dir),
        to: utils.resolve(`apps/${app}/_${dir}`)
      })
    })
  return r
}

module.exports = {
  watch: true,
  entry: utils.resolve('index.js'),
  output: {
    path: utils.resolve('.tmp'),
    filename: 'bundle.js'
  },
  plugins: [new CopyWebpackPlugin(genCopyDirs())]
}
