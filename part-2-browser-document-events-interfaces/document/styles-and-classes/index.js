let _top = ""; /* complex calculations */
let left = ""; /* complex calculations */

const elem = document.createElement("div");

elem.style.top = _top;
elem.style.left = left;

// className and classList

// elem.className
// If we assign something to elem.className, it replaces the whole string of classes.

// elem.classList
// The elem.classList is a special object with methods to add/remove/toggle a single class.

// elem.classList.add/remove("class") – adds/removes the class.
document.body.classList.add("add");
document.body.classList.remove("new-class");
// elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
const toggle = document.body.classList.toggle("toggle");
// elem.classList.contains("class") – checks for the given class, returns true/false.
const contains = document.body.classList.contains("add");

// Element style

// Setting elem.style.width="100px" works the same as if we had in the attribute
// style a string width:100px.
// For multi-word property the camelCase is used:

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth
