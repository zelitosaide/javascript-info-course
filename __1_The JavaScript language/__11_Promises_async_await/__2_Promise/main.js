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
      // print("settled");
    }, 6000);
  });

  promise.catch(print);  // shows an Error object
}

label11: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve("OK");
      print("settled");
    }, 8000);
  });

  promise.then(print);
}

label12: {
  const myFunction = function () {
    return print("Hello!");
  }

  myFunction();
}

label13: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("value");
    }, 10000);
  });

  promise
    .finally(function () {
      print("Promise ready");
    })
    .then(function (result) {
      print(result);
    });
}

label14: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("value");
    }, 12000);
  });

  promise
    .then(function (result) {
      print(result);
    })
    .finally(function () {
      print("Promise ready");
    });
}

label15: {
  const promise = new Promise(function (resolve, reject) {
    throw new Error("Whoops!...Error!!!!");
  });

  promise
    .finally(function () { print("Promise ready"); })
    .catch(function (error) { print(error.message); });
}

label16: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ status: 200 })
    }, 14000);
  });

  promise
    .finally(function () {
      throw new Error("From Finally");
    })
    .catch(function (error) {
      print(error.message);
    });
}

label17: {
  const loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;

      script.onload = function () {
        resolve(script);
      }
      script.onerror = function () {
        reject(new Error(`Script load error for ${src}`));
      }

      document.head.append(script);
    });
  }

  // const promise = loadScript("./script.js");

  // promise.then(
  //   function (script) { print(`${script.src} is loaded!`); },
  //   function (error) { print(`Error: ${error.message}`); }
  // );

  // promise.then(function (script) {
  //   print("Another handler...", script);
  // });

  // promise.then(function (script) {
  //   print("Another handler...", script);
  //   sayHello();
  // });
}

label18: {
  const delay = function (ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  delay(3000).then(function () {
    print("runs after 3 seconds");
  });
}

label19: {
  const delay = function (ms) {
    return new Promise(function (_, reject) {
      setTimeout(reject, ms);
    });
  }

  delay(18000).catch(function (error) {
    print(error === undefined);
  });
}