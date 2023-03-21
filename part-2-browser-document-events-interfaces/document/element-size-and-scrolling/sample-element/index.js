const example = document.getElementById("example");
const styles = getComputedStyle(example);
const width = +styles.width.split("px")[0]; // width - scrollbar
const padding = +styles.paddingLeft.split("px")[0];
const clientWidthExperimental = width + 2 * padding;
const clientWidth = "content width (width + padding - scrollbar)";

const borderLeft = example.clientLeft;

console.log(clientWidth, example.clientWidth, clientWidthExperimental);
console.log("border left", example.clientLeft);
