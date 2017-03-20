
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.conf.js');
var htmlWebpackPlugin = require('html-webpack-plugin');
var friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// 将热重载相关代码添加到条目块
Object.keys(webpackBaseConfig.entry).forEach(function (element) {
    webpackBaseConfig.entry[element] = ['./build/dev-client'].concat(webpackBaseConfig.entry[element])
});

module.exports = webpackMerge(webpackBaseConfig, {
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        new friendlyErrorsWebpackPlugin()
    ]
});