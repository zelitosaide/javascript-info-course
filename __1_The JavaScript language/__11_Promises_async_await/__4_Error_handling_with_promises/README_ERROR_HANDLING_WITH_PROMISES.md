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

```