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
  // const promise = new Promise(function (resolve) {
  //   setTimeout(function () {
  //     resolve(1);
  //   }, 1000);
  // });
  // promise
  //   .then(function (result) {
  //     print(result);
  //     return new Promise(function (resolve) {
  //       setTimeout(function () {
  //         resolve(result * 2);
  //       }, 1000);
  //     });
  //   })
  //   .then(function (result) {
  //     print(result);
  //     return new Promise(function (resolve) {
  //       setTimeout(function () {
  //         resolve(result * 2);
  //       }, 1000);
  //     });
  //   })
  //   .then(function (result) {
  //     print(result);
  //   });
}

label04: {
  // const loadScript = function (src) {
  //   return new Promise(function (resolve, reject) {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = function () {
  //       resolve(script);
  //     };
  //     script.onerror = function () {
  //       reject(new Error(`Script load error for ${src}`));
  //     };
  //     document.head.append(script);
  //   });
  // };
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
  // const promise = new Promise(function (resolve, reject) {
  //   const script = document.createElement("script");
  //   script.src = "./script1.js";
  //   script.onload = function () {
  //     resolve(script);
  //   };
  //   script.onerror = function () {
  //     reject(new Error(`Script load error for ./script1.js`));
  //   };
  //   document.head.append(script);
  // });
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
  // const loadScript = function (src) {
  //   return new Promise(function (resolve, reject) {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = function () {
  //       resolve(script);
  //     };
  //     script.onerror = function () {
  //       reject(new Error(`Script load error for ${src}`));
  //     };
  //     document.head.append(script);
  //   });
  // };
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
  // const loadScript = function (src) {
  //   return new Promise(function (resolve, reject) {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = function () {
  //       resolve(script);
  //     };
  //     script.onerror = function () {
  //       reject(new Error(`Script load error for ${src}`));
  //     };
  //     document.head.append(script);
  //   });
  // };
  // loadScript("./script1.js")
  //   .then((script) => loadScript("./script2.js"))
  //   .then((script) => loadScript("./script3.js"))
  //   .then((script) => {
  //     // scripts are loaded, we can use functions declared there
  //     one();
  //     two();
  //     three();
  //   });
}

label5: {
  // const loadScript = function (src) {
  //   return new Promise(function (resolve, reject) {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = function () {
  //       resolve(script);
  //     };
  //     script.onerror = function () {
  //       reject(new Error(`Script load error for ${src}`));
  //     };
  //     document.head.append(script);
  //   });
  // };
  // loadScript("./script1.js").then(function (script1) {
  //   loadScript("./script2.js").then(function (script2) {
  //     loadScript("./script3.js").then(function (script3) {
  //       one();
  //       two();
  //       three();
  //       print(script1, script2, script3);
  //     });
  //   });
  // });
}

label06: {
  // class Thenable {
  //   constructor(num) {
  //     this.num = num;
  //   }
  //   then(resolve, reject) {
  //     setTimeout(() => {
  //       resolve(this.num * 2);
  //     }, 1000);
  //   }
  // }
  // const promise = new Promise(function (resolve) {
  //   resolve(1);
  // });
  // promise
  //   .then(function (result) {
  //     return new Thenable(result);
  //   })
  //   .then(function (result) {
  //     print(result);
  //   });
}

label07: {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(10);
    }, 1000);
  });

  // promise
  //   .then(function (result) {
  //     return {
  //       then(resolve, reject) {
  //         print(result);
  //         setTimeout(function () {
  //           resolve(Math.pow(result, 2));
  //         }, 1000);
  //       },
  //     };
  //   })
  //   .then(function (result) {
  //     return {
  //       then(resolve, reject) {
  //         print(result);
  //         setTimeout(function () {
  //           resolve(Math.pow(result, 2));
  //         }, 1000);
  //       },
  //     };
  //   })
  //   .then(function (result) {
  //     print(result);
  //   });
}

label08: {
  fetch("./user.json");
  // .then(function (result) {
  //   return result.json();
  // })
  // .then(function (result) {
  //   print(result);
  // });
}

label09: {
  // (async function () {
  //   const response = await fetch("./user.json");
  //   const json = await response.json();
  //   print(json);
  // })();
}

label10: {
  // fetch("user.json")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (user) {
  //     return fetch(`https://api.github.com/users/${user.username}`);
  //   })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (githubUser) {
  //     const img = document.createElement("img");
  //     img.src = githubUser.avatar_url;
  //     img.style.width = "100px";
  //     document.body.append(img);
  //     setTimeout(function () {
  //       img.remove();
  //     }, 3000);
  //   });
}

label11: {
  fetch("user.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      return fetch(`https://api.github.com/users/${user.username}`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (githubUser) {
      return new Promise(function (resolve, reject) {
        const img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.style.width = "100px";
        document.body.append(img);

        setTimeout(function () {
          img.remove();
          resolve(githubUser);
        }, 3000);
      });
    })
    .then(function (githubUser) {
      print(`Finished showing ${githubUser.name}`);
    });
}
