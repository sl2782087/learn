/*
 * @Author: wangzongyu
 * @Date: 2020-11-26 21:24:35
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-26 21:54:18
 * @Description:
 * @FilePath: \learn\demo\sum(6)(9).js
 */

// 柯里化方法
const currying = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : currying.bind(null, fn, ...args);
const add = (a, b) => a + b;
const sum = currying(add);

// 链式调用 不推荐 其实返回的是一个函数
const sum2 = (num) => {
  let count = num;
  const add = (newNum) => {
    count += newNum;
    return add;
  };
  add.toString = () => count;
  return add;
};

typeof sum2(1)(2); // 其实是"function"
console.log(sum2(1)(2) + 1); //3  只不过参与运算时toString会自动执行
