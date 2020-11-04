Object.prototype.getSelf = function () {
  return this;
};
Object.prototype.getClass = function () {
  return this.constructor;
};
Object.prototype.getTypeof = function () {
  return typeof this;
};
Object.prototype.getInstanceof = function () {
  return this instanceof this.constructor;
};

const samples = ["", 100, true, function () {}, {}, [], /./, Symbol()];

const getAttr = (v, v2, cls) => [
  typeof v,
  v2.getTypeof(),
  v instanceof cls,
  v2.getInstanceof(),
];

samples
  .map((v) => [typeof v, getAttr(v, v.getSelf(), v.getClass())])
  .forEach((metaName, attr) => {
    console.log(metaName, ":", attr);
  });
