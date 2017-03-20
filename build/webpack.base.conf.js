var path = require('path');
var config = require('../config');

function dirPath (dir) {
    return path.join(__dirname, '..', dir);  // 相对路径为../dirName
}

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        // publicPath: process.env.NODE_ENV === 'production'
        //     ? config.build.assetsPublicPath
        //     : config.dev.assetsPublicPath
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: [dirPath('src')]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                include: [dirPath('src')]
            }
        ]
    }
};