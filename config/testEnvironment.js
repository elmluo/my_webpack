var merge = require('webpack-merge');
var devEnv = require('./developEnviroment.js');

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"'
});
