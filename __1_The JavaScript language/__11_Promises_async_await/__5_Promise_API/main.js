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

label06: {
  const urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://no-such-url",
  ];

  const requests = urls.map(function (url) {
    return fetch(url);
  });

  Promise.all(requests).then(console.log).catch(console.log);

  Promise.allSettled(requests).then(console.log);
}
