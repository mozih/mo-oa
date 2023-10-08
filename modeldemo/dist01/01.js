'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getList = getList;
exports.save = save;
//export表示方法可以被别的文件调用
function getList() {
    console.log('获取数据列表');
}
function save() {
    console.log('保存数据');
}