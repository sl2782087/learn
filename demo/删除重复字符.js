/*
 * @Author: wangzongyu
 * @Date: 2020-11-29 17:49:55
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-29 19:17:57
 * @Description:
 * @FilePath: \learn\demo\删除重复字符.js
 */
/**
 * ## 问题 2
 * 删除一个字符串中相邻的连续 n 次出现的字符
 *
 * 举例：removeRepeats('1223', 2) => '13'
 * 举例：removeRepeats('12233324', 3) => '12224' => '14'
 *
 * @param {String} str - 原始字符串
 * @param {Number} repeat - 重复的次数
 * @return {String} 删除后的字符串
 */

// 正则方式
function removeRepeats(str, repeat) {
  let index = 0;
  while (index < str.length) {
    const s = str[index];
    const reg = new RegExp(`${s}{${repeat},}`);
    const match = str.match(reg);
    if (match) {
      str = str.replace(match[0], "");
      index = -1;
    }
    index++;
  }
  return str;
}

// 递归
function removeRepeats2(str, repeat) {
  let repeatNum = 1;
  const arr = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      repeatNum++;
      i >= str.length - 1 && arr.push([str[i], repeatNum]);
    } else {
      repeatNum >= repeat && arr.push([str[i - 1], repeatNum]);
      repeatNum = 1;
    }
  }
  if (arr.length > 0) {
    arr.forEach(([s, r]) => {
      str = str.replace("".padEnd(r, s), "");
    });
    str = removeRepeats2(str, repeat);
  }
  return str;
}
removeRepeats2("1772222733324", 3);
