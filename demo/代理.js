const obj = {
  num: 1,
};

const a = new Proxy(obj, {
  get(target, key) {
    console.log("p");
    return target[key];
  },
});
const { proxy: b, revoke } = Proxy.revocable(obj, {
  get(target, key) {
    console.log("r");
    return target[key];
  },
});

a.num;
b.num;
revoke();
b.num;


