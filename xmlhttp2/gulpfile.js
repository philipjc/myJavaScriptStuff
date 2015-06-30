var gulp = require('gulp');
var express = require('express');
var livereload = require('connect-livereload');
var refresh = require('gulp-livereload');
var url             = require('url');
var proxy           = require('proxy-middleware');
var shell = require('gulp-shell');

// var config = require('./config');

var server = express();

server.use(livereload({
  port: 4000
}));

server.use('/api', proxy(url.parse('http://localhost:8882/api')));
server.use(express.static('./'));



  // refresh.listen(config.ports.livereload);


gulp.task('default', function () {
  server.listen(4000);
  
  return gulp.src('')
    .pipe(shell([
      'stubby -dw config.yaml'
    ]));
});

 // node express server
 // proxy to stubby
