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