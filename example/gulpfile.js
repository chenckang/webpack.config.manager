/**
* Copyright(c) Alibaba Group Holding Limited.
*
* Authors:
*    colin.ck <colin.ck@alibaba-inc.com>
*/
'use strict';

const gulp = require('gulp');
const shell = require('gulp-shell');
const webpackConfigManager= require('../index');

webpackConfigManager.gulp(gulp);
