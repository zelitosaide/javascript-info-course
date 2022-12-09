# Async/await

There's a special syntax to work with promises in a more comfortable fashion, called "async/await". It's surprisingly easy to understand and use.

## Async functions

Let's start with the `async` keyword. It can be placed before a function, like this:

```js
async function fn() {
  return 1;
}
```

The word "async" before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of `1`; let's test it:

```js
async function fn() {
  return 1;
}

fn().then(console.log); // 1
```

...We could explicitly return a promise, which would be the same:

```js
async function fn() {
  return Promise.resolve(1);
}

fn().then(console.log); // 1
```

So, `async` ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. There's another keyword, `await`, that works only inside `async` functions, and it's pretty cool.

## Await

The syntax:

```js
// works only inside async functions
let value = await promise;
```

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

Here's an example with a promise that resolves in 1 second:

```js
async function fn() {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("done!");
    }, 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

fn();
```

The function execution "pauses" at the line `(*)` and resumes when the promises settles, with `result` becoming its result. So the code above shows "done!" in one second.

Let's emphasize: `await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn't cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It's just a more elegant syntax of getting the promise result than `promise.then`. And, it's easier to read and write.

## > Can't use `await` in regular functions

If we try to use `await` in a non-async function, there would be a syntax error:

```js
function fn() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
```

We may get this error if we forget to put `async` before a function. As stated earlier, `await` only works inside an `async` function.

Let's take the `showAvatar()` example from the chapter [Promises chaining](https://javascript.info/promise-chaining) and rewrite it using `async/await`:

1. We'll need to replace `.then` calls with `await`.
2. Also we should make the function `async` for them to work.

```js
async function showAvatar() {
  // read our JSON
  let response = await fetch("user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show github avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.style.width = "100px";
  document.body.append(img);

  // wait 3 seconds
  await new Promise(function(resolve) {
    setTimeout(resolve, 3000);
  });

  img.remove();

  return githubUser;
}

showAvatar();
```

Pretty clean and easy to read, right? Much better than before.

## > Modern browsers allow top-level `await` in modules

In modern browsers, `await` on top level works just fine, when we're inside a module. We'll cover modules in article [Modules, introduction](https://javascript.info/modules-intro).

For instance:

```js
let response = await fetch("user.json");
let user = await response.json();

console.log(user);
```

If we're not using modules, or [older browsers](https://caniuse.com/mdn-javascript_operators_await_top_level) must be supported, there's a universal recipe: wrapping into an anonymous async function.

Like this:

```js
(async () {
  let response = await fetch("user.json");
  let user = await response.json();
  // ...
})();
```

## > `await` accepts "thenables"

Like `promise.then`, `await` allows us to use thenable objects (those with a callable `then` method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports `.then`, that's enough to use it with `await`.

```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    // resolve with this.num * 2 after 1000ms
    setTimeout(() => {
      resolve(this.num * 2);
    }, 1000); // (*)
  }
}

async function fn() {
  // waits from 1 second, then result becomes 2
  let result = await new Thenable(1);
  console.log(result);
}

fn();
```

If `await` gets a non-promise object with `.then`, it calls that method providing the built-in functions `resolve` and `reject` as arguments (just as it does for a regular `Promise` executor). Then `await` waits until one of them is called (in the example above it happens in the line `(*)`) and then proceeds with the result.

## > Async class methods

To declare an async class method, just prepend it with `async`:

```js
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

// 1 (this is the same as (result => console.log(result)))
new Waiter().wait().then(console.log);
```

The meaning is the same: it ensures that the returned value is a promise and enables `await`.

## Error handling

If a promise resolves normally, then `await promise` returns the result. But in the case of a rejection, it throws the error, just as if there were a `throw` statement at that line.