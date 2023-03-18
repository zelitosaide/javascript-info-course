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
const notInTheDocument = document.createElement("div");
// For <body> and <html>.
// For elements with position:fixed.
