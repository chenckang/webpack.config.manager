/**
* Copyright(c) Alibaba Group Holding Limited.
*
* Authors:
*    colin.ck <colin.ck@alibaba-inc.com>
*/
'use strict';
const PROJECT_ROOT = process.cwd();
let path = require('path');

function deepmerge(source, target) {
  for( let i in target) {
    if (target.hasOwnProperty(i)) {
      let t = target[i];

      if (Object.prototype.toString.call(t) === '[object Array]') {
        if (!source[i]) {
          source[i] = [];
        }

        for (let j = 0, l = t.length; j < l; j++) {
          if (typeof(t[j] === 'function')) {
            source[i].push(t[j]);
          }
          else {
            deepmerge(source[i], t[j]);
          }
        }
      }
      else if(Object.prototype.toString.call(t) === '[object Object]') {
        if (!source[i]) {
          source[i] = {};
        }

        deepmerge(source[i], t);
      }
      else {
        source[i] = target[i];
      }
    }
  }
}

function mergeConfig(source, target) {
  if (typeof source === 'function') {
    source = source.call(null);
  }

  if (typeof target === 'function') {
    target = target.call(null);
  }

  deepmerge(source, target);

  return source;
}

module.exports = function(e) {
  let env = e || process.env.WEBPCAK_ENV || 'local';
  let configPath = 'webpack.config/webpack.config.js';
  let envConfigPath = `webpack.config/webpack.config.${env}.js`;

  let config;

  try {
    config = require(path.join(PROJECT_ROOT, configPath));
  }
  catch(e) {
    console.warn(e);
    config = {};
  }

  let envConfig;

  try {
    envConfig = require(path.join(PROJECT_ROOT, envConfigPath));
  }
  catch(e) {
    console.warn(e);
    envConfig = {};
  }

  return mergeConfig(config, envConfig);
};
