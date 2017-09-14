'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    filename: "[name].[hash].js",
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
