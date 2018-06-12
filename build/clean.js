const rimraf = require('rimraf')
const utils = require('./utils')
const { copys } = require('./config')

function genCopyDirs(app) {
  let r = []
  copys.map(m => r.push(`${app}/_${m}`))
  return r
}

function log(dir) {
  console.log(`cleaning ${dir}`)
}

rimraf(utils.resolve('.tmp'), () => log('.tmp'))

utils
  .exec(`cd ${utils.resolve('apps')} && ls`)
  .split('\n')
  .map(app => {
    genCopyDirs(app).map(m => {
      rimraf(utils.resolve(`apps/${m}`), () => log(m))
    })
  })
