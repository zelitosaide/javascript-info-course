const example = document.getElementById("example");

console.log("offsetWidth", example.offsetWidth, 250 + 2 * 25 + 2 * 20);
console.log("offsetHeight", example.offsetHeight, 150 + 2 * 25 + 2 * 20);

// Geometry properties are zero/null for elements that are not displayed
// Geometry properties are calculated only for displayed elements.
// If an element (or any of its ancestors) has display:none or is not in
// the document, then all geometry properties are zero (or null for
// offsetParent).

// For example, offsetParent is null, and offsetWidth, offsetHeight are 0
// when we created an element, but haven’t inserted it into the document
// yet, or it (or its ancestor) has display:none.
const notInTheDOM = document.createElement("div");
console.log("offsetParent", notInTheDOM.offsetParent);
console.log("offsetWidth", notInTheDOM.offsetWidth);
console.log("offsetHeight", notInTheDOM.offsetHeight);

const displayNone = document.createElement("div");
displayNone.style.display = "none";
document.body.append(displayNone);

console.log("offsetParent", displayNone.offsetParent);
console.log("offsetWidth", displayNone.offsetWidth);
console.log("offsetheight", displayNone.offsetHeight);

const ancestor = document.createElement("div");
const child = document.createElement("button");
child.innerHTML = "Hi there!";
ancestor.append(child);
document.body.append(ancestor);
