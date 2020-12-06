/*
 * @Author: wangzongyu
 * @Date: 2020-11-27 11:37:14
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-27 11:44:38
 * @Description:
 * @FilePath: \learn\demo\高精度计时器.js
 */

function timer(ms) {
  var start = Date.now();
  while (Date.now() - start < ms) {
    console.log(Date.now() - start);
  }
}
timer(10);
