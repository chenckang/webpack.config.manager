/**
* Copyright(c) Alibaba Group Holding Limited.
*
* Authors:
*    colin.ck <colin.ck@alibaba-inc.com>
*/
'use strict';
const path = require('path');

exports.configPath = path.resolve(__dirname, './webpack.config.manager.js');
exports.config = require('./webpack.config.manager.js');
