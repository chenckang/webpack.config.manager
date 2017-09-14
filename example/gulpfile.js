/**
* Copyright(c) Alibaba Group Holding Limited.
*
* Authors:
*    colin.ck <colin.ck@alibaba-inc.com>
*/
'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const configPath = require('../index').configPath;

gulp.task('dev', shell.task([
  `ENV=local webpack-dev-server --config ${configPath}`
]));
