const obj = {
  _name: 100,
  get name() {
    return this._name;
  },
  set name(newValue) {
    return (this._name = newValue);
  },
};

Object.isFrozen(obj);

obj._name = 200;
console.log(obj._name, obj.name);

obj.name = 300;
console.log(obj._name, obj.name);
