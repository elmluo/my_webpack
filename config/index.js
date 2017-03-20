var path = require('path');

module.exports = {
    // 生产环境下通用目录、变量命名
    build: {
        env: require('./productEnvironment.js'),
        //前端项目入口页面文件
        index: path.resolve(__dirname, '../dist/index.html'),
        //打包压缩目录
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true
    },

    // 开发环境下通用目录、变量命名
    dev: {
        env: require('./developEnviroment.js'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {}
    }
};