/**
 * That’s the nearest ancestor that is one of the following:
 * 1 - CSS-positioned (position is absolute, relative, fixed or sticky), or
 * 2 - <td>, <th>, or <table>, or
 * 3 - <body>.
 */

// There are several occasions when offsetParent is null:

// For not shown elements (display:none or not in the document).
const hidden = document.createElement("div");
hidden.style.display = "none";
hidden.innerHTML = `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
necessitatibus itaque commodi cum quo eligendi hic libero! Veniam at
quisquam quia possimus perspiciatis totam quo magni minus, impedit
tempore ipsam.</p>`;

document.getElementById("hidden").append(hidden);
console.log(hidden.offsetParent);

const notInTheDocumentContainer = document.createElement("div");
notInTheDocumentContainer.style.position = "relative";
const notInTheDocument = document.createElement("div");
notInTheDocumentContainer.append(notInTheDocument);

console.log("::", notInTheDocument.offsetParent);

// For <body> and <html>.
console.log("body", document.body.offsetParent);
console.log("html", document.documentElement.offsetParent);

// For elements with position:fixed. (in chrome only)
let i = 1;

const div = document.createElement("div");
div.style.top = 0 + "px";
div.style.right = 0 + "px";
div.style.position = "fixed";
div.innerHTML = "<h1>" + i++ + "</h1>";
document.body.append(div);

// offsetWidth = 390 – the outer width, can be calculated as inner
// CSS-width (300px) plus paddings (2 * 20px) and borders (2 * 25px).

// offsetHeight = 290 – the outer height.

// Geometry properties are zero/null for elements that are not displayed
// Geometry properties are calculated only for displayed elements.

/**
 * If an element (or any of its ancestors) has display:none or is not in the
 * document, then all geometry properties are zero (or null for offsetParent).
 */

const elem = document.createElement("div");
elem.style.display = "none";
document.body.append(elem);
console.log(elem.offsetParent);
console.log(elem.offsetWidth);
console.log(elem.offsetHeight);
console.log(elem.offsetLeft);
console.log(elem.offsetTop);

console.log("----");

const elem2 = document.createElement("div");
console.log(elem2.offsetParent);
console.log(elem2.offsetWidth);
console.log(elem2.offsetHeight);
console.log(elem2.offsetTop);
console.log(elem2.offsetLeft);

// case with parent set display:none
const elem3 = document.createElement("div");
const elem4 = document.createElement("div");
elem3.id = "elem3";
elem3.style.position = "relative";
elem4.style.cssText =
  "position: absolute; background-color: pink; top: 10px; left: 10px; width: 50px; height: 50px";
elem3.append(elem4);
elem3.style.display = "none";

document.body.append(elem3);

console.log("parent", elem4.offsetParent);
console.log("parent", elem4.offsetWidth);
console.log("parent", elem4.offsetHeight);
console.log("parent", elem4.offsetTop);
console.log("parent", elem4.offsetLeft);

// case with parent not added to document
const elem5 = document.createElement("div");
elem5.style.position = "relative";
const elem6 = document.createElement("div");
elem6.style.cssText =
  "position: absolute; background-color: pink; top: 10px; right: 10px; width: 50px; height: 50px";
elem5.append(elem6);

// document.body.append(elem5);

console.log(":(", elem6.offsetParent);
console.log(":(", elem6.offsetWidth);
console.log(":(", elem6.offsetHeight);
console.log(":(", elem6.offsetTop);
console.log(":(", elem6.offsetLeft);

/**
 * For example, offsetParent is null, and offsetWidth, offsetHeight are 0 when we created an
 * element, but haven’t inserted it into the document yet, or it (or its ancestor) has display:none.
 */

function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}

// Please note that such isHidden returns true for elements that are on-screen, but have zero sizes.
