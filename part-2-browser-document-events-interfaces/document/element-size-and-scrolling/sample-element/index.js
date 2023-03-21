const example = document.getElementById("example");
const styles = getComputedStyle(example);
const width = +styles.width.split("px")[0]; // width - scrollbar
const height = +styles.height.split("px")[0];
const padding = +styles.paddingLeft.split("px")[0];
const clientWidthExperimental = width + 2 * padding;
const clientHeightExperimental = height + 2 * padding;
const clientWidth = "content width (width + padding - scrollbar)";
const clientHeight = "content height (height + padding)";

const borderLeft = example.clientLeft;
const borderTop = example.clientTop;
const left = example.offsetLeft;

console.log(clientWidth, example.clientWidth, clientWidthExperimental);
console.log(clientHeight, example.clientHeight, clientHeightExperimental);
console.log("border left", borderLeft);
console.log("border top", borderTop);
console.log("left", left);
