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
