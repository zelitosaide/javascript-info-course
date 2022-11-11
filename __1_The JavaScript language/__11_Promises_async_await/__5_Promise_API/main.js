label01: {
  Promise.all([
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(1);
      }, 3000);
    }),
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(2);
      }, 2000);
    }),
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(3);
      }, 1000);
    }),
  ]).then(console.log);
}
