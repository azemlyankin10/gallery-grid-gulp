const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const del = require('del')
const browserSync = require('browser-sync').create()
const gutil = require('gulp-util')

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
         .pipe(dest('dist'))
}


const styles = () => {
  return src('src/styles/style.scss')
         .pipe(sass().on('error', sass.logError))
         .pipe(autoprefixer({
           cascade: false,
         }))
         .pipe(gutil.env.type === 'production' ? cleanCss({
          level: 2,
         }) : gutil.noop())
         .pipe(dest('dist'))
         .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
         .pipe(gutil.env.type === 'production' ? htmlMin({
          collapseWhitespace: true,
         }) : gutil.noop())
         .pipe(dest('dist'))
         .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
            'src/js/component/**/*.js',
            'src/js/main.js'
          ])
          .pipe(babel({
            presets: ['@babel/env']
          }))
          .pipe(concat('app.js'))
          .pipe(gutil.env.type === 'production' ? uglify().on('error', notify.onError()) : gutil.noop())
          .pipe(dest('dist'))
          .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

const images = () => {
  return src([
            'src/images/**/*.jpg',
            'src/images/**/*.png',
            'src/images/**/*.svg',
            'src/images/**/*.jpeg',
          ])
          .pipe(imagemin())
          .pipe(dest('dist/images'))
}

const font = () => {
  return src('src/font/*.{woff2,woff}')
         .pipe(dest('dist/font'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.scss', styles)
watch('src/images/**/*.{jpg,png,svg,jpeg}', images)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/font/**', font)

exports.styles = styles
exports.htmlMinify = htmlMinify

exports.default = series(clean, resources, font, htmlMinify, scripts, styles, images, watchFiles)




// gulp --type production  ---- сборка прод
// gulp ---- dev сборка