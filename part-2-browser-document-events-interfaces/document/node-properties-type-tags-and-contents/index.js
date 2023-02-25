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

console.dir(document.body.__proto__);
console.log(document.body.__proto__);

const elem = document.body;

console.log(elem.nodeType);
console.log(elem.firstChild.nodeType);
console.log(document.nodeType);
console.log(elem.parentNode.parentNode === document);

console.log(document.body.nodeName);
console.log(document.body.tagName);

console.log(document.nodeName);
console.log(document.tagName);

console.log(document.body.firstChild.nextSibling.nodeName);
console.log(document.body.firstChild.nextSibling.tagName);
