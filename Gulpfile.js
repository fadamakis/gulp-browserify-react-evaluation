var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var stylus = require('gulp-stylus');

// Get one .styl file and render 
gulp.task('stylus', function () {
  gulp.src('./css/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});

gulp.task('browserify', function(){
    return browserify('./js/app.js')
    .transform(babelify, { stage :0 })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('default', ['stylus','browserify']);

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['browserify']);
    gulp.watch('css/*.styl', ['stylus']);
});