var config = require('../config');

if (!process.env.NODE_ENV) {    //process.env.NODE_ENV是nodejs自定义服务运行环境的变量
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');
var wepbackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf.js')
    : require('./webpack.dev.conf.js');


// dev服务器监听通讯的默认端口
var port = process.env.PORT || config.dev.env.port;
// 自动打开浏览器，如果没有设置false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
// 为你的客户端API定义HTTP请求代理。
var proxyTable = config.dev.proxyTable;

var app = express();

// webpack编译配置的环境
var compiler = webpack(webpackConfig);
var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

var hotMiddleware = webpackHotMiddleware(compiler, {
   log: function(){}
});

// 当html-webpack-plugin检测到模板更改时强制页面重新加载
compiler.plugin('compilation', function (compilation) {
   compilation.plugin('html-webpack-plugin-after-emit', function(data, cb){
       hotMiddleware.publish({action: 'reload'});
       cb();
   })
});

// 代理api请求
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
});

// HTML5历史API
app.use(require('connect-history-api-fallback')());

// webpack的bundle输出服务
app.use(devMiddleware);

// 启用热重新加载和状态保留编译错误提示
app.use(hotMiddleware);

// 服务端用的纯静态资源static文件路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));


var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
});
