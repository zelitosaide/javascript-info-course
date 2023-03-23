const example = document.getElementById("example");

console.log("offsetWidth", example.offsetWidth, 250 + 2 * 25 + 2 * 20);
console.log("offsetHeight", example.offsetHeight, 150 + 2 * 25 + 2 * 20);

// Geometry properties are zero/null for elements that are not displayed
// Geometry properties are calculated only for displayed elements.
// If an element (or any of its ancestors) has display:none or is not in
// the document, then all geometry properties are zero (or null for
// offsetParent).
