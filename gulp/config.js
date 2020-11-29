const srcPath = './src'
const buildPath = './build'

module.exports = {
  pug2html: {
    beautifyHtml: false
  },
  src: {
    html: srcPath + '/pages/*.pug',
    scss: srcPath + '/assets/scss/*.scss',
    js: srcPath + '/assets/js/*.js',
    images: srcPath + '/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + '/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
  }, 
  build: {
    html: buildPath,
    js: buildPath + '/assets/js/',
    css: buildPath + '/assets/css/',
    images: buildPath + '/assets/images/',
    fonts: buildPath + '/assets/fonts/',
  },
  watch: {
    html: srcPath + '/pages/**/*.pug',
    js: srcPath + '/assets/js/**/*.js',
    scss: srcPath + '/assets/scss/**/*.scss',
    images: srcPath + '/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + '/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
  }
}