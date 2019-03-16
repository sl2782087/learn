// A instance B 检测 B.prototype 是否在A的原型链上(可以通过__proto__或Object.getPrototypeOf查询)
//isPrototypeOf() 与 instanceof 运算符不同。在表达式 "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。
function Son() {}
var s = new Son();

console.log("实例", s instanceof Son);
console.log("实例", Son.prototype.isPrototypeOf(s));

function Parent2() {}
function Son2() {}
Son2.prototype = new Parent2();
Son2.prototype.constructor = Son2;
var s2 = new Son2();

console.log(
  "传统继承",
  s2 instanceof Son2,
  s2 instanceof Parent2,
  Son2.prototype instanceof Parent2
);
console.log(
  "传统继承",
  Son2.prototype.isPrototypeOf(s2),
  Parent2.prototype.isPrototypeOf(s2),
  Parent2.prototype.isPrototypeOf(Son2.prototype)
);

function Parent3() {}
function Son3() {}

var s3 = {};
Object.setPrototypeOf(Son3.prototype, Parent3.prototype);
Object.setPrototypeOf(s3, Son3.prototype);
console.log(
  "原型设置",
  s3 instanceof Parent3,
  s3 instanceof Son3,
  Son3.prototype instanceof Parent3
);
console.log(
  "原型设置",
  Parent3.prototype.isPrototypeOf(s3),
  Son3.prototype.isPrototypeOf(s3),
  Parent3.prototype.isPrototypeOf(Son3.prototype)
);

class Parent4 {}
class Son4 extends Parent4 {}

var s4 = new Son4();

console.log(
  "类继承",
  s4 instanceof Son4,
  s4 instanceof Parent4,
  Son4.prototype instanceof Parent4
);
console.log(
  "类继承",
  Son4.prototype.isPrototypeOf(s4),
  Parent4.prototype.isPrototypeOf(s4),
  Parent4.prototype.isPrototypeOf(Son4.prototype)
);
