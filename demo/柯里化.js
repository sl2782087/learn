/*
 * @Author: wangzongyu
 * @Date: 2020-11-25 15:15:24
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-25 16:41:14
 * @Description:
 * @FilePath: \learn\demo\柯里化.js
 */

const currying = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : currying.bind(null, fn, ...args);

const add = (a, b, c) => {
  return a + b + c;
};

const addFn = currying(add);

console.log(addFn(1)(2)(4));
console.log(addFn(1, 2, 4));
