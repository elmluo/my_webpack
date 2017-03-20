var merge = require('webpack-merge');
var prodEnv = require('./productEnvironment.js');
// NODE_ENV nodeJS开发环境变量
module.exports = merge(prodEnv, {NODE_ENV: '"development"'});

