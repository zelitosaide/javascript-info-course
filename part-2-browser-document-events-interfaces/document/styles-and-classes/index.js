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
document.body.style.backgroundColor = prompt("Background color?", "green");

// Prefixed properties
// Browser-prefixed properties like -moz-border-radius, -webkit-border-radius
// also follow the same rule: a dash means upper case.

// button.style.MozBorderRadius = '5px';
// button.style.WebkitBorderRadius = '5px';

// Resetting the style property
const block = document.getElementById("block");
block.style.backgroundColor = "#777";
block.style.width = "100px";
block.style.height = "100px";
block.style.display = "none";

setTimeout(function () {
  // Instead of this:
  // delete block.style.display;

  // Do this:
  // block.style.display = "";

  // Or this:
  block.style.removeProperty("display");
}, 1000);
