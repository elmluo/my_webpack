var dialog = require('./components/dialog/dialog.js');
var dialogTpl = dialog().tpl;

/*搭建DOM结构frame*/
var oBody = document.getElementsByTagName('body')[0];
var dialogContainer = document.createElement('div');
alert(dialogContainer);
console.log(oBody);
oBody.appendChild(dialogContainer);

/*插入组件*/
dialogContainer.innerHTML = dialogTpl;

var App = function () {
    alert(dialog().tpl);
};

new App();