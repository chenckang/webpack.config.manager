var path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    pathinfo: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'public'), // boolean | string | array, static file location
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  }
};
