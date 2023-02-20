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
