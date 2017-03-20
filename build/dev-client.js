/* eslint-disable */
require('eventsource-polyfill');
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');   // 热加载

hotClient.subscribe(function (event) {
    if(event.action === 'reload') {
        window.location.reload()
    }
});