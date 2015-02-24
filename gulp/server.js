'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

module.exports = function(options) {

  function browserSyncInit(baseDir, browser) {
    browserSync.instance = browserSync.init({
      startPath: '/',
      server: {
        baseDir: baseDir
      },
      browser: browser
    });
  }

  browserSync.use(browserSyncSpa());

  gulp.task('serve', ['watch'], function () {
    browserSyncInit([options.tmp + '/serve', options.src]);
  });

  gulp.task('serve:dist', ['build'], function () {
    browserSyncInit(options.dist);
  });

  gulp.task('serve:e2e', ['inject'], function () {
    browserSyncInit([options.tmp + '/serve', options.src], []);
  });

  gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit(options.dist, []);
  });
};
