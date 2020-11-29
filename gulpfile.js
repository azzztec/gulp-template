const gulp = require('gulp')

const pug2html = require('./gulp/tasks/pug2html')
const serve = require('./gulp/tasks/serve') 
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const imageMin = require('./gulp/tasks/imageMin')
const fonts = require('./gulp/tasks/fonts')
const cleanDist = require('./gulp/tasks/cleanDist')
const lighthouse = require('./gulp/tasks/lighthouse')
const copyModules = require('./gulp/tasks/copyDependencies')

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(pug2html, styles, script, imageMin, fonts)
const build = gulp.series(cleanDist, copyModules, dev)

module.exports.dev = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)

module.exports.lighthouse = gulp.series(lighthouse)