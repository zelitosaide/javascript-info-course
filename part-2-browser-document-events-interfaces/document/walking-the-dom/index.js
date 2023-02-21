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

const rows = table.rows;

for (const row of table.rows) {
  console.log(row);
}

const caption = table.caption;
const tHead = table.tHead;
const tFoot = table.tFoot;

console.log("Caption: " + caption);
console.log("THead: " + tHead);
console.log("TFoot: " + tFoot);

const tBodies = table.tBodies;

for (const node of tBodies) {
  console.log(node);
}

const tBodyRows = table.tBodies[0].rows;
console.log(tBodyRows);

const tHeadRows = table.tHead.rows;
console.log(tHeadRows);

const tFootRows = table.tFoot.rows;
console.log(tFootRows);

const cells = table.rows[0].cells;
console.log(cells);

const sectionRowIndex = table.rows[2].sectionRowIndex;
console.log(sectionRowIndex);

const rowIndex = table.rows[2].rowIndex;
console.log(rowIndex);

const cellIndex = table.tHead.rows[0].cells[1].cellIndex;
console.log(cellIndex);
