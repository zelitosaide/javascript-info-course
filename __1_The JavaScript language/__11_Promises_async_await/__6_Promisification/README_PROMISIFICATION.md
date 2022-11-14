# Promisification

"Promisification" is a long word for a simple transformation. It's the conversion of a function that accepts a callback into a function that returns a promise.

Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.

For better understanding, let's see an example.

For instance, we have `loadScript(src, callback)` from the chapter [introduction: callbacks](https://javascript.info/callbacks).

```javascript
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = function() {
    callback(null, script);
  }
  script.onerror = function() {
    callback(new Error())
  }

  document.head.append(script);
}

// usage:
// loadScript("path/script.js", function(error, script) { ... });
```

The function loads a script with the given `src`, and then calls `callback(error)` in case of an error, or `callback(null, script)` in case of successful loading. That's a widespread agreement for using callbacks, we saw it before.

Let's promisify it.

We'll make a new function `loadScriptPromise(src)`, that does the same (loads the script), but returns a promise instead of using callbacks.

In other words, we pass it only `src` (no `callback`) and get a promise in return, that resolves with `script` when the load is successful, and rejects with the error otherwise.

Here it is:

```javascript
const loadScriptPromise(src) {
  return new Promise(function(resolve, reject) {
    loadScript(src, function(error, script) {
      if (error) {
        reject(error);
      } else {
        resolve(script);
      }
    })
  });
}
```