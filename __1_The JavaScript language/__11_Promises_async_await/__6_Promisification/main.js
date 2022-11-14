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

  loadScriptPromise("script.js").then(function (script) {
    console.log(script);
    sayHello();
  });
}
