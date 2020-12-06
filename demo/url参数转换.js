/*
 * @Author: wangzongyu
 * @Date: 2020-11-29 16:42:42
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-29 17:46:36
 * @Description:
 * @FilePath: \learn\demo\url参数转换.js
 */

/**
 * ## 问题 1
 * 解析 url 中的 queryString
 *
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D
 * 输出：
 * {
 *  name: "coder",
 *  age: "20",
 *  callback: "https://youzan.com?name=test",
 *  list: ["a"],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  }
 * }
 */

const parseUrl = (url) => {
  if (!url) return {};
  let [, params] = url.split("?");
  if (!params) return {};
  const obj = {};
  params = decodeURIComponent(params).split("&");
  // 也可以使用 for 循环，由于forEach会有一些检测 ，所以比 for 循环效率慢一些
  params.forEach((item) => {
    let [key, value] = item.split("=");
    // 如果参数中 未对%好进行转义 此处会报 URI malformed 错误
    try {
      if (key.endsWith) {
        // 参数中数组格式为 list[] = a,b,c 所以特殊处理
        obj[key.replace("[]", "")] = value.split(",");
      } else {
        obj[key] = JSON.parse(value);
      }
    } catch (error) {
      obj[key] = value;
    }
  });
  return obj;
};

const parseParams = (params) => {
  if (Object.prototype.toString.call(params) !== "[object Object]") return "";
  let paramStr = "";
  const keys = Object.keys(params); // 避免掉对象原型上的方法，也可以直接for in 循环 ，再通过hasOwnProperty判断
  keys.forEach((key) => {
    paramStr += `${paramStr ? "&" : ""}${key}=${JSON.stringify(params[key])}`;
  });
  return encodeURIComponent(paramStr);
};

const test = parseParams({
  name: "wang",
  age: 28,
  like: ["游戏", "篮球"],
  lover: { name: "彭璐", age: 23, like: ["守望先锋"] },
});
const test2 = parseUrl(`www.baidu.com?${test}`);
