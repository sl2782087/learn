Array.prototype.toString = function () {
  console.log("a toString");
  return 1;
};
Array.prototype.valueOf = function () {
  console.log("a valueOf");
  return 2;
};
// Array.prototype[Symbol.toPrimitive] = function () {
//   console.log("a toPrimitive");
//   return 3;
// };

const arr = [1];

console.log(parseInt(arr));
