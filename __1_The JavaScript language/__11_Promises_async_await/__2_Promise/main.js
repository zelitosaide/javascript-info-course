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

  // promise.then(function (data) {
  //   print(data);
  // });
}

label04: {
  const promise = new Promise(function (resolve, reject) {
    reject(new Error("Whoops!")); // use Error object
  });

  promise.then(null, function (error) {
    print(error.message);
  });
}

label05: {
  const promise = new Promise(function (resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });

  // promise.then(function (data) { print(data); });
}

label06: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("done!") }, 1000);
  });

  // resolve runs the first function in .then
  // promise.then(
  //   function (result) { print(result); }, // shows "done!" after 1 second
  //   function (error) { print(error.message); } // doesn't run
  // );
}

label07: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Whoops!"));
    }, 5000);
  });

  // reject runs the second function in .then
  promise.then(
    function (result) { print(result); }, // doesn't run
    function (error) { print(error.message); } // shows "Whoops!" after 5 second
  );
}

label08: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("done!") }, 3000);
  });

  // promise.then(print); // shows "done!" after 3 second
}

label09: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Whoops!"));
    }, 500);
  });

  promise.then(null, print);  // shows an Error object
}

label10: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Whoops!"));
    }, 6000);
  });

  promise.catch(print);  // shows an Error object
}