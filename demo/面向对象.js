class Animal {
  constructor(sex) {
    this.sex = sex;
  }
  say(words) {
    console.log(`${this.name}(${this.sex})：${words}`);
  }
  eat() {
    this.say("真好吃");
  }
}

class Cat extends Animal {
  constructor(sex, name = "cat") {
    super(sex);
    this.name = name;
  }
  say() {
    super.say("喵喵喵");
  }
  eat(food) {
    if (food instanceof Mouse) {
      //   super.eat();
      super.say("真好吃");
    } else {
      super.say("我只吃老鼠");
    }
  }
}
class Dog extends Animal {
  constructor(sex, name = "dog") {
    super(sex);
    this.name = name;
  }
  say() {
    super.say("汪汪汪");
  }
}
class Mouse extends Animal {
  constructor(sex, name = "mouse") {
    super(sex);
    this.name = name;
  }
  say() {
    super.say("吱吱吱");
  }
}

const dog = new Dog("公");
const cat = new Cat("母");
const tom = new Cat("公", "tom");
const mouse = new Mouse("公");

dog.say(); // dog:汪汪汪
cat.say(); // cat:喵喵喵
tom.say(); // tom:喵喵喵
cat.eat(mouse); // cat:真好吃
tom.eat(dog); // tom:我只吃老鼠
