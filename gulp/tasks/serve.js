const gulp = require('gulp')
const server = require('browser-sync').create()
const config = require('../config')

const pug2html = require('./pug2html')
const styles = require('./styles')
const script = require('./script')
const imageMin = require('./imageMin')
const fonts = require('./fonts')

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve() {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch(config.watch.html, gulp.series(pug2html, readyReload))
  gulp.watch(config.watch.scss, gulp.series(styles, readyReload))
  gulp.watch(config.watch.js, gulp.series(script, readyReload))
  gulp.watch(config.watch.images, gulp.series(imageMin, readyReload))
  gulp.watch(config.watch.fonts, gulp.series(fonts, readyReload))

}