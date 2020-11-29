const { src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const stylelint = require('gulp-stylelint')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const config = require('../config')

module.exports = function scss() {
  return src(config.src.scss)
    .pipe(plumber())
    .pipe(stylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: true,
      grid: "autoplace"
    }))
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(config.build.css))
}