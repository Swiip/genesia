'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('styles', function () {
    var injectFiles = gulp.src([
      options.src + '/{app,components}/**/*.less',
      '!' + options.src + '/app/index.less',
      '!' + options.src + '/app/vendor.less'
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
      .pipe($.inject(injectFiles, injectOptions))
      .pipe($.less())

    .pipe($.autoprefixer())
      .on('error', function handleError(err) {
        console.error(err.toString());
        this.emit('end');
      })
      .pipe(gulp.dest(options.tmp + '/serve/'));
  });
};
