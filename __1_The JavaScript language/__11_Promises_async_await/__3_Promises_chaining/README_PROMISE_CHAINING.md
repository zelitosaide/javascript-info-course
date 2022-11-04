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