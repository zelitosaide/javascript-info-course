console.log(document.body.constructor.name);

// or
console.log(document.body.toString());
console.log(document.constructor.name);

console.log(document.documentElement.constructor.name);

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

console.dir(document.body.prototype);
