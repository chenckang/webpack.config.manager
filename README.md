# Webpack configuration manager

## Usage

To use ***webpack.config.manager*** you should relay on the directory named 'webpack.config' in the root of you appliction. ***webpack.config.manager*** use the environment variables —— `WEBPACK_ENV` to merge the specific configuration to generate the final configuration.

For example：

Presumably set `WEBPACK_ENV=production`, then ***webpack.config.manager*** will use the ***webpack.config.js*** and ***webpack.config.production.js*** under the 'webpack.config' directory to generate the final configuration.

Here are some advanced examples:

Use the config interface

```javascript
const webpackConfigManager= require('webpack.config.manager');

let productionConf = webpackConfigManager.config('production'); //合并`webpack.config/webpack.config.js`和`webpack.config/webpack.config.production.js`
```

Get the inner configuration path

```javascript
const execSync = require('child_process').execSync;
const webpackConfigManager= require('webpack.config.manager');

let configPath = webpackConfigManager.configPath;

execSync(`WEBPACK_ENV=dev webpack-dev-server --config ${configPath}`)
```

Use as npm_scripts

```javascript
// package.json
{
  ...
  "scripts": {
    "build": "WEBPACK_ENV=production webpack --config webpack.config.js"
  },
  ...
}

// webpack.config.js
module.exports = require('../index').config;
```

## Why webpack.config.manager

When it comes to develop a much more advanced app with webpack, one may use one configuration for development and another for publish only. So we can add ***webpack.config.js*** for development and ***webpack.config.production.js*** for publish，but the problem is this two files may be just similar to each other, expect that you may add some additional plugins to optimize the online version, for example use `JSUglify` plugin for production.

How about we just require ***webpack.config.js*** and then add some other code in ***webpack.config.production.js***, like:

```javascript
require('webpack.config.js').plugins.push(somePlugins);
```

That seems work, even through not graceful. But what if we do not what something in development, for example if we don't want `output.pathInfo` and so on, and even under more complex situation, we need to provide multiple development scenarios, one for local ajax mock and one for real remote ajax request. To meet all these particular demands, more and more ugly code will be added to you configuration files, finally you may find youself in mess.

Now with ***webpack.config.manager***, things will be much easyier. For it can auto merge configuration for different purposes. With a base configuration ***webpack.config.js***, if you want to develop locally, then set `WEBPCAK_ENV=local`, the output configuration is the merged result of ***webpack.config.js*** and ***webpack.config.local.js***, and so forth.

Check out the [example](https://github.com/chenckang/webpack.config.manager/tree/master/example) to find more details.
