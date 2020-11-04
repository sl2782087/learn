const extend = function (subClass, baseClass) {
  subClass.baseConstructor = baseClass;
  subClass.base = {};
  baseClass.call(subClass.base);
  console.log(subClass, baseClass);
  console.log("----------------------------------------");
};

function Mouse() {}

function Animal(name) {
  this.name = name;
  this.say = function (message) {
    console.log(this.name + ": " + message);
  };
  this.eat = function () {
    console.log("好吃");
  };
}
function Cat(name) {
  Cat.baseConstructor.call(this, name || "cat");
  this.eat = function (food) {
    if (food instanceof Mouse) {
      Cat.base.eat.call(this);
    } else {
      this.say("我不吃" + food.name);
    }
  };
}
extend(Cat, Animal);

function Tom() {
  Tom.baseConstructor.call(this, "tom");
}
extend(Tom, Cat);

// var cat = new Cat();
var tom = new Tom();
// var mouse = new Mouse();
var unknowObj = { name: "shadow" };

// cat.eat(mouse);
// cat.eat(unknowObj);
// tom.eat(mouse);
tom.eat(unknowObj);
