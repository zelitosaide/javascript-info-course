# Promise API

There are 6 static methods in the `Promise` class. We'll quickly cover their use cases here.

## Promise.all

Let's say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done. 

That's what `Promise.all` is for.

The syntax is:

```javascript
const promise = Promise.all(iterable);
```

`Promise.all` takes an iterable (usually, an array of promises) and returns a new promise.

The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

For instance, the `Promise.all` below settles after 3 seconds, and then its result is an array `[1, 2, 3]`:

```javascript
Promise.all([
  new Promise(function(resolve) {
    setTimeout(function() {
      resolve(1);
    }, 3000);
  }), // 1
  new Promise(function(resolve) {
    setTimeout(function() {
      resolve(2);
    }, 2000);
  }), // 2
  new Promise(function(resolve) {
    setTimeout(function() {
      resolve(3);
    }, 1000);
  })  // 3
]).then(console.log); // 1, 2, 3 when promises are ready: each promise contributes an array member
```

Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it's still first in the array of results.

A common trick is to map an array of job data into an array of promises, and then wrap that into `Promise.all`.

For instance, if we have an array of URLs, we can fetch them all like this:

```javascript
const urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig"
];

// map every url to the promise of the fetch
const requests = urls.map(function(url) {
  return fetch(url);
});

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(function(responses) {
    responses.forEach(function(response) {
      console.log(`${response.url}: ${response.status}`);
    });
  });
```