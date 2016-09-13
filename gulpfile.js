var gulp = require('gulp');
var path = require('path');
var swPrecache = require('sw-precache');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var paths = {
  src: 'app/'
};

gulp.task('processCSS', function() {
    return gulp.src('./css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
  });

gulp.task('serve', ['processCSS'], function() {

  browserSync.init({
      server: './app'
    });

  gulp.watch('app/css/**/*.scss', ['processCSS']);
});

gulp.task('default', ['serve']);
