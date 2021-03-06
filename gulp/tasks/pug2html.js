const { src, dest } = require('gulp')
const htmlmin = require('gulp-htmlmin')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const config = require('../config')

module.exports = function pug2html() {
  return src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({ pretty: config.pug2html.beautifyHtml }))
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter())
    .pipe(bemValidator())
    .pipe(dest(config.build.html))
}