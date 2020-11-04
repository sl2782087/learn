/*
    export 是 ES6 module 规范中的导出方法
*/
export const xxx = 1;
export default xxx;

/*
    exports 和 module.exports 是 commonjs 规范（即node中）中的导出方法。
*/
exports.xxx = 1;
module.exports.xxx = 1;

/*
    module 指模块本身（node中一个文件就是一个模块），module.exports为最终导出的对象，
    而 exports 变量只是 module.exports 的一个引用，所以不能使用如下写法
*/
exports = {
  xxx: 1,
};

/*
    会断开 exports 与 module.exports 之间的关联 导致导出失败
    但是 module.exports 支持这种写法
*/
module.exports = {
  xxx: 1,
};
