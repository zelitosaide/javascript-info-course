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
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });

  // promise.then(function (result) {
  //   print(result);
  //   return result * 2;
  // });

  // promise.then(function (result) {
  //   print(result);
  //   return result * 2;
  // });

  // promise.then(function (result) {
  //   print(result);
  //   return result * 2;
  // });
}

label03: {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });

  promise
    .then(function (result) {
      print(result);

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then(function (result) {
      print(result);

      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then(function (result) {
      print(result);
    });
}

label04: {
  const loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = function () {
        resolve(script);
      };
      script.onerror = function () {
        reject(new Error(`Script load error for ${src}`));
      };
      document.head.append(script);
    });
  };

  // loadScript("./script1.js")
  //   .then(function (script) {
  //     one();
  //     print(script);
  //     return loadScript("./script2.js");
  //   })
  //   .then(function (script) {
  //     two();
  //     print(script);
  //     return loadScript("./script3.js");
  //   })
  //   .then(function (script) {
  //     print(script);
  //     three();
  //   });
}

label05: {
  const promise = new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = "./script1.js";
    script.onload = function () {
      resolve(script);
    };
    script.onerror = function () {
      reject(new Error(`Script load error for ./script1.js`));
    };
    document.head.append(script);
  });

  // promise
  //   .then(function (script) {
  //     one();
  //     print(script);

  //     return new Promise(function (resolve, reject) {
  //       const script = document.createElement("script");
  //       script.src = "./script2.js";
  //       script.onload = function () {
  //         resolve(script);
  //       }
  //       script.onerror = function () {
  //         reject(new Error(`Script load error for ./script2.js`));
  //       }
  //       document.head.append(script);
  //     });
  //   })
  //   .then(function (script) {
  //     two();
  //     print(script);

  //     return new Promise(function (resolve, reject) {
  //       const script = document.createElement("script");
  //       script.src = "./script3.js";
  //       script.onload = function () {
  //         resolve(script);
  //       }
  //       script.onerror = function () {
  //         reject(new Error(`Script load error for ./script3.js`));
  //       }
  //       document.head.append(script);
  //     });
  //   })
  //   .then(function (script) {

  //     three();
  //     print(script);

  //   });
}

label04_1: {
  const loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = function () {
        resolve(script);
      };
      script.onerror = function () {
        reject(new Error(`Script load error for ${src}`));
      };
      document.head.append(script);
    });
  };

  // loadScript("./script1.js")
  //   .then(function (script) {
  //     return loadScript("./script2.js");
  //   })
  //   .then(function (script) {
  //     return loadScript("./script3.js");
  //   })
  //   .then(function (script) {
  //     one();
  //     two();
  //     three();
  //   });
}

label04_1: {
  const loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = function () {
        resolve(script);
      };
      script.onerror = function () {
        reject(new Error(`Script load error for ${src}`));
      };
      document.head.append(script);
    });
  };

  loadScript("./script1.js")
    .then((script) => loadScript("./script2.js"))
    .then((script) => loadScript("./script3.js"))
    .then((script) => {
      // scripts are loaded, we can use functions declared there
      one();
      two();
      three();
    });
}
