// Array.prototype.toString = function () {
//   console.log("a toString");
//   return 1;
// };
// Array.prototype.valueOf = function () {
//   console.log("a valueOf");
//   return 2;
// };
// Array.prototype[Symbol.toPrimitive] = function () {
//   console.log("a toPrimitive");
//   return 3;
// };

// const arr = [1];

// console.log(parseInt(arr));

Object.prototype.toSting = function () {
  console.log("string");
  return "string";
};
Object.prototype.valueOf = function () {
  console.log("valueOf");
  return 1;
};

var f = new Boolean(false);
console.log(1 + f);
console.log(new String("ddd"));
console.log({ string: 1 });
