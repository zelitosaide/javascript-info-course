const example = document.getElementById("example");

function showScrollTop() {
  console.log("scrollTop", example.scrollTop);
  console.log("scrollLeft", example.scrollLeft);
}

// scrollLeft/scrollTop can be modified
// Most of the geometry properties here are read-only, but
// scrollLeft/scrollTop can be changed, and the browser will scroll the
// element.
