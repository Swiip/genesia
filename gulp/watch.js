'use strict';

var gulp = require('gulp');

module.exports = function(options) {
  gulp.task('watch', ['inject'], function () {
    gulp.watch([
      options.src + '/*.html',
      options.src + '/**/*.{scss,js,jsx}'
    ], ['inject']);
  });
};
