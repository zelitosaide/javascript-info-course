// const elem = document.getElementById("elem");
// elem.style.backgroundColor = "red";
document.getElementById("elem").style.backgroundColor = "red";

// That’s unless we declare a JavaScript variable with the same name, then it takes precedence:
const elem = 5;
console.log(elem);

// or
if (elem instanceof Object) {
  elem.style.backgroundColor = "green";
}

const elemContent = window["elem-content"];
elemContent.style.color = "white";

document.getElementById("elem").style.backgroundColor = "yellow";

const elements = document.querySelectorAll("ul > li:last-child");
console.log(elements);
const elements2 = document.body.children;
console.log(elements2);

for (const el of elements) {
  console.log(el.innerHTML);
}

const elements3 = document.body.querySelectorAll("ul > li:last-child");
console.log(elements3, elements);

// document.querySelectorAll(':hover')

// will return the collection with elements that the pointer is over now (in nesting order: from the outermost <html> to the most nested one).
const li1 = document.querySelector("ul > li:last-child");
console.log(li1 === elements[0]);

const links = document.body.children;

for (const elem of document.body.children) {
  if (elem.matches("a[href$='zip']")) {
    elem.innerHTML = "http://example.com/file.zip";
  }
}
