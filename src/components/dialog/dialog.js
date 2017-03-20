var tpl = require('./dialog.html');
require('./dialog.less');

function dialog(){
    return {
        name:'dialog',
        tpl: tpl
    }
}

module.exports = dialog;


