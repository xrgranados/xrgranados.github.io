var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
  return gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'))
});

gulp.task('js', function(){
  return gulp.src('assets/src/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'))
});

gulp.task('default', [ 'css', 'js' ]);
