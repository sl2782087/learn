/*
 * @Author: wangzongyu
 * @Date: 2020-11-24 23:31:01
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-25 14:49:41
 * @Description:
 * @FilePath: \learn\demo\防抖节流.js
 */
const debounce = (fn, time) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), time);
  };
};
