var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        example: path.resolve(__dirname, '..', 'app/example.js'),
    },
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
