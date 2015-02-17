'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('inject', ['styles', 'scripts'], function () {

    var injectStyles = gulp.src([
      options.tmp + '/serve/{app,components}/**/*.css',
      '!' + options.tmp + '/serve/app/vendor.css'
    ], { read: false });


    var injectScripts = gulp.src([
      options.tmp + '/serve/**/*.js'
    ], { read: false });

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
