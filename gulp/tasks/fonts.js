const gulp = require('gulp')
const config = require('../config')

module.exports = function fonts() {
  return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.build.fonts))
}