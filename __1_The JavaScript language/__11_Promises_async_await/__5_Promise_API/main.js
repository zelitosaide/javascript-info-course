label01: {
  Promise.all([
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(1);
      }, 3000);
    }),
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(2);
      }, 2000);
    }),
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve(3);
      }, 1000);
    }),
  ]).then(console.log);
}

label02: {
  const urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig",
  ];

  // map every url to the promise of the fetch
  const requests = urls.map(function (url) {
    return fetch(url);
  });

  // Promise.all waits until all jobs are resolved
  Promise.all(requests).then(function (responses) {
    responses.forEach(function (response) {
      console.log(`${response.url}: ${response.status}`);
    });
  });
}

label03: {
  const urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig",
  ];

  const requests = urls.map(function (url) {
    return fetch(url);
  });

  Promise.all(requests)
    .then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (users) {
      users.forEach(function (user) {
        console.log(user.name);
      });
    });
}
