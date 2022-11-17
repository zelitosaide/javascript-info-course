label01: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(null, script);
    };
    script.onerror = function () {
      callback(new Error("Whoops!..Something went wrong trying to load!"));
    };
    document.head.append(script);
  };

  // loadScript("script.js", function (error, script) {
  //   sayHello();
  //   console.log(script);
  // });

  const loadScriptPromise = function (src) {
    return new Promise(function (resolve, reject) {
      loadScript(src, function (error, script) {
        if (error) {
          reject(error);
        } else {
          resolve(script);
        }
      });
    });
  };

  // loadScriptPromise("script.js").then(function (script) {
  //   console.log(script);
  //   sayHello();
  // });
}

label02: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(null, script);
    };
    script.onerror = function () {
      callback(new Error("Whoops!.. error on load script"));
    };
    document.head.append(script);
  };

  const promisify = function (func) {
    return function (...args) {
      // return a wrapper-function
      return new Promise(function (resolve, reject) {
        function callback(error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
        args.push(callback);
        console.log(args);
        // func(...args);
        func.call(this, ...args);
      });
    };
  };

  // const loadScriptPromise = promisify(loadScript);

  // loadScriptPromise("script.js").then(function () {
  //   sayHello();
  // });
}

label03: {
  const loadScript = function (src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function () {
      callback(null, script);
    };
    script.onerror = function () {
      callback(new Error("Whoops!.. error on load script"));
    };
    document.head.append(script);
  };

  const promisify = function (func) {
    return function (...args) {
      return new Promise(function (resolve, reject) {
        args.push(function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
        func(...args);
      });
    };
  };

  const loadScriptPromise = promisify(loadScript);

  loadScriptPromise("script.js").then(function () {
    sayHello();
    console.log("Finished");
  });
}
