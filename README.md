# webpack配置文件管理器

## 使用介绍

在应用项目的的根目录下创建`webpack.config`目录作为管理器的默认使用目录，使用`webpack.config.js`和`webpack.config.${process.node.ENV}.js`的作为并集作为最终的配置文件。

其中在`webpack.config.${process.node.ENV}.js`中的配置具备更高的优先级，也就是在最终生成的配置项中`webpack.config.${process.node.ENV}.js`的配置项会覆盖`webpack.config.js`的同名配置。

示例：

设ENV=local，则管理器将使用:

`webpack.config/webpack.config.js`和`webpack.config/webpack.config.local.js`作为配置文件。

使用示例：

配置内置gulp任务，在gulp.js中：

```javascript
const gulp = require('gulp');
const webpackConfigManager= require('@ali/webpack.config.manager');

webpackConfigManager.gulp(gulp);
```

获取合并的配置文件，如下：

```javascript
const webpackConfigManager= require('@ali/webpack.config.manager');

let productionConf = webpackConfigManager.config('production'); //合并`webpack.config/webpack.config.js`和`webpack.config/webpack.config.production.js`
```

获取内置的webpack的config文件地址：

```javascript
const execSync = require('child_process').execSync;
const webpackConfigManager= require('@ali/webpack.config.manager');

let configPath = webpackConfigManager.configPath;

execSync(`ENV=dev webpack-dev-server --config ${configPath}`)
```

npm_script使用：

```
// package.json
{
  ...
  "scripts": {
    "build": "ENV=production webpack --config webpack.config.js"
  },
  ...
}

// webpack.config.js
module.exports = require('../index').config;

```

## gulp任务

### 基础任务

> clean

用于清除上一次的编译结果

### 开发任务

使用webpack-dev-server启动本地服务，配置使用情况如下：

> dev

选取配置`webpack.config/webpack.config.js`和`webpack.config/webpack.config.dev.js`

### 自定义任务

例：

```javascript
const shell = require('gulp-shell');
const webpackConfigManager= require('@ali/webpack.config.manager');

gulp.task('custom', shell.task([
  `ENV=custom webpack-dev-server --config ${webpackConfigManager.configPath}`
]));

```

选取配置`webpack.config/webpack.config.js`和`webpack.config/webpack.config.custom.js`作为最终合并配置启动`webpack-dev-server`
