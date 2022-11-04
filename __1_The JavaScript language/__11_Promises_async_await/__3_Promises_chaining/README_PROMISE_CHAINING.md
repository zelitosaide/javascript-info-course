# Promises chaining

Let's return to the problem mentioned in the chapter [Introduction: callbacks](https://javascript.info/callbacks): we have a sequence of asynchronous tasks to be performed one after another - for instance, loading scripts. How can we code it well?

Promises provide a couple of recipes to do that.

In this chapter we cover promise chaining.

It look like this:

```javascript
const { log: print } = console;

new Promise(function(resolve, reject) {
  
  setTimeout(function() { resolve(1); }, 1000); // (*)

}).then(function(result) { // (**)

  print(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  print(result); // 2
  return result * 2;

}).then(function(result) {

  print(result); // 4
  return result * 2;

});
```

The idea is that the result is passed through the chain of `.then` handlers.

Here the flow is:

1. The initial promise resolves in 1 second `(*)`,
2. Then the `.then` handler is called `(**)`, which in turn creates a new promise (resolved with `2` value).
3. The next `.then (***)` gets the result of the previous one, processes it (doubles) and passes it to the next handler.
4. ...and so on.

As the result is passed along the chain of handlers, we can see a sequence of `print` calls: `1` -> `2` -> `4`.

<br>

  ![Resolve](chain.svg)

<br>

The whole thing works, because every call to a `.then` return a new promise, so that we can call the next `.then` on it.

When a handler returns a value, it becomes the result of that promise, so the next `.then` is called with it.

**A classic newbie error: technically we can also add many** `.then` **to a single promise.  This is not chaining.**

For example:

```javascript
const { log: print } = console;

const promise = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve(1); }, 1000);
});

promise.then(function(result) {
  print(result);  // 1
  return result * 2;
});

promise.then(function(result) {
  print(result);  // 1
  return result * 2;
});

promise.then(function(result) {
  print(result);  // 1
  return result * 2;
});
```

What we did here is just several handlers to one promise. They don't pass the result to each other; instead they process it independently.

Here's the picture (compare it with the chaining above):

<br>

  ![Resolve](not_chaining.svg)

<br>

All `.then` on the same promise get the same result - the result of that promise. So in the code above all `print` show the same: `1`.

In practice we rarely need multiple handlers for one promise. Chaining is used much more often.

## Returning promises

A handler, used in `.then(handler)` may create and return a promise.

In that case further handlers wait until it settles, and then get its result.

For instance:

```javascript
const { log: print } = console;

new Promise(function(resolve, reject) {
  
  setTimeout(function() { resolve(1); }, 1000);

}).then(function(result) {

  print(result);  // 1

  return new Promise(function(resolve, reject) {  // (*)
    setTimeout(function() { resolve(result * 2); }, 1000);
  });

}).then(function(result) {  // (**)

  print(result);  // 2

  return new Promise(function(resolve, reject) {
    setTimeout(function() { resolve(result * 2); }, 1000);
  });

}).then(function(result) {

  print(result);  // 4

});
```

Here the first `.then` show `1` and returns `new Promise(...)` in the line `(*)`. After one second it resolves, and the result (the argument of `resolve`, here it's `result * 2`) is passed on to the handler of the second `.then`. That handler is in the line `(**)`, it shows `2` and does the same thing.

So the output is the same as in the previous example: `1` -> `2` -> `4`, but now with 1 second delay between `print` calls.

Returning promises allows us to build chains of asynchronous actions.