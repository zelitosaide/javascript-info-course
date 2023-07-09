const example = document.getElementById("example");
const styles = getComputedStyle(example);
const width = +styles.width.split("px")[0]; // width - scrollbar
const height = +styles.height.split("px")[0];
const padding = +styles.paddingLeft.split("px")[0];
const border = +styles.borderTop.split("px")[0];
const clientWidthExperimental = width + 2 * padding;
const clientHeightExperimental = height + 2 * padding;
const clientWidth = "content width (width + padding - scrollbar)";
const clientHeight = "content height (height + padding)";

const borderLeft = example.clientLeft;
const borderTop = example.clientTop;
const left = example.offsetLeft;
const _top = example.offsetTop;
const containerHeight = "container height (border + height + padding)";
const containerHeightExperimental = border * 2 + height + padding * 2;
const containerWidth = "container width (border + height + padding)";
const containerWidthExperimental = border * 2 + padding * 2 + width + 16;

console.log(clientWidth, example.clientWidth, clientWidthExperimental);
console.log(clientHeight, example.clientHeight, clientHeightExperimental);
console.log("border left", borderLeft);
console.log("border top", borderTop);
console.log("left", left);
console.log("top", _top);
console.log(containerHeight, example.offsetHeight, containerHeightExperimental);
console.log(containerWidth, example.offsetWidth, containerWidthExperimental);
console.log("scrollHeight", example.scrollHeight);
console.log("scrollLeft", example.scrollLeft);
console.log("scrollWidth", example.scrollWidth);

function printScrollTop() {
  console.log(
    "scrollTop",
    example.scrollTop,
    example.scrollHeight - example.scrollTop
  );
}
