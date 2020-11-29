const { src, dest } = require('gulp')
const webpack = require('webpack-stream')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const eslint = require('gulp-eslint')
const plumber = require('gulp-plumber')

const config = require('../config')

module.exports = function js() {
  return src(config.src.js)
  .pipe(plumber())
  // .pipe(eslint())
  // .pipe(eslint.format())
  .pipe(webpack({
    mode: process.env.NODE_ENV,
    output: {
      filename: '[name].min.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new CircularDependencyPlugin(),
      new DuplicatePackageCheckerPlugin()
    ]
  }))
  .pipe(dest(config.build.js))
}