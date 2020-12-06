/*
 * @Author: wangzongyu
 * @Date: 2020-11-24 23:31:01
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-30 21:04:47
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

const throttle = (fn, wait) => {
  let inThrottle, lastTime, lastFn;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(this.args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
