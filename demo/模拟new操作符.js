//模拟实现new操作符
function newFn(...[Fn, ...params]) {
  // new调用构造函数创建实例进行了两步操作
  // 第一个操作 创建一个新对象，并将构造函数的原型(prototype)添加到对象原型链上，下面三种方法都可以

  // 第一种
  const obj = Object.create(Fn.prototype);
  // 第二种
  const obj = {};
  Object.setPrototypeOf(obj, Fn.prototype);
  // 第三种
  const obj = {};
  obj.__proto__ = Fn.prototype;

  // 第二个操作 将新对象作为构造函数的this值，执行一遍
  Fn.call(obj, ...params);
  return obj;
}

function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.show = function () {
  console.log(`I'm ${this.name}, I'm ${this.age}`);
};

const wang = new People("wang", 28);
console.log(wang);
wang.show();

const guo = newFn(People, "guo", 18);
console.log(guo);
guo.show();
