function Fn(name) {
  //两种判断方法都可以
  console.log("instanceof判断：", this instanceof Fn);
  console.log("new.target判断：", new.target);
  //处理方法
  if (!new.target) {
    return new Fn(name);
  }
  this.name = name;
}

const f1 = new Fn("wang");
const f2 = Fn("yu");
console.log(f1, f2);
