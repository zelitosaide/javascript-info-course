const html = document.documentElement;
const body = document.body;
const head = document.head;

for (let i = 0; i < body.childNodes.length; i++) {
  alert(body.childNodes[i]);
}

// or

for (const node of body.childNodes) {
  console.log(node);
}

if (body.hasChildNodes()) {
  const firstChild = body.firstChild;
  alert(firstChild === body.childNodes[0]);

  const lastChild = body.lastChild;
  alert(lastChild === body.childNodes[body.childNodes.length - 1]);
}

if (document.body.hasChildNodes()) {
  for (const node of document.body.childNodes) {
    console.log(node);
  }
}

alert(document.body.childNodes.filter);

alert(Array.from(document.body.childNodes).filter);

alert(document.documentElement === document.body.parentNode);

alert(document.head.nextSibling.nextSibling);

alert(document.body.previousSibling.previousSibling);

const parentNode = document.documentElement.parentNode;
const parentElement = document.documentElement.parentElement;

console.log(parentNode, parentElement);

let elem = b;

while (elem) {
  console.log(elem);
  elem = elem.parentElement;
}

// or
// while ((elem = elem.parentElement)) {
//   alert(elem);
// }

for (const elem of document.body.children) {
  console.log("elem: " + elem);
}

// or

for (let i = 0; i < document.body.children.length; i++) {
  console.log("elem2: " + document.body.children[i]);
}
