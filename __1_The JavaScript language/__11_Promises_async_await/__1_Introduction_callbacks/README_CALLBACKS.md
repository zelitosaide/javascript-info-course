# Introduction: callbacks

> **We use browser methods in examples here**
> 
> To demonstrate the use of callbacks, promises and other abstract concepts, we'll be using some browser methods: specifically, loading scripts and performing simple document manipulations.
> 
> If you're not familiar with these methods, and their usage in the examples is confusing, you may want to read a few chapters from the [next part](https://javascript.info/document) of the tutorial.
> 
> Although, we'll try to make things clear anyway. There won't be anything really complex browser-wise.

Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. In other words, actions that we initiate now, but they finish later.

For instance, one such function is the `setTimeout` function.

There are other real-world examples of asynchronous actions, e.g. loading scripts and modules (we'll cover them in later chapters).

Take a look at the function `loadScript(src)`, that loads a script with the given `src`:

```javascript
function loadScript(src) {
  // creates a <script> tag and append it to the page
  // this causes the script with given src to start loading and run when complete
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}
```

It inserts into the document a new, dynamically created, `<script src="...">` with the given `src`. The browser automatically starts loading it and executes when `complete`.

We can use this functions like this:

```javascript
// load and execute the script at the given path
loadScript("./script");
```

The script is executed "aynchronously", as it starts loading now, but runs later, when the function has already finished.

If there's any code below `loadScript(...)`, it doesn't wait until the script loading finishes.

```javascript
loadScript("./script.js");
// the code below loadScript
// doesn't wait for the script loading to finish
// ...
```

Let's say we need to use the new script as soon as it loads. It declares new functions, and we want to run them.

But if we do that immediately after the `loadScript(...)` call, that wouldn't work:

```javascript
loadScript("./script.js");  // the script has "function newFunction() { ... }"

newFunction();  // no such function!
```