'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('styles', function () {
    var injectFiles = gulp.src([
      options.src + '/**/*.less',
      '!' + options.src + '/index.less',
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/app/', '');
        filePath = filePath.replace(options.src + '/components/', '../components/');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    return gulp.src(options.src + '/index.less')
      //.pipe($.inject(injectFiles, injectOptions))
      .pipe($.less())
      .on('error', options.errorHandler('Less'))
      .pipe($.autoprefixer())
      .on('error', options.errorHandler('Autoprefixer'))
      .pipe(gulp.dest(options.tmp + '/serve/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
