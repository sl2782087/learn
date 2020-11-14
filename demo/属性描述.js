const father = Object.create(
  {},
  {
    name: {
      value: "li",
      writable: true,
      enumerable: false,
      configurable: false,
    },
  }
);

const son = Object.create(father);

// {} { value: 'li', writable: true, enumerable: false, configurable: false }
// writable 必须为true时 子类自有属性表才能重写
console.log(father, Object.getOwnPropertyDescriptor(father, "name"));

son.name = "li";

// 会生成新的描述表，enumerable 和 configurable 都是 true
// { name: 'li' } { value: 'li', writable: true, enumerable: true, configurable: true }
console.log(son, Object.getOwnPropertyDescriptor(son, "name"));

const father2 = Object.create(
  {},
  {
    name: {
      get() {},
      set() {},
      enumerable: true,
      configurable: true,
    },
  }
);

const son2 = Object.create(father2);

// {} {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }
console.log(father2, Object.getOwnPropertyDescriptor(father2, "name"));

son2.name = "li";

// {} undefined
// 使用存取描述符时，直接修改子类中自由属性表无法创建对应属性
console.log(son2, Object.getOwnPropertyDescriptor(son2, "name"));

//{ name: 'li' } { value: 'li', writable: true, enumerable: true, configurable: false }
// 但可以通过修改自由属性描述显式创建
Object.defineProperty(son2, "name", {
  value: "li",
  writable: true,
  enumerable: true,
});

console.log(son2, Object.getOwnPropertyDescriptor(son2, "name"));
