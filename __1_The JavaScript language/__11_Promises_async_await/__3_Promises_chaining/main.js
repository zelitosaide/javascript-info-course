const { log: print } = console;

label01: {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });

  // promise
  //   .then(function (result) {
  //     print(result);
  //     return result * 2;
  //   })
  //   .then(function (result) {
  //     print(result);
  //     return result * 2;
  //   })
  //   .then(function (result) {
  //     print(result);
  //   });
}

label02: {
  const promise = new Promise(function (resolve) {
    setTimeout(function () { resolve(1); }, 1000);
  });

  promise.then(function (result) {
    print(result);
    return result * 2;
  });

  promise.then(function (result) {
    print(result);
    return result * 2;
  });

  promise.then(function (result) {
    print(result);
    return result * 2;
  });
}

