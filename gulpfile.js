'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

var options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  bundleLogger: {
    start: function(filepath) {
      startTime = process.hrtime();
      gutil.log('Bundling', gutil.colors.green(filepath) + '...');
    },

    watch: function(bundleName) {
      gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
    },

    end: function(filepath) {
      var taskTime = process.hrtime(startTime);
      var prettyTime = prettyHrtime(taskTime);
      gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
    }
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.js$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
