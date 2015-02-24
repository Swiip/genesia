'use strict';

var gulp = require('gulp');

module.exports = function(options) {
  gulp.task('watch', ['styles', 'webpack:watch'], function () {
    gulp.watch([options.src + '/**/*.scss'], ['styles']);
  });
};
