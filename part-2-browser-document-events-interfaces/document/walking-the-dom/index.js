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
