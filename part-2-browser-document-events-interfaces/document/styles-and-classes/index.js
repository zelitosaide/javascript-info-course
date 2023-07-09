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

// Full rewrite with style.cssText

const button = document.createElement("div");

button.innerHTML = "Click me";
button.style.cssText = `color: red !important;
  background-color: yellow;
  width: 100px;
  text-align: center;
`;

const cssText = button.style.cssText;

document.body.append(button);

// This property is rarely used, because such assignment removes all existing styles:
// it does not add, but replaces them. May occasionally delete something needed. But we
// can safely use it for new elements, when we know we won’t delete an existing style.

// The same can be accomplished by setting an attribute: div.setAttribute('style', 'color: red...').

const alert = document.createElement("div");
alert.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

alert.setAttribute(
  "style",
  "color: white; background-color: #555; padding: 10px; margin-top: 20px"
);

document.body.append(alert);

// Mind the units
// Don't forget add the CSS units to values.

// For instance, we should not set elem.style.top to 10, but rather to 10px.
// Otherwise it wouldn’t work:

// doesn't work!
// document.body.style.margin = 20;

// Computed styles: getComputedStyle
// getComputedStyle.
// getComputedStyle(element, [pseudo])
// getComputedStyle requires the full property name

/**
 *
 * Summary
 *
 * To manage classes, there are two DOM properties:
 *
 *  className – the string value, good to manage the whole set of classes.
 *  classList – the object with methods add/remove/toggle/contains, good for individual classes.
 *
 * To change the styles:
 *  The style property is an object with camelCased styles. Reading and writing to it has the same meaning
 *  as modifying individual properties in the "style" attribute. To see how to apply important and other
 *  rare stuff – there’s a list of methods at MDN.
 *
 * The style.cssText property corresponds to the whole "style" attribute, the full string of styles.
 *
 * To read the resolved styles (with respect to all classes, after all CSS is applied and final values are
 * calculated):
 *
 *  The getComputedStyle(elem, [pseudo]) returns the style-like object with them. Read-only.
 */
