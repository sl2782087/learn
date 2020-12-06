const event = {
  clientList: {},
  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger(key, ...args) {
    const fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn.apply(this, args);
    }
  },
};
