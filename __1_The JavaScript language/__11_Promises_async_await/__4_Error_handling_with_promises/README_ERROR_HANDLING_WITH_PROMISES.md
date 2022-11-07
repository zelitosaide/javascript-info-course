# Error handling with promises

Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That's very convenient in practice.

For instance, in the code below the URL to `fetch` is wrong (no such site) and `.catch` handles the error:

```javascript
fetch("https://no-such-server.blabla")  // rejects
  .then(function (response) {
    return response.json();
  })
  .catch(function (error) {   
    // TypeError: failed to fetch (the text may vary)
    console.log(error);
  });
```

As you can see, the `.catch` doesn't have to be immediate. It may appear after one or maybe several `.then`.

Or, maybe, everything is all right with the site, but the response is not valid JSON. The easiest way to catch all errors is to append `.catch` to the end of chain:

```javascript
fetch("./user.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    return fetch(`https://api.github.com/users/${user.username}`)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (githubUser) {
    return new Promise(function(resolve, reject) {
      const img = document.createElement("img");
      img.src = githubUser.avatar_url;
      img.style.width = "100px";
      document.body.append(img);

      setTimeout(function() {
        img.remove();
        resolve(githubUser);
      }, 3000);
    });
  })
  .then(function (githubUser) {
    console.log(githubUser);
  })
  .catch(function (error) {
    console.log(error.message);
  });
```

Normally, such `.catch` doesn't trigger at all. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it.

## Implicit try...catch

The code of a promise executor and promise handlers has an "invisible" `try..catch` around it. If an exception happens, it gets caught and treated as a rejection.

For instance, this code:

```javascript
new Promise(function(resolve, reject) {
  throw new Error("Whoops!");
}).catch(console.log);  // Error: Whoops!
```

...Works exactly the same as this:

```javascript
new Promise(function(resolve, reject) {
  reject(new Error("Whoops!"));
}).catch(console.log);  // Error: Whoops!
```

The "invisible `try..catch`" around the executor automatically catches the error and turns it into rejected promise.

This happens not only in the executor function, but in its handlers as well. If we `throw` inside a `.then` handler, that means a rejected promise, so the control jumps to the nearest error handler.

Here's an example:

```javascript
new Promise(function(resolve, reject) {
  resolve("OK");
}).then(function(result) {
  throw new Error("Whoops!"); // rejects the promise
}).catch(console.log);  // Error: Whoops!
```

This happens for all errors, not just those caused by the `throw` statement. For example, a programming error:

```javascript
new Promise(function(resolve, reject) {
  resolve("OK");
}).then(function(result) {
  blabla(); // no such function
}).catch(console.log);  // ReferenceError: blabla is not defined
```

The final `.catch` not only catches explicit rejections, but also accidental errors in the handlers above.

## Rethrowing