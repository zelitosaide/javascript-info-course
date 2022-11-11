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