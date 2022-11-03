const { log: print } = console;

label01: {
  const promise = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("Error happened!")); // ignored
    setTimeout(function () { resolve("OK"); }, 1000); // ignored
  });

  // promise.then(
  //   function (value) { print(value); }
  // );
}

label02: {
  const promise = new Promise(function (resolve, reject) {
    resolve();  // what is the result???
  });

  // promise.then(function (data) {
  //   print(data);  // print "undefined"
  // });
}

label03: {
  const promise = new Promise(function (resolve, reject) {
    resolve("done", "OK");  // what is the result???
  });

  promise.then(function (data) {
    print(data);
  });
}