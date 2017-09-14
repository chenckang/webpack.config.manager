/**
* Copyright(c) Alibaba Group Holding Limited.
*
* Authors:
*    colin.ck <colin.ck@alibaba-inc.com>
*/
'use strict';

const path = require('path');

const configPath = path.resolve(__dirname, './webpack.config.manager.js');
const shell = require('gulp-shell');

module.exports = function(gulp) {
  gulp.task('dev', shell.task([
    `ENV=local webpack-dev-server --config ${configPath}`
  ]));

  gulp.task('clean', shell.task([
    'rm -rf build/*'
  ]));
};
