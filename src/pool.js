const promises = [];

function add(promise) {
  promises.push(promise);
}

async function resolve() {
  for (const promise of promises) {
    await promise;
  }
}

module.exports = {
    add,
    resolve,
};