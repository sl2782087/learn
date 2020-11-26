/*
 * @Author: wangzongyu
 * @Date: 2020-11-25 16:57:55
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-26 22:49:01
 * @Description:
 * @FilePath: \learn\demo\sleep.js
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fn = async () => {
  console.log(1);
  await sleep(3000);
  console.log(2);
};
fn();
