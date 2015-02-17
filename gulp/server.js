'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var spa = require("browser-sync-spa");

module.exports = function(options) {

  function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.instance = browserSync.init(files, {
      startPath: '/',
      server: {
        baseDir: baseDir
      },
      browser: browser
    });
  }

  browserSync.use(spa({
    selector: '[ng-app]'// Only needed for angular apps
  }));


  gulp.task('serve', ['watch'], function () {
    browserSyncInit([
      options.tmp + '/serve',
      options.src
    ], [
      options.tmp + '/serve/**/*.{css,js,jsx,html}'
    ]);
  });

  gulp.task('serve:dist', ['build'], function () {
    browserSyncInit(options.dist);
  });

  gulp.task('serve:e2e', ['inject'], function () {
    browserSyncInit([options.tmp + '/serve', options.src], null, []);
  });

  gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit(options.dist, null, []);
  });
};
