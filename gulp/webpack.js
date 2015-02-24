'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync  = require('browser-sync');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {

  var defaultStatsOptions = {
    colors: gutil.colors.supportsColor,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false,
  };

  function webpack(watch, callback) {
    return gulp.src(options.src + '/index.jsx')
      .pipe($.webpack({
        watch: watch,
        module: {
          loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'}
          ],
          noParse: [/lie\.js/, /leveldown/, /levelup/]
        },
        output: {
          filename: 'index.js'
        }
      }, null, function(err, stats) {
        if(err) {
          throw new gutil.PluginError('webpack', err);
        }
        gutil.log(stats.toString(defaultStatsOptions));
        browserSync.reload();
        if(watch) {
          watch = false;
          callback();
        }
      }))
      .pipe(gulp.dest(options.tmp + '/serve'));
  }

  gulp.task('webpack', function () {
    return webpack(false);
  });

  gulp.task('webpack:watch', function (callback) {
    return webpack(true, callback);
  });

};
