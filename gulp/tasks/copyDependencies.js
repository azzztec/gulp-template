const path = require('path')
const gulp = require('gulp')
const npmDist = require('gulp-npm-dist')
const del = require('del')

const config = require('../config')

module.exports = function copyModules(cb) {
  del('./src/assets/libs').then(() => {
    gulp.src(npmDist(), { base: './node_modules' })
      .pipe(gulp.dest('./src/assets/libs')).on('end', cb)
  }).catch(cb)
}