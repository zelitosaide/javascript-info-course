// label01: {
//   Promise.all([
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(1);
//       }, 3000);
//     }),
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(2);
//       }, 2000);
//     }),
//     new Promise(function (resolve) {
//       setTimeout(function () {
//         resolve(3);
//       }, 1000);
//     }),
//   ]).then(console.log);
// }

// label02: {
//   const urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://api.github.com/users/jeresig",
//   ];

//   // map every url to the promise of the fetch
//   const requests = urls.map(function (url) {
//     return fetch(url);
//   });

//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests).then(function (responses) {
//     responses.forEach(function (response) {
//       console.log(`${response.url}: ${response.status}`);
//     });
//   });
// }

// label03: {
//   const urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://api.github.com/users/jeresig",
//   ];

//   const requests = urls.map(function (url) {
//     return fetch(url);
//   });

//   Promise.all(requests)
//     .then(function (responses) {
//       return Promise.all(
//         responses.map(function (response) {
//           return response.json();
//         })
//       );
//     })
//     .then(function (users) {
//       users.forEach(function (user) {
//         console.log(user.name);
//       });
//     });
// }

// label04: {
//   Promise.all([
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(1);
//       }, 1000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         reject(new Error("Whoops!"));
//       }, 2000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3);
//       }, 3000);
//     }),
//   ]).catch(console.log);
// }

// label05: {
//   Promise.all([
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(1);
//       }, 1000);
//     }),
//     2,
//     3,
//   ]).then(console.log);
// }

// label06: {
//   const urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://no-such-url",
//   ];

//   const requests = urls.map(function (url) {
//     return fetch(url);
//   });

//   Promise.all(requests).then(console.log).catch(console.log);

//   Promise.allSettled(requests).then(console.log);
// }

// label07: {
//   const numbers = [1, 2, 3];
//   let usingPromiseAll, usingPromiseAllSettled;

//   Promise.all(numbers).then(function (results) {
//     usingPromiseAll = results;
//   });

//   Promise.allSettled(numbers).then(function (results) {
//     usingPromiseAllSettled = results;
//   });

//   setTimeout(function () {
//     usingPromiseAll.forEach(function (result) {
//       console.log(result);
//     });

//     console.log("/|//|//|//|");
//     usingPromiseAllSettled.forEach(function (result) {
//       console.log(result.status, result.value);
//     });
//   }, 1000);
// }

// label08: {
//   Promise.allSettled([
//     1,
//     2,
//     new Promise(function () {
//       throw new Error("Whoops!");
//     }),
//   ]).then(console.log);
// }

// label09: {
//   const urls = [
//     "https://api.github.com/users/iliakan",
//     "https://api.github.com/users/remy",
//     "https://no-such-url",
//   ];

//   const requests = urls.map(function (url) {
//     return fetch(url);
//   });

//   Promise.allSettled(requests).then(function (results) {
//     results.forEach(function (result) {
//       if (result.status === "fulfilled") {
//         console.log(result.value.url + ": " + result.value.status);
//       }
//       if (result.status === "rejected") {
//         console.log(result.reason);
//       }
//     });
//   });
// }

// label10: {
//   if (!!Promise.allSettled) {
//     Promise.allSettled = function (promises) {
//       const convertedPromises = promises.map(function (promise) {
//         return Promise.resolve(promise).then(
//           function (value) {
//             return { status: "fulfilled-", value };
//           },
//           function (reason) {
//             return { status: "rejected-", reason };
//           }
//         );
//       });

//       return Promise.all(convertedPromises);
//     };

//     Promise.allSettled([1, 2, 3]).then(console.log);
//   }
// }

// label11: {
//   if (!Promise.allSettled) {
//     const resolveHandler = function (value) {
//       return { status: "fulfilled-", value };
//     };

//     const rejectHandler = function (reason) {
//       return { status: "rejected-", reason };
//     };

//     Promise.allSettled = function (promises) {
//       const convertedPromises = promises.map(function (promise) {
//         return Promise.resolve(promise).then(resolveHandler, rejectHandler);
//       });

//       return Promise.all(convertedPromises);
//     };

//     Promise.allSettled([1, 2, 3]).then(console.log);
//   }
// }

// label12: {
//   Promise.race([2, 3, 4]).then(console.log);

//   Promise.race([
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         reject(new Error("Whoops!"));
//       }, 1000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(1);
//       }, 1000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3);
//       }, 1000);
//     }),
//   ]).then(console.log, console.log);
// }

// label13: {
//   Promise.race([
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(1);
//       }, 1000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         reject(new Error("Whoops!"));
//       }, 2000);
//     }),
//     new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3);
//       }, 3000);
//     }),
//   ]).then(console.log, console.log);
// }

label14: {
  Promise.any([
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error("Whoops!"));
      }, 1000);
    }),
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(2);
      }, 2000);
    }),
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(3);
      }, 3000);
    }),
  ]).then(console.log);
}

label15: {
  Promise.any([
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error("Whoops!"));
      }, 1000);
    }),
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error("Ouch!"));
      }, 2000);
    }),
  ]).catch(function (error) {
    console.log(error.constructor.name);
    console.log(error.errors[0]);
    console.log(error.errors[1]);
  });
}

label16: {
  const cache = new Map();

  function loadCached(url) {
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url));
    }

    return fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        cache.set(url, text);
        return text;
      });
  }
}

label17: {
  Promise.reject(new Error("Whoops!")).catch(console.log);
}
