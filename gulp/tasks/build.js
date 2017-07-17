let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let del = require('del');
let usemin = require('gulp-usemin');
let rev = require('gulp-rev');
let cssnano = require('gulp-cssnano');
let uglify = require('gulp-uglify');
let browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  })
})

gulp.task('deleteDistFolder', function() {
  return del('./dist');
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./dist/assets/images'));
})

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./dist'));
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
