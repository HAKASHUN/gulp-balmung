/*
 * gulp-balmung
 * https://github.com/HAKASHUN/gulp-balmung
 *
 * Copyright (c) 2014 HAKASHUN
 * Licensed under the MIT license.
 */

var through = require('through2'),
	gutil = require('gulp-util'),
  balmung = require('balmung'),
  Q = require('q');

module.exports = function (param) {
	'use strict';

  var list = [];
  var config = param.config || {};

  if(!config.settings) {
    config.settings = {};
  }

  // Create Balmung Tools
  var tools = balmung.createTools({
    config: config
  });

  /**
   * Balmung Plugin
   */
  function plugin(file, enc, callback) {
    var self = this;
    loadConfig()
      .then(resize, function() {
        self.emit("error",
          new gutil.PluginError("gulp-balmung", "Resize is failed."));
      })
      .then(optimize, function() {
        self.emit("error",
          new gutil.PluginError("gulp-balmung", "Optimize is failed."));
      })
      .then(function() {
        callback();
      });
  }

  /**
   * load Balmung Config
   * @returns {promise|*|r.promise|Q.promise|x.ready.promise}
   */
  function loadConfig() {
    var d = Q.defer();
    tools.settings.load(tools.config, function(err) {
      if(err) {
        return d.reject(err);
      }
      d.resolve();
    });
    return d.promise;
  }

  /**
   * Optimize Resized Images
   * @returns {promise|*|r.promise|Q.promise|x.ready.promise}
   */
  function optimize() {
    var d = Q.defer();
    var optimizer = tools.optimizer;
    if(list.length === 0) {
      d.resolve();
    } else {
      list.forEach(function(task) {
        optimizer.optimize(task.base, task.file, task.ratio);
      });
      optimizer.on('error', d.reject);
      optimizer.on('finish', d.resolve);
    }
    return d.promise;
  }

  /**
   * Resize Images
   * @returns {promise|*|r.promise|Q.promise|x.ready.promise}
   */
  function resize() {
    var d = Q.defer();
    var resizer = tools.resizer;
    resizer.resize();
    resizer.on('resize', function(task) {
      list.push(task);
    });
    resizer.on('error', d.reject);
    resizer.on('finish', d.resolve);
    return d.promise;
  }

	return through.obj(plugin);
};
