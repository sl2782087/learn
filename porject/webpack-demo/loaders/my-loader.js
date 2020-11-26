/*
 * @Author: wangzongyu
 * @Date: 2020-11-22 19:33:58
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-11-22 19:41:38
 * @Description:
 * @FilePath: \webpack-demo\loaders\my-loader.js
 */
module.exports = function (source) {
  const str = source.replace(".", ".my-");
  return str;
};
