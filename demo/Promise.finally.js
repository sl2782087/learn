/*
 * @Author: wangzongyu
 * @Date: 2020-11-25 16:43:29
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-29 16:38:04
 * @Description:
 * @FilePath: \learn\demo\Promise.finally.js
 */

// 原生已有 模拟实现

Promise.prototype.finally = function (onFinally) {
  return this.then(
    (res) => Promise.resolve(onFinally).then(() => res),
    (err) =>
      Promise.resolve(onFinally).then(() => {
        throw err;
      })
  );
};

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Promise(executor) {
  var _this = this;
  this.state = PENDING;
  this.onFulfilled = [];
  this.onReject = [];
  this.value = undefined;
  this.reason = undefined;
  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED;
      _this.value = value;
      _this.onFulfilled.forEach((fn) => {
        console.log(fn);
        fn(value);
      });
    }
  }
  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED;
      _this.reason = reason;
      _this.onRejected.forEach((fn) => fn(reason));
    }
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(e);
  }
}

Promise.prototype.then = function (onFulfilled, onReject) {
  console.log("dddd", onFulfilled);
  const f =
    onFulfilled === "function"
      ? onFulfilled
      : (c) => {
          console.log(1, c);
        };
  const r =
    onReject === "function"
      ? onReject
      : (c) => {
          throw c;
        };
  console.log(1, this.state);
  if (this.state === FULFILLED) {
    console.log(f);
    this.value = f(this.value);
  }
  if (this.state === REJECTED) {
    this.reason = r(this.reason);
  }
  if (this.state === PENDING) {
    this.onFulfilled.push(f);
    this.onReject.push(r);
  }
  return this;
};

const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(123);
  }, 2000);
});
p.then((res) => {
  console.log(res);
}).then((res) => {
  console.log(2, res);
});
