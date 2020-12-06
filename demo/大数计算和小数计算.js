/*
 * @Author: wangzongyu
 * @Date: 2020-11-29 19:29:17
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-29 20:09:23
 * @Description:
 * @FilePath: \learn\demo\大数计算和小数计算.js
 */

function bigAdd(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

function bigAdd2(a, b) {
  const maxLength = Math.max(a.length, b.length);
  let carry = 0;
  let re = "";
  // 第一种 兼容性好点
  for (let i = 0; i < maxLength; i++) {
    let num =
      Number(a[a.length - i - 1] || 0) +
      Number(b[b.length - i - 1] || 0) +
      carry;
    carry = Math.floor(num / 10);
    re = (num % 10) + re;
  }
  // 第二种
  const num1 = a.padStart(maxLength, 0);
  const num2 = b.padStart(maxLength, 0);
  for (let i = maxLength - 1; i >= 0; i--) {
    let num = Number(num1[i]) + Number(num2[i]) + carry;
    carry = Math.floor(num / 10);
    re = (num % 10) + re;
  }
  return carry ? carry + re : re;
}

console.log(bigAdd("32146546465465464563", "32463543564635465465465"));
console.log(bigAdd2("32146546465465464563", "32463543564635465465465"));
