var gulp = require('gulp');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

gulp.task('webpack', function() {
  var compiler = webpack(require('./webpack.config.js'));

  new WebpackDevServer(compiler, {}).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('default', function() {
  runSequence('webpack');
});
