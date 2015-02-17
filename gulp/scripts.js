'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {

  gulp.task('scripts', function () {
    return browserify({ debug: true })
      .add('./' + options.src + '/index.jsx')
      .transform(babelify)
      .bundle()
      .on('error', options.errorHandler('Browserify'))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/serve'));
  });

};
